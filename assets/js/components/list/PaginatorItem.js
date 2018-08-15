import React, { Component } from 'react';

class PaginatorItem extends Component {
    render() {
        if (this.props.page < 1) {return null}
        let isCurrent = this.props.page === this.props.current;
        let active = isCurrent && !this.props.text;
        let disabled = isCurrent && this.props.text;
        let classes = "paginate center-items" + (active ? " active" : "") + (disabled ? " disabled" : "");
        let onClick = disabled ? null : this.props.onPageChange;

        if (this.props.page === '...') {
            return <a className={classes}>{this.props.title}</a>
        }

        return <a onClick={onClick} className={classes} data-page={this.props.page}>{this.props.title}</a>
    }
}

export default PaginatorItem;