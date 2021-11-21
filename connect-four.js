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
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const columns = document.getElementsByClassName('column');
console.log(columns.length);
for (let i = 0; i < columns.length; i++) {
  let numOfChildren = columns[i].children.length;
  for (let j = numOfChildren - 1; j >= 0; j--) {
    /*  console.log(`[${i} ${j}]`);
    console.log(columns[i].children[j]); */
    const cell = new Cell(i, j);
    //cell.top =
  }
}
let element = columns[0].children[0];
//console.log(element);

////////////////////////////////
// Functions For Game Logic Here

////////////////////////////////
// Event Listeners Here
const gameStart = () => {
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', () => {
      console.log('Show me something');
    });
  }
};

/////////////////////////////
gameStart();
