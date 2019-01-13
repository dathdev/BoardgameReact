
export const GAME_CONTINUE = 0;
export const GAME_OVER = -2;
export const INVALID_MOVE = -1;
export const WINNING_LINE = 5;

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

    get boardGrid(){
        return this._board;
    }

    set boardGrid(newBoard) {
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

    checkIfGameIsOver(x, y) {
        // TODO: check if game is over
        // check horizontally
        var count = 1;
        var xIteration = x, yIteration = y-1;
        while (yIteration >= 0 && 
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            yIteration--;
        }
        yIteration = y+1;
        while (yIteration < this._board.width && 
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            yIteration++;
        }
        if (count >= WINNING_LINE)
            return GAME_OVER;
        // check vertically
        count = 1;
        xIteration = x-1;
        yIteration = y;
        while (xIteration >= 0 && 
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            xIteration--;
        }
        xIteration = x+1;
        yIteration = y;
        while (xIteration < this._board.height && 
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            xIteration++;
        }        
        if (count >= WINNING_LINE)
            return GAME_OVER;
        // check diagonally (\)
        count = 1;
        xIteration = x+1;
        yIteration = y+1;
        while (xIteration < this._board.height && 
               yIteration < this._board.width && 
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            xIteration++;
            yIteration++;
        }
        xIteration = x-1;
        yIteration = y-1;
        while (xIteration >= 0 &&
               yIteration >= 0 &&
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            xIteration--;
            yIteration--;
        }
        if (count >= WINNING_LINE)
            return GAME_OVER;
        // check diagonally (/)
        count = 1;
        xIteration = x+1;
        yIteration = y-1;
        while (xIteration < this._board.height &&
               yIteration >= 0 &&
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            xIteration++;
            yIteration--;
        }
        xIteration = x-1;
        yIteration = y+1;
        while (xIteration >= 0 &&
               yIteration < this._board.width &&
               this._board.boardGrid[xIteration][yIteration] === this._board.boardGrid[x][y]) {
            count++;
            xIteration--;
            yIteration++;
        }
        if (count >= WINNING_LINE)
            return GAME_OVER;
        return GAME_CONTINUE;
    }

    getCurrentTurn() {
        return this._turn;
    }

    resetBoard() {
        this._board = new Board(this.width, this.height);
        this._turn = this.start;
    }

    play(x, y) {
        if (!this._over) {
            if (this._board.boardGrid[x][y] === '') {
                this._board.boardGrid[x][y] = this._turn;
                if (this.checkIfGameIsOver(x, y) === GAME_OVER) {
                    this._over = true;
                    return GAME_OVER;
                } else {
                    this.switchTurn();
                    return GAME_CONTINUE;
                }
            } else {
                return INVALID_MOVE;
            }
        } else {
            return GAME_OVER;
        }
   }
}

export default Game;
