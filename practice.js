// let minRange = 1;
// let maxRange = 2;
// let arraySize = 100;
// let rangeDifference = (maxRange - minRange)+1;
// let maxStrings = 52 * rangeDifference;// 26 lowercase and 26 uppercase letters
// let availableElemPercent = (arraySize/maxStrings)*100;
// console.log(Math.round(availableElemPercent));
// let randomArray = [];
// let availableElemArray = [];
// let givenDuplicatePercent = 70;
// let minDuplicatePercent = ((2/arraySize)*100).toFixed(2);
// let duplicateArray = [];

// if(arraySize > maxStrings){
//     console.log("error")
// }else if(availableElemPercent >= 60){
//     console.log("greater than 60%");
//     for(let i = 0; i < arraySize;i++){
//         let noofdigits = Math.floor(Math.random()*(maxRange - minRange)+minRange);
//         let val = "";
//         for(let j=0;j<noofdigits;j++) {
//             let decideCase = Math.round(Math.random())*10; // will output 1 or 0
//             if(decideCase == 10){//the string will have upperCase letter
//                 let digit = parseInt((Math.random()*26)+65);
// 				val+=String.fromCharCode(digit);
//             }else{
//                 let digit = parseInt((Math.random()*26)+97);//lowercase letter
// 				val+=String.fromCharCode(digit);
//             }
//         }
//         availableElemArray[i] = val;
//     }
// }else if(availableElemPercent < 60){
//     for(let i = 0; i < arraySize;i++){
//         let noofdigits = Math.floor(Math.random()*(maxRange - minRange)+minRange);
//         let val = "";
//         for(let j=0;j<noofdigits;j++) {
//             let decideCase = Math.round(Math.random())*10; // will output 1 or 0
//             console.log("decide case",decideCase);
//             if(decideCase == 10){//the string will have upperCase letter
//                 let digit = parseInt((Math.random()*26)+65);
// 				val+=String.fromCharCode(digit);
//             }else{
//                 let digit = parseInt((Math.random()*26)+97);//lowercase letter
// 				val+=String.fromCharCode(digit);
//             }
//         }
//         if(!availableElemArray.includes(val)){
//             availableElemArray.push(val);
//         }else{
//             i--;
//         }
//     }

// }
// console.log(availableElemArray)

////////////////////////////////

//for character
// let minRange = 1;
// let maxRange = 1;
// let arraySize = 11;
// let rangeDifference = maxRange - minRange + 1;
// let maxStrings = 52; // 26 lowercase and 26 uppercase letters for characters
// let availableElemPercent = (arraySize / maxStrings) * 100;
// console.log(Math.round(availableElemPercent));
// let randomArray = [];
// let availableElemArray = [];
// let givenDuplicatePercent = 70;
// let minDuplicatePercent = ((2 / arraySize) * 100).toFixed(2);
// let duplicateArray = [];

// if (arraySize > maxStrings) {
//   console.log("error");
// } else if (availableElemPercent >= 60) {
//   console.log("greater than 60%");
//   for (let i = 0; i < maxStrings; i++) {
//     if (i < 26) {
//       availableElemArray[i] = String.fromCharCode(65 + i); // 65 is the ascii code for 'A'
//     } else {
//       availableElemArray[i] = String.fromCharCode(97 - 26 + i); // 97 is the ascii code for 'a'
//     }
//   }
//   console.log("availableElemArray", availableElemArray);
//   for (let i = 0; i < arraySize; i++) {
//     let randomIndex = Math.floor(Math.random() * 52);
//     let temp = availableElemArray[i];
//     availableElemArray[i] = availableElemArray[randomIndex];
//     availableElemArray[randomIndex] = temp;
//   }
//   console.log("availableElemArray after shuffling", availableElemArray);
// } else if (availableElemPercent < 60) {
//   for (let i = 0; i < arraySize; i++) {
//     let val = "";
//     let decideCase = Math.round(Math.random()) * 10; // will output 1 or 0
//     if (decideCase == 10) {
//       //the char will have upperCase letter
//       let digit = parseInt(Math.random() * 26 + 65);
//       val += String.fromCharCode(digit);
//     } else {
//       let digit = parseInt(Math.random() * 26 + 97); //lowercase letter
//       val += String.fromCharCode(digit);
//     }
//     if (!availableElemArray.includes(val)) {
//       availableElemArray.push(val);
//     } else {
//       i--;
//     }
//   }
//   console.log("availableElemArray < 60", availableElemArray);
// }
// for (let i = 0; i < arraySize; i++) {
//   randomArray[i] = availableElemArray[i];
// }
// console.log("randomArray", randomArray);

//////

// // we will query the db and get the maxStudentValue available at that time when the user submits a form
// function generateStudentId(maxStudentValue){
//     let val = maxStudentValue;
//     let counter = 0;
//     let str = "HP21000";

//     while(Math.floor(val/10) > 0){
//         counter++;
//         val = val/10;
//     }
//     if(counter === 0){
//         return "HP21"+"000"+maxStudentValue;
//     }else if(counter === 1){
//         return "HP2100"+maxStudentValue;
//     }else if(counter === 2){
//         return "HP210"+maxStudentValue;
//     }else{
//         return "HP21" +maxStudentValue;
//     }
// }

// console.log(generateStudentId(3));
// console.log(generateStudentId(13));
// console.log(generateStudentId(123));
// console.log(generateStudentId(1234));

function generateRandomDate(start, end) {
  start = new Date(
    start.slice(0, 4) + "," + start.slice(5, 7) + "," + start.slice(8)
  );
  console.log(start);
  end = new Date(end.slice(0, 4) + "," + end.slice(5, 7) + "," + end.slice(8));
  console.log(end);
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
}

console.log(generateRandomDate("2020-06-01", "2020-06-03"));
