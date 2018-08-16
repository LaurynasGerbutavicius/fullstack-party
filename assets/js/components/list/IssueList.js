import React, {Component} from 'react';
import IssueItem from "./IssueItem";
import IssueFilterItem from "./IssueFilterItem";
import Paginator from "./Paginator";

class IssueList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: [],
            summary: [],
            loaded: false,
            open: true,
            closed: false,
            open_count: null,
            closed_count: null,
            state: 'open',
            page: 1,
            total_pages: 1,
        }
    }

    componentDidMount() {
        this.getData('open')
    }

    getData(state = 'open', page = 1) {
        let issues = this.getIssues(state, page);
        let open_count = this.state.open_count ? this.state.open_count : this.getIssueCount('open');
        let closed_count = this.state.closed_count ? this.state.closed_count : this.getIssueCount('closed');
        let self = this;

        Promise.all([issues, open_count, closed_count]).then((result) => {
            let [issues, open_count, closed_count] = result;
            const results_per_page = 30;
            let total_pages = Math.ceil(state === 'open' ? open_count / results_per_page : closed_count / results_per_page);
            let open = state === 'open';
            let closed = state === 'closed';
            self.setState({issues, loaded: true, state, page, open_count, closed_count, total_pages, open, closed});
        });
    }

    getIssueCount(issue_state) {
        return fetch(`/api/issue_count/${issue_state}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                return result.total_count;
            });
    }

    getIssues(issue_state, page) {
        return fetch(`/api/issue_list/${issue_state}/${page}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                return result;
            });
    }

    render() {
        if (!this.state.loaded) {
            return null
        }
        return (
            <div>
                <div className="issue-summary center-items">
                    <IssueFilterItem onFilter={()=>this.getData('open', 1)} active={this.state.state} name="Open" type="open" count={this.state.open_count} />
                    <IssueFilterItem onFilter={()=>this.getData('closed', 1)} active={this.state.state} name="Closed" type="closed" count={this.state.closed_count} />
                </div>
                <div className="issue-items" id="items">
                    {this.state.issues.map(issue => (
                        <IssueItem key={issue.number} number={issue.number} title={issue.title} labels={issue.labels} created={issue.created_at}
                                   user={issue.user.login} comments={issue.comments}/>
                        )
                    )}
                </div>
                <Paginator onPageChange={(e)=>this.getData(this.state.state, parseInt(e.currentTarget.dataset.page))} page={this.state.page} total_pages={this.state.total_pages}/>
            </div>
        );
    }

}

export default IssueList;