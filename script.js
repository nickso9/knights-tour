class Board {
    constructor(length) {
        this.length = length;
        this.board = this.populateBoard(this.length);
    }

    populateBoard(length) {
        let board = [];
        for (let i = 0; i < length; i++) {
            let coords = ["a", "b", "c", "d", "e", "f", "g"];
            let row = []
            for (let j = 0; j < length; j++) {
                row.push(coords[j] + i);
            }
            board.unshift(row)
        }
        return board;
    }
}

class Knight {
    constructor(position, board) {
        this.position = position;
        this.boardLen = board.length;
        this.board = board.board;
        this.location = this.makeLocation(position);
        this.upleft = this.makeMove(this.location, -1, -2);
        this.upright = this.makeMove(this.location, 1, -2);
        this.leftup = this.makeMove(this.location, -2, -1);
        this.rightup = this.makeMove(this.location, 2, -1);
        this.bottomleft = this.makeMove(this.location, -2, 1);
        this.bottomright = this.makeMove(this.location, 2, 1);
        this.leftbottom = this.makeMove(this.location, -1, 2);
        this.rightbottom = this.makeMove(this.location, 1, 2); 
    }

    isValid(locX, locY) {
        return this.boardLen > locX && this.boardLen > locY && locX >= 0 && locY >= 0;
    }

    makeLocation() {
        let coords = ["a", "b", "c", "d", "e", "f", "g"];
        const x = coords.indexOf(this.position.substring(0, 1));
        const y = this.boardLen - 1 - this.position.substring(1, 2);
        return [x, y];
    }
 
    makeMove(pos, reduceX, reduceY) {
        let locationX = pos[0] + reduceX;
        let locationY = pos[1] + reduceY;
        if (!this.isValid(locationX, locationY)) {
            return null;
        }
        let position = this.board[locationY][locationX];
        return position;
    }
}

class GenerateTour {
    constructor(length, position) {
        this.board = new Board(length);
        this.knightsTour = null;
        this.generate(position, []);
    }

    generate(root, array) {
        
        let funcArray = ["upleft", "upright", "leftup", "rightup", "bottomleft", "bottomright", "leftbottom", "rightbottom"];

        if (array.includes(root)) {
            return false;
        }
        
        let knight = new Knight(root, this.board);
        array.push(knight.position);
        

        if (array.length == this.board.length * this.board.length) {
            this.knightsTour = array;
            return true;
        }   
        
        for (let moves of funcArray) {
            if (knight[moves] != null) {
                if (this.generate(knight[moves], array.slice())) {
                    return true;
                }      
            }
        }

        array.pop();
        return false;
    }
}

const generate = new GenerateTour(5, "a0");
console.log(generate.knightsTour)

