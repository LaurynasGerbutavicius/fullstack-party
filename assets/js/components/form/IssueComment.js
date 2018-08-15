import React, { Component } from 'react';
import moment from "moment";

class IssueComment extends Component {
    render() {

        return (
            <div>
                <div>
                    <img src={this.props.img} alt={this.props.user} />
                </div>
                <div>
                    {this.props.user} commented {moment(this.props.created).fromNow()}
                    <hr/>
                    {this.props.body}
                </div>
            </div>
        );
    }
}

export default IssueComment;