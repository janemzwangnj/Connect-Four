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
for (let x = 0; x < columns.length; x++) {
  for (let y = 0; y < columns[x].children.length; y++) {
    let aID = columns[x].children[y].getAttribute('id');
    let aCell = new Cell(aID);
    switch (x) {
      case 0:
        //callFuncationA();
        switch (y) {
          case 0:
            console.log('x = 0 and y=0');
            break;
          case columns[x].children.length - 1:
            console.log('x=0 and y=max');
            break;
          default:
            console.log('x=0 and y is btw');
        }
        //console.log(`here x is ${x}`);
        break;
      case columns.length - 1:
        //callFuncationB();
        switch (y) {
          case 0:
            console.log('x=max and y = 0');
            break;
          case columns[x].children.length - 1:
            console.log('x=max and y=max');
            break;
          default:
            console.log('x=max and y is btw');
        }
        //console.log(`here x is ${x}`);
        break;
      default:
        //callFuncationC();
        switch (y) {
          case 0:
            console.log('x is btw and y = 0');
            break;
          case columns[x].children.length - 1:
            console.log('x is btw and y = max');
            break;
          default:
            console.log('x is btw and y is btw');
        }
      // console.log(`here x is ${x}`);
    }
  }
}
//console.log(aCell)

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
