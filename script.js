




function generateBoard() {
    const boardElement = document.getElementById("board");
    const board = new Board(5).board;
    console.log(board);
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < board[i].length; j++) {
            let square = document.createElement("div");
            let coordinates = document.createElement("span");
            coordinates.style.position = "absolute";
            coordinates.innerText = board[i][j];
            square.className = "square";
            square.id = board[i][j];
            square.append(coordinates);
            

            if ((j + i) % 2 == 0) {
                square.classList.add("black"); 
            }
            row.append(square);
        }
        boardElement.append(row);
    }
}

window.addEventListener("click", function(e) {
    const target = e.target;
    if (target.classList.contains("black")) {
        const knightElement = document.createElement("img");
        knightElement.src = "./knight.png";
        target.append(knightElement);

        generateKnightsTour(target.id);
    }
})

function generateKnightsTour(coordinates) {
    // const generate = new GenerateTour(5, coordinates);
    // const tour = generate.knightsTour
    
}



generateBoard();

