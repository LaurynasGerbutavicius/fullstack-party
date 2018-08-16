import React, {Component} from 'react';
import moment from "moment";

class IssueTitle extends Component {
    render() {
        return (
            <div className="issue-form-header">
                <p className="form-title">
                    {this.props.title}&nbsp;
                    <span className="issue-number">#{this.props.number}</span>
                </p>
                <p>
                    <span className="issue-state"><i
                        className={`ico-${this.props.state}`}></i>{this.props.state.toUpperCase()}</span>
                    <span className="user">{this.props.user}</span>
                    <span className="time">&nbsp;opened this issue {moment(this.props.created).fromNow()}</span>
                    <span
                        className="issue-comments-count">{this.props.comments} {this.props.comments === 1 ? 'comment' : 'comments'}</span>
                </p>
            </div>
        );
    }
}

export default IssueTitle;