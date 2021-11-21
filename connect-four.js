// Global Variables Here
class Cell {
  top = '';
  bottom = '';
  left = '';
  right = '';
  topRight = '';
  topLeft = '';
  bottomRight = '';
  bottomLeft = '';
  constructor(id) {
    this.id = id;
  }
}
//create a cells array to hold all buttons in a mesh
const cells = [];
const buttons = document.querySelectorAll('.btn');
const columns = document.querySelectorAll('.column');
const numOfColumns = columns.length;
console.log(numOfColumns);
const numOfRows = columns[0].children.length;
console.log(numOfRows);

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
console.log(cells);

////////////////////////////////
// Functions For Game Logic Here
const inputRedBlack = (aColumn, x) => {
  //console.log(x);
  const aButton = document.getElementById('1');
  let arr = aButton.classList;
  arr.add('black');
  // console.log(arr);
  //console.log(document.getElementsByClassName('black'));
  //console.log(aButton.classList[1]);
  //console.log(aButton);
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
};

/////////////////////////////
gameStart();
