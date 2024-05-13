


let gameOn = false;

function generateBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = "";
    const board = new Board(5).board;
    const instructions = document.getElementById("instructions");
        instructions.style.display = "block";
    
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
    if (target.classList.contains("black") && !gameOn) {
        gameOn = true;
        const instructions = document.getElementById("instructions");
        instructions.style.display = "none";
        generateKnightsTour(target.id);
    }
})

function plotKnightElement(targetElement) {
    const knightElement = document.createElement("img");
    knightElement.src = "./knight.png";
    targetElement.append(knightElement);
}

function generateKnightsTour(coordinates) {
    const generate = new GenerateTour(5, coordinates);
    const tour = generate.knightsTour;
    animateTour(tour);
}

function animateTour(tourPlots) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter > tourPlots.length - 1) {
            clearInterval(interval);
            populateResetButton();
            return;
        }
        const sqaure = document.getElementById(tourPlots[counter]);
        plotKnightElement(sqaure);
        counter++;
    }, 250);
}

function populateResetButton() {
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.style.display = "block";
    resetBtn.addEventListener("click", function(e) {
        gameOn = true;
        resetBtn.style.display = "none";
        generateBoard();
    });
}

generateBoard();

