




function generateBoard() {
    const boardElement = document.getElementById("board");
    const board = new Board(5).board;
    console.log(board);
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < board[i].length; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.id = board[i][j];
            square.innerText = board[i][j];

            if ((j + i) % 2 == 0) {
                square.classList.add("black"); 
            }
            row.append(square);
        }
        boardElement.append(row);
    }
}




generateBoard();
// console.log(board.board);

