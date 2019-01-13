import React from 'react';
import ReactDOM from 'react-dom';
import './current-turn.css';

class CurrentTurnComponent extends React.Component {
    render() {
        return (
            <div className='current-turn'>
                <h2>Turn: {this.props.currentTurn}</h2>
            </div>
        );
    }
}

export default CurrentTurnComponent;
