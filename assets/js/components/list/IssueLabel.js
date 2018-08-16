import React, {Component} from 'react';


class IssueLabel extends Component {

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    labelColorClass(hex) {
        let {r,g,b} = this.hexToRgb(hex);
        return (r*0.299 + g*0.587 + b*0.114) > 186 ? 'black' : 'white';
    }


    render() {
        let hex = '#' + this.props.color;
        return (
            <span className={`label ${this.labelColorClass(hex)}`} style={{backgroundColor: hex}}>
            {this.props.name}
            </span>
    )
    }
}

export default IssueLabel;