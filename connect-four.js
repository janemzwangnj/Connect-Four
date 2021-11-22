// Global Variables Here

class Cell {
  constructor(id) {
    this.id = id;
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
    this.topRight = 0;
    this.topLeft = 0;
    this.bottomRight = 0;
    this.bottomLeft = 0;
  }
}
//create a cells array to hold all buttons in a mesh
const cells = [];
const buttons = document.querySelectorAll('.btn');
const columns = document.querySelectorAll('.column');
const numOfColumns = columns.length;
const numOfRows = columns[0].children.length;

// define 9 functions for 9 cases
// setNeighbor1 is the case of x=0 and y=0
const setNeighbors1 = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = -1;
  aCell.left = -1;
  aCell.right = parseInt(aCell.id) + numOfRows;
  aCell.topLeft = -1;
  aCell.topRight = parseInt(aCell.id) + 1 + numOfRows;
  aCell.bottomLeft = -1;
  aCell.bottomRight = -1;
};
// setNeighbor2 is the case of x = 0 and y is the number of rows
const setNeighbors2 = (aCell) => {
  aCell.top = -1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = -1;
  aCell.right = parseInt(aCell.id) + numOfRows;
  aCell.topLeft = -1;
  aCell.topRight = -1;
  aCell.bottomLeft = -1;
  aCell.bottomRight = parseInt(aCell.id) - 1 + numOfRows;
};
//setNeighbors3 is the case of x = 0 and y is btw
const setNeighbors3 = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = -1;
  aCell.right = parseInt(aCell.id) + numOfRows;
  aCell.topLeft = -1;
  aCell.topRight = parseInt(aCell.id) + 1 + numOfRows;
  aCell.bottomLeft = -1;
  aCell.bottomRight = parseInt(aCell.id) - 1 + numOfRows;
};
//setNeighbors4 is the case of x= number of columns, and y =0
const setNeighbors4 = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = -1;
  aCell.left = parseInt(aCell.id) - numOfRows;
  aCell.right = -1;
  aCell.topLeft = parseInt(aCell.id) + 1 - numOfRows;
  aCell.topRight = -1;
  aCell.bottomLeft = -1;
  aCell.bottomRight = -1;
};
//setNeighbors5 is the case of x= number of columns, and y = number of rows
const setNeighbors5 = (aCell) => {
  aCell.top = -1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - numOfRows;
  aCell.right = -1;
  aCell.topLeft = -1;
  aCell.topRight = -1;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - numOfRows;
  aCell.bottomRight = -1;
};
//setNeighbors6 is the case of x= number of columns, and y is btw
const setNeighbors6 = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - numOfRows;
  aCell.right = -1;
  aCell.topLeft = parseInt(aCell.id) + 1 - numOfRows;
  aCell.topRight = -1;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - numOfRows;
  aCell.bottomRight = -1;
};
//setNeighbors7 is the case of x is btw, and y = 0
const setNeighbors7 = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = -1;
  aCell.left = parseInt(aCell.id) - numOfRows;
  aCell.right = parseInt(aCell.id) + numOfRows;
  aCell.topLeft = parseInt(aCell.id) + 1 - numOfRows;
  aCell.topRight = parseInt(aCell.id) + 1 + numOfRows;
  aCell.bottomLeft = -1;
  aCell.bottomRight = -1;
};
//setNeighbors8 is the case of x is btw, and y = number of rows
const setNeighbors8 = (aCell) => {
  aCell.top = -1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - numOfRows;
  aCell.right = parseInt(aCell.id) + numOfRows;
  aCell.topLeft = -1;
  aCell.topRight = -1;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - numOfRows;
  aCell.bottomRight = parseInt(aCell.id) - 1 + numOfRows;
};
//setNeighbors9 is the case of x is btw, and y is btw
const setNeighbors9 = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - numOfRows;
  aCell.right = parseInt(aCell.id) + numOfRows;
  aCell.topLeft = parseInt(aCell.id) + 1 - numOfRows;
  aCell.topRight = parseInt(aCell.id) + 1 + numOfRows;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - numOfRows;
  aCell.bottomRight = parseInt(aCell.id) - 1 + numOfRows;
};

for (let x = 0; x < numOfColumns; x++) {
  for (let y = 0; y < numOfRows; y++) {
    let aID = columns[x].children[y].getAttribute('id');
    let aCell = new Cell(aID);
    switch (x) {
      case 0:
        switch (y) {
          case 0:
            setNeighbors1(aCell);
            break;
          case numOfRows - 1:
            setNeighbors2(aCell);
            break;
          default:
            setNeighbors3(aCell);
        }
        break;
      case numOfColumns - 1:
        switch (y) {
          case 0:
            setNeighbors4(aCell);
            break;
          case numOfRows - 1:
            setNeighbors5(aCell);
            break;
          default:
            setNeighbors6(aCell);
        }
        break;
      default:
        switch (y) {
          case 0:
            setNeighbors7(aCell);
            break;
          case numOfRows - 1:
            setNeighbors8(aCell);
            break;
          default:
            setNeighbors9(aCell);
        }
    }
    cells.push(aCell);
  }
}
//console.log(cells);
// the code block from line 16 to line 167 is building a objec arry
// each object of cell has 8 neighbors (top, bottom, left, right, topLeft,topRight, bottomLeft and bottomRight)

const restartButton = document.getElementById('start');
const players = ['Red', 'Black'];
let winner = false;
let currentPlayer = players[0];

////////////////////////////////
// Functions For Game Logic Here
const inputRedBlack = (aColumn, x) => {
  if (currentPlayer === players[0]) {
    chooseRow(aColumn);
    currentPlayer = players[1];
  } else if (currentPlayer === players[1]) {
    chooseRow(aColumn);
    currentPlayer = players[0];
  }
  document.getElementById('turn').innerText = `${currentPlayer}\'s turn now!`;
};

const chooseRow = (aColumn) => {
  let i = 0;
  while (i < aColumn.children.length) {
    let arr = aColumn.children[i].classList;
    if (arr.length === 1) {
      arr.add(currentPlayer);
      aColumn.children[i].style.backgroundColor = currentPlayer;
      checkWinning(aColumn.children[i]);
      break;
    }
    i = i + 1;
  }
};

const checkWinning = (aButton) => {
  let currId = aButton.getAttribute('id');
  let bottom = getBottom(currId);
  let count = 0;
  while (count < 4) {
    if (bottom > 0) {
      let bottomBtn = document.getElementById(bottom);
      if (bottomBtn.classList[1] === currentPlayer) {
        count++;
        bottom = getBottom(bottom.toString());
      } else {
        console.log('the bottom is the different color');
      }
    } else {
      break;
    }
    if (count === 3) {
      console.log(`${currentPlayer} is the Winner!`);
      document.getElementById('turn').innerText = 'Game is Over!';
      document.getElementById(
        'winner'
      ).innerText = `${currentPlayer} is Winner!!!`;
    }
  }
};

// a function for getting a bottom of the id
const getBottom = (aId) => {
  let bottom = '';
  if (aId > 0) {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].id === aId) {
        bottom = cells[i].bottom;
        break;
      }
    }
  }
  console.log(`getBottom return bottom ${bottom} with id ${aId}`);
  return bottom;
};

// a function for getting a cell by id
const getCellByID = (id) => {
  let aCell = new Cell(0);
  if (id > 0) {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].id === id) {
        aCell = cells[i];
      }
    }
  }
  return aCell;
};

//this function is for restart the game
const restart = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'lightblue';
    buttons[i].className = 'btn';
    currentPlayer = players[0];
  }
};
////////////////////////////////
// Event Listeners Here
const gameStart = () => {
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', () => {
      //  console.log(columns[i]);
      inputRedBlack(columns[i], i);
    });
  }

  restartButton.addEventListener('click', () => {
    restart();
  });
};

/////////////////////////////
gameStart();
