import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardComponent from './Components/board';
import Game, { Board } from './Models/Game';

var sample_board = [
    ['o', 'x', 'x', '', 'x'],
    ['', 'o', 'o', 'x', ''],
    ['', '', 'o', 'x', ''],
    ['', '', 'o', 'x', ''],
    ['', '', '', 'o', 'x']
]

class App extends Component {
    constructor(props) {
        super(props);
        this.handleBoardClick = this.handleBoardClick.bind(this);
        this._game = new Game(10, 10, 'x');
        // this.state = {};
    }

    handleBoardClick(clickedSquare) {
        console.log(clickedSquare);
        var x = clickedSquare[0], y = clickedSquare[1];
        this._game.play(x,y);
        // if (this._game.board.board[x][y] === ''){
        //     this._game.board.board[x][y] = 'x';
        // } else {
        //     this._game.board.board[x][y] = '';
        // }
        this.setState({});
    }

    render() {
        return (
            <div className="App">
                <h1>Caro</h1>
                <BoardComponent 
                    width={this._game.board.width} 
                    height={this._game.board.height} 
                    board={this._game.board.board} 
                    onBoardClick={this.handleBoardClick}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
