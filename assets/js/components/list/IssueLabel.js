import React, {Component} from 'react';


class IssueLabel extends Component {
    render() {
        return (<span className="label" style={{backgroundColor: '#' + this.props.color}}>{this.props.name}</span>)
    }
}

export default IssueLabel;