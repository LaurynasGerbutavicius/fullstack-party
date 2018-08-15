import React, { Component } from 'react';

class IssueFilterItem extends Component {
    render() {
        let className = this.props.active === this.props.type ? "filter active" : "filter";
        return <a className={className} onClick={this.props.onFilter} id={this.props.type}>
                <span className="count">{this.props.count}</span>
            {this.props.name}</a>
    }
}

export default IssueFilterItem;