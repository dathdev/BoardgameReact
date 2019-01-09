import React, { Component } from 'react';
import Square from './square';
import './table.css';

class Table extends Component {

    constructor(props) {
        super(props);
        this.formTable = this.formTable.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    handleSquareClick(clickedSquare) {
        this.props.onTableClick(clickedSquare);
    }

    formTable() { // get the board
        var table = [];
        for (let i=0; i < this.props.height; i++){
            let row = [];
            for (let j=0; j < this.props.width; j++)
                row.push(<Square value={this.props.board[i][j]} key={i*this.props.width + j} x={i} y={j} onSquareClick={this.handleSquareClick} />);
            table.push(<li className="row" key={i}>{row}</li>);
        }
        return table;
    }

    render() {
       return (
            <ul className="table">
                {this.formTable()}
            </ul>
        );
    }

}

export default Table;
