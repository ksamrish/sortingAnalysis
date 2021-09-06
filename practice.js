function formatDate(date) {
  return date.toISOString();
}

function generateRandomDate(start, end) {
  start = new Date(
    start.slice(0, 4) + "," + start.slice(5, 7) + "," + start.slice(8)
  );
  end = new Date(end.slice(0, 4) + "," + end.slice(5, 7) + "," + end.slice(8));
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
}
var seconds = new Date().getTime() / 1000;
let n = 10000;
let maxVal = "2021-10-02";
console.log(maxVal);
let minVal = "2020-10-03";
console.log(minVal);
let randDate = generateRandomDate(minVal, maxVal);
let possibleArrSize =
  new Date(maxVal).getTime() / 1000 - new Date(minVal).getTime() / 1000;
console.log(possibleArrSize);
let possibleArr = [];
for (let i = 0; i < possibleArrSize; i++) {
  possibleArr[i] = new Date(minVal).getTime() / 1000 + i;
}
let arr = [];
console.log(possibleArr);
for (let j = n - 1; j >= 0; j--) {
  let randomIndex = Math.floor(Math.random() * possibleArrSize);
  console.log(randomIndex);
  let temp = possibleArr[maxVal - minVal];
  possibleArr[maxVal - minVal] = possibleArr[randomIndex];
  possibleArr[randomIndex] = temp;
  arr[j] = new Date(possibleArr[maxVal - minVal] * 1000); // the input array is getting created with the shuffled available element array
  maxVal--;
}
console.log(arr);

// let availableElemPercent = (n / rangeDifference) * 100;
// console.log(Math.round(availableElemPercent));
// let availableElemArray = [];

// if (n > rangeDifference) {
//   console.log("error");
//   document.getElementById("errorNoofelements").innerHTML =
//     "Size must be less than the range between min and max value.";
//   document.getElementById("outputdata").style.display = "none";
//   return;
// } else if (availableElemPercent >= 60) {
//   // The available element array is created with all possible values between the given min and max range.
//   for (let i = 0; i < rangeDifference; i++) {
//     // TODO Need to check if i < n or i < rangeDifference
//     availableElemArray[i] = minVal + i;
//   }
//   console.log("availableElemArray", availableElemArray);
//   // Now the available element array is shuffled using the below code.
//   for (let j = n - 1; j >= 0; j--) {
//     let randomIndex = Math.floor(Math.random() * (maxVal - minVal));
//     console.log(randomIndex);
//     let temp = availableElemArray[maxVal - minVal];
//     availableElemArray[maxVal - minVal] =
//       availableElemArray[randomIndex];
//     availableElemArray[randomIndex] = temp;
//     console.log("inside availableElemArray", availableElemArray);
//     arr[j] = availableElemArray[maxVal - minVal]; // the input array is getting created with the shuffled available element array
//     maxVal--;
//   }
//   console.log(arr);
// } else if (availableElemPercent < 60) {
//   for (let i = 0; i < n; i++) {
//     let randomInt = Math.floor(
//       Math.random() * (maxVal - minVal) + minVal
//     );
//     if (!availableElemArray.includes(randomInt)) {
//       availableElemArray.push(randomInt);
//     } else {
//       i--;
//     }
//     arr = availableElemArray;
//     console.log("inside else", arr);
//   }
// }
