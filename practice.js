function formatDate(date) {
  return date.toISOString();
}

function generateRandomDate(start, end) {
  start = new Date(start);
  end = new Date(end);
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString();
}

var seconds = new Date().getTime() / 1000;
let n = 10;
let maxVal = "2021-10-02:10:30:30.123";
let minVal = "2021-10-02:10:30:29.123";
let maxValTime = new Date(maxVal).getTime();
let minValTime = new Date(minVal).getTime();
let randDate = generateRandomDate(minVal, maxVal);
let possibleArrSize = maxValTime - minValTime;
console.log("possible arr size", possibleArrSize);
let availableElemPercent = (n / possibleArrSize) * 100;
let availableElemArray = [];

if (n > possibleArrSize) {
  console.log("error");
  document.getElementById("errorNoofelements").innerHTML =
    "Size must be less than the range between min and max value.";
  document.getElementById("outputdata").style.display = "none";
  return;
} else if (availableElemPercent >= 60) {
  for (let i = 0; i < possibleArrSize; i++) {
    availableElemArray[i] = minValTime + i;
  }
  for (let j = n - 1; j >= 0; j--) {
    let randomIndex = Math.floor(Math.random() * possibleArrSize);
    //console.log(randomIndex);
    let index = maxValTime - minValTime;
    let temp = availableElemArray[index];
    availableElemArray[index] = availableElemArray[randomIndex];
    availableElemArray[randomIndex] = temp;
    arr[j] = new Date(availableElemArray[index]); // the input array is getting created with the shuffled available element array
    maxValTime--;
  }
  console.log("greater than 60%", arr);
} else if (availableElemPercent < 60) {
  for (let i = 0; i < n; i++) {
    let val = generateRandomDate(minVal, maxVal);
    if (!arr.includes(val)) {
      arr[i] = val;
    } else {
      i--;
    }
  }
  console.log("lesser than 60%", arr);
}

arr = arr
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();
console.log("reversed array", arr);
//reversearr = [...arr];

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

// let start = "2020-03-20:10:30:30.234";
// let end = "2021-03-20:10:30:30.234";
// function generateRandomDate(start, end) {
//   start = new Date(start);
//   end = new Date(end);
//   let date = new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
//   return date.toISOString();
// }
// console.log(generateRandomDate(start, end));
