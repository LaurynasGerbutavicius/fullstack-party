import React, {Component} from 'react';
import moment from "moment";
import IssueLabel from "./IssueLabel";

class IssueItem extends Component {

    render() {
        return (
            <div className="issue-wrapper">
            <div className={`issue-item ${this.props.state}`} onClick={() => window.location.href=`/issue/show/${this.props.number}`}>
                <span className={`ico-${this.props.state} ico-highlight`}></span>
                <div className="issue-main">
                    <p className="title">
                        {this.props.title}
                        {this.props.labels.map((label) => (<IssueLabel key={label.id} id={label.id} color={label.color} name={label.name} />))}
                    </p>
                    <p className="details">
                        <span className="time">#{this.props.number} opened {moment(this.props.created).fromNow()} by </span>
                        <span className="user">{this.props.user}</span>
                    </p>
                </div>
                <div className="comments-count">{this.props.comments}</div>
            </div>
            </div>)
    }
}

export default IssueItem;