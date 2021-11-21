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
const cells = [];
const buttons = document.querySelectorAll('.btn');
const columns = document.querySelectorAll('.column');
//console.log(buttons);
//console.log(columns);
for (let x = 0; x < columns.length; x++) {
  for (let y = 0; y < columns[x].children.length; y++) {
    let aID = columns[x].children[y].getAttribute('id');
    let aCell = new Cell(aID);

    if (x === 0) {
      aCell.left = -1;
      aCell.topLeft = -1;
      aCell.bottomLeft = -1;
      /*    if(y === 0){
        aCell.bottom = -1;
      } else aCell.bottom = parseInt(aCell.id) - 1;
      if( y === columns[x].children.length - 1 ){

      }

      aCell.top = parseInt(aCell.id) + 1;
      //aCell.bottom = parseInt(aCell.id) - 1;
      aCell.left = -1;
      aCell.right = parseInt(aCell.id) + columns[x].children.length;
      aCell.topLeft = -1;
      aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
      aCell.bottomLeft = -1;
      aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length; */
    } else if (x === columns.length - 1) {
      aCell.right = -1;
      aCell.topRight = -1;
      aCell.bottomRight = -1;
    } else if (y === 0) {
      aCell.bottom = -1;
      aCell.bottomLeft = -1;
      aCell.bottomRight = -1;
    } else if (y === columns[x].children.length - 1) {
      aCell.topCells = -1;
      aCell.topRight = -1;
      aCell.topLeft = -1;
    } else {
      aCell.top = parseInt(aCell.id) + 1;
      aCell.bottom = parseInt(aCell.id) - 1;
      aCell.left = parseInt(aCell.id) - columns[x].children.length;
      aCell.right = parseInt(aCell.id) + columns[x].children.length;
      aCell.topLeft = parseInt(aCell.id) + 1 - columns[x].children.length;
      aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
      aCell.bottomLeft = parseInt(aCell.id) - 1 - columns[x].children.length;
      aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length;
    }
    console.log(aCell);
  }
}
//console.log(aCell)
const bottomCells = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = -1;
  aCell.left = parseInt(aCell.id) - columns[x].children.length;
  aCell.right = parseInt(aCell.id) + columns[x].children.length;
  aCell.topLeft = parseInt(aCell.id) + 1 - columns[x].children.length;
  aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - columns[x].children.length;
  aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length;
};
const topCells = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - columns[x].children.length;
  aCell.right = parseInt(aCell.id) + columns[x].children.length;
  aCell.topLeft = parseInt(aCell.id) + 1 - columns[x].children.length;
  aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - columns[x].children.length;
  aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length;
};
const leftCells = (aCell) => {
  aCell.left = -1;
  aCell.topLeft = -1;
  aCell.bottomLeft = -1;
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - columns[x].children.length;
  aCell.right = parseInt(aCell.id) + columns[x].children.length;
  aCell.topLeft = parseInt(aCell.id) + 1 - columns[x].children.length;
  aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - columns[x].children.length;
  aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length;
};
const rightCells = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - columns[x].children.length;
  aCell.right = parseInt(aCell.id) + columns[x].children.length;
  aCell.topLeft = parseInt(aCell.id) + 1 - columns[x].children.length;
  aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - columns[x].children.length;
  aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length;
};
const centerCells = (aCell) => {
  aCell.top = parseInt(aCell.id) + 1;
  aCell.bottom = parseInt(aCell.id) - 1;
  aCell.left = parseInt(aCell.id) - columns[x].children.length;
  aCell.right = parseInt(aCell.id) + columns[x].children.length;
  aCell.topLeft = parseInt(aCell.id) + 1 - columns[x].children.length;
  aCell.topRight = parseInt(aCell.id) + 1 + columns[x].children.length;
  aCell.bottomLeft = parseInt(aCell.id) - 1 - columns[x].children.length;
  aCell.bottomRight = parseInt(aCell.id) - 1 + columns[x].children.length;
};

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
