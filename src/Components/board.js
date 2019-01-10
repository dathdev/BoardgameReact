import React, { Component } from 'react';
import SquareComponent from './square';
import './board.css';

class BoardComponent extends Component {

    constructor(props) {
        super(props);
        this.formBoard = this.formBoard.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    handleSquareClick(clickedSquare) {
        this.props.onBoardClick(clickedSquare);
    }

    formBoard() { // get the board
        var board = [];
        for (let i=0; i < this.props.height; i++){
            let row = [];
            for (let j=0; j < this.props.width; j++)
                row.push(<SquareComponent value={this.props.board[i][j]} key={i*this.props.width + j} x={i} y={j} onSquareClick={this.handleSquareClick} />);
            board.push(<li className="row" key={i}>{row}</li>);
        }
        return board;
    }

    render() {
       return (
            <ul className="board">
                {this.formBoard()}
            </ul>
        );
    }

}

export default BoardComponent;
