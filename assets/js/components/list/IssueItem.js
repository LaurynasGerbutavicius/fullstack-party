import React, {Component} from 'react';
import moment from "moment";
import IssueLabel from "./IssueLabel";

class IssueItem extends Component {

    render() {
        return (
            <a className="issue-item" href={`/issue/show/${this.props.number}`}>
                <div className="issue-main">
                    <p className="title">
                        {this.props.title}
                        {this.props.labels.map((label) => (<IssueLabel key={label.id} id={label.id} color={label.color} name={label.name} />))}
                    </p>
                    <p className="details">
                        #{this.props.number} opened {moment(this.props.created).fromNow()} by {this.props.user}
                    </p>
                </div>
                <div className="comments-count">{this.props.comments}</div>
            </a>)
    }
}

export default IssueItem;