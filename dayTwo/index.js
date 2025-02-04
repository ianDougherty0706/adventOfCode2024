const fs = require("fs");
const path = require("path");

let validCount = 0;

function printArray(array) {
  array.forEach((element) => {
    process.stdout.write(`${element} `);
  });
  process.stdout.write("\n");
}

function findSteps(array, length) {
  printArray(array);
  const direction = array[0] - array[1] < 0;
  for (let i = 0; i < length; i++) {
    const difference = array[i] - array[i + 1];
    const directionCheck = difference < 0;

    if ((difference >= 3 || difference <= 1) && (direction != directionCheck)){
      return false;
    }
  }
  return true;
}

let data;
try {
  data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
} catch (err) {
  console.error("Error reading the file:", err);
}

data = data.split("\n");
data = data.map((sequence) => sequence.split(" "));
let dataLength = data.length;

for (let i = 0; i < dataLength; i++) {
  let dataToPass = data[i].map((number) => parseInt(number));
  findSteps(dataToPass, dataToPass.length)? validCount++ : console.log("Invalid");
}

console.log(validCount);
