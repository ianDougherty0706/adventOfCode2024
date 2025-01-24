const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

const fileStream = fs.createReadStream(filePath);

let listOne = [];
let listTwo = [];

// const sortArray = (array) => {

//   let (int i = 0;)
// }
// TODO: Make the bubble sort algorithm using a for loop with a separate length variable

const reader = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

reader.on('line', (line) => {
  listOne.push(parseInt(line.slice(0, 5)));
  listTwo.push(parseInt(line.slice(8, 13)));
});

reader.on('close', () => {
  console.log("\n\nCompleted");

  console.log(listOne);
  console.log(listTwo);
});
