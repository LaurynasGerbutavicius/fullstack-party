import React, { Component } from 'react';
import PaginatorItem from "./PaginatorItem";

class Paginator extends Component {

    pagination(current, last) {
        let delta = 2,
            left = current - delta,
            right = current + delta + 1,
            pages = [],
            pagesWithDots = [],
            l;

        for (let i = 1; i <= last; i++) {
            if (i === 1 || i === last || i >= left && i < right) {
                pages.push(i);
            }
        }

        for (let i of pages) {
            if (l) {
                if (i - l === 2) {
                    pagesWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    pagesWithDots.push('...');
                }
            }
            pagesWithDots.push(i);
            l = i;
        }

        return pagesWithDots;
    }

    render() {

        let pages = this.pagination(this.props.page, this.props.total_pages);
        let prev = this.props.page === 1 ? 1 : (this.props.page - 1);
        let next = this.props.page === this.props.total_pages ? this.props.total_pages : (this.props.page + 1);

        return (
            <div className="nav-pages center-items">
                <PaginatorItem onPageChange={this.props.onPageChange} title="Previous" page={prev} current={this.props.page} text={true}/>
                {pages.map(page => (
                    <PaginatorItem key={page} onPageChange={this.props.onPageChange} title={page} page={page} current={this.props.page} text={false}/>
                ))}
                <PaginatorItem onPageChange={this.props.onPageChange} title="Next" page={next} current={this.props.page} text={true}/>
            </div>
        )
    }
}

export default Paginator;