
export class Board {

    constructor (width, height) {
        this._width = width;
        this._height = height;
        this._board = [];
        for (var i = 0; i < height; i++) {
            var row = [];
            for (var j = 0; j < width; j++) {
                row.push('');
            }
            this._board.push(row);
        }
    }

    get board(){
        return this._board;
    }

    set board(newBoard) {
        this._board = newBoard;
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        this._height = newHeight;
    }

}

class Game {

    constructor (width, height, start) {
        this._board = new Board(width, height);
        this._turn = start; // should be 'x' or 'o'
    }

    get board() {
        return this._board;
    }

    set board(newBoard) {
        this._board = newBoard;
    }

    get turn() {
        return this._turn;
    }

    set turn(newTurn) {
        this._turn = newTurn;
    }

    switchTurn() {
        if (this._turn === 'x') 
            this._turn = 'o';
        else
            this._turn = 'x';
    }

    play(x, y) {
        if (this._board.board[x][y] === '') {
            this._board.board[x][y] = this._turn;
            this.switchTurn();
        } else {
            alert("invalid move");
        }
    }
}

export default Game;
