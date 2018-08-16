import React, {Component} from 'react';
import IssueTitle from "./IssueTitle";
import IssueComment from "./IssueComment";

class IssueForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            issue: null,
            comments: []
        }
    }


    componentDidMount() {
        this.getData()
    }

    getData() {
        let element = document.getElementById('issue-form');
        let id = element.getAttribute('data-id');

        let issueData = this.getIssueData(id);
        let commentsData = this.getCommentsData(id);
        let self = this;

        Promise.all([issueData, commentsData]).then((result) => {
            let [issue, comments] = result;
            self.setState({issue, comments, loaded: true});
        });

    }

    getIssueData(number) {
        return fetch(`/api/issue/${number}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                return result;
            });
    }

    getCommentsData(number) {
        return fetch(`/api/issue_comments/${number}`)
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
        let issue = this.state.issue;
        return (
            <div>
                <a className="back" href="/issue/list"><i className="ico-back"></i> Back to Issues</a>
                <IssueTitle title={issue.title} number={issue.number} state={issue.state}
                            created={issue.created_at} comments={issue.comments} user={issue.user.login}/>
                {this.state.comments.map(comment => (
                    <IssueComment key={comment.id} img={comment.user.avatar_url} user={comment.user.login}
                                  created={comment.created_at} body={comment.body}/>
                ))}
            </div>
        );
    }
}

export default IssueForm;