import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Components/table';

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
        this.handleTableClick = this.handleTableClick.bind(this);
        // this.state = {};
    }

    handleTableClick(clickedSquare) {
        console.log(clickedSquare);
        var x = clickedSquare[0], y = clickedSquare[1];
        if (sample_board[x][y] === ''){
            sample_board[x][y] = 'x';
        } else {
            sample_board[x][y] = '';
        }
        this.setState({});
    }

    render() {
        return (
            <div className="App">
                <h1>Caro</h1>
                <Table width={5} height={5} board={sample_board} onTableClick={this.handleTableClick}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
