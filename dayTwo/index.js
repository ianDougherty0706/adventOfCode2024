const { log } = require("console");
const fs = require("fs");
const path = require("path");

let validCount = 0;

function findSteps(array, length){
  let direction = array[0] - array[1] < 0;
  for (let i = 0; i < length; i++){
    let step = array[i] - array[i + 1];
    let check = step < 0;
    // console.log(`${direction}, ${check}`)
    if ((direction === check) && ((Math.abs(step) <= 3) && (Math.abs(step) >= 1))){
      validCount++;
      return true;
    } else {
      return false;
    }

  }
}

let data;
try {
    data = fs.readFileSync(path.join(__dirname, "input.txt"), 'utf8');
} catch (err) {
    console.error('Error reading the file:', err);
}

data = data.split('\n');
dataLength = data.length;

let parsedData = [];
for (let i = 0; i < dataLength; i++){
  parsedData.push(data[i].split(" "));
}

let parsedDataLength = parsedData.length;
let returnValue;
for (let j = 0; j < parsedDataLength; j++){
  returnValue = findSteps(parsedData[j], parsedData[j].length);
  console.log(`${parsedData[j]}\t${returnValue}`)
}

console.log(validCount);