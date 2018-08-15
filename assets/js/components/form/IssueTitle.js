import React, { Component } from 'react';
import moment from "moment";

class IssueTitle extends Component {
    render() {
        return (
            <div className="issue-form-header">
                <p>
                    {this.props.title}
                    <span className="issue-number">#{this.props.number}</span>
                </p>
                <p>
                    <span className="issue-state">{this.props.state.toUpperCase()}</span>
                    {this.props.user} opened this issue {moment(this.props.created).fromNow()}
                    <span className="issue-comments-count">{this.props.comments} {this.props.comments === 1 ? 'comment' : 'comments'}</span>
                </p>
            </div>
        );
    }
}

export default IssueTitle;