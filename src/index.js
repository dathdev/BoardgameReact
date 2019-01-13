import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardComponent from './Components/board';
import CurrentTurnComponent from './Components/current-turn'
import Game, { Board, WINNING_LINE, GAME_OVER, GAME_CONTINUE, INVALID_MOVE } from './Models/Game';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleBoardClick = this.handleBoardClick.bind(this);
        this._game = new Game(30, 18, 'x');
        this._turnResult = GAME_CONTINUE;
        // this.state = {};
    }

    handleBoardClick(clickedSquare) {
        console.log(clickedSquare);
        var x = clickedSquare[0], y = clickedSquare[1];
        this._turnResult = this._game.play(x,y);
        this.setState({});
    }

    componentDidUpdate() {
        if (this._turnResult === GAME_OVER) {
            alert("Game over. " + this._game.getCurrentTurn() + " won!");
        }
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Caro</h1>
                </div>
                <CurrentTurnComponent currentTurn={this._game.getCurrentTurn()}/>
                <BoardComponent 
                    width={this._game.board.width} 
                    height={this._game.board.height} 
                    board={this._game.board.boardGrid} 
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
