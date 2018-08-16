import React, {Component} from 'react';
import moment from "moment";

class IssueComment extends Component {
    render() {

        return (
            <div className="comment">
                <div>
                    <img className="avatar" src={this.props.img} alt={this.props.user}/>
                </div>
                <div className="comment-item">
                    <div className="comment-top">
                        <div className="arrow"></div>
                        <span className="user">{this.props.user}</span>
                        <span className="time"> commented {moment(this.props.created).fromNow()}</span>
                    </div>
                    <hr/>
                    <div className="comment-body">
                        {this.props.body}
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueComment;