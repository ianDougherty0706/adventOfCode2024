const fs = require("fs");
const readline = require("readline");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

const fileStream = fs.createReadStream(filePath);

let listOne = [];
let listTwo = [];

const sortArray = (array, length) => {
  for (let v = 0; v < length; v++) {
    for (let i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) {
        let tempIndex = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tempIndex;
      }
    }
  }
};

const findDistances = (arrayOne, arrayTwo, length) => {
  let totalDistance = 0;
  for (let i = 0; i < length; i++){
    totalDistance += (Math.abs(arrayOne[i] - arrayTwo[i]))
  };
  return totalDistance;
};

const reader = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

reader.on("line", (line) => {
  listOne.push(parseInt(line.slice(0, 5)));
  listTwo.push(parseInt(line.slice(8, 13)));
});

reader.on("close", () => {
  let listLength = listOne.length;

  sortArray(listOne, listLength);
  sortArray(listTwo, listLength);

  console.log(`The distance is: \n ${findDistances(listOne, listTwo, listLength)}\n`);
});
