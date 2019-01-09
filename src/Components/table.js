import React, { Component } from 'react';
import Square from './square';
import './table.css';

class Table extends Component {

    render() {
        let row = [], table = [];
        for (let i=0; i < this.props.width; i++)
            row.push(<Square />);
        for (let i=0; i < this.props.height; i++)
            table.push(<li class="row">{row}</li>);
        return (
            <ul className="table">
                {table}
            </ul>
        );
    }

}

export default Table;
