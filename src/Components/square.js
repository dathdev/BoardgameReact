import React, { Component } from 'react';
import './square.css';

class SquareComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("x = " + this.props.x + "; y = " + this.props.y + ";");
        this.props.onSquareClick([this.props.x, this.props.y]);
    }

    render() {
        return (
            <div className="square" onClick={() => this.handleClick()}>
                <span className="square_value noselect">{this.props.value}</span>
            </div>
        );
    }
}

export default SquareComponent;
