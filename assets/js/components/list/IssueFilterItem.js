import React, { Component } from 'react';

class IssueFilterItem extends Component {
    render() {
        let className = this.props.active === this.props.type ? "filter active" : "filter";
        return <a className={className} onClick={this.props.onFilter} id={this.props.type}>
            <span className={`ico-${this.props.type}`}></span>
                <span className="count">{new Intl.NumberFormat('de-DE').format(this.props.count)}&nbsp;</span>
            {this.props.name}</a>
    }
}

export default IssueFilterItem;