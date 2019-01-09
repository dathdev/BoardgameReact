import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Components/table';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Caro</h1>
                <Table width={20} height={20} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
