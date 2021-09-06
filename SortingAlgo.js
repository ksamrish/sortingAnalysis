var pc = [
  [
    "random",
    [
      ["Bubble", 0, 0, 0],
      ["Selection", 0, 0, 0],
      ["Insertion", 0, 0, 0],
      ["Heap", 0, 0, 0],
      ["Shell", 0, 0, 0],
      ["Quick3", 0, 0, 0],
      ["Quick", 0, 0, 0],
      ["Merge", 0, 0, 0],
      ["Count", 0, 0, 0],
      ["Radix", 0, 0, 0],
    ],
  ],
  [
    "reverse",
    [
      ["Bubble", 0, 0, 0],
      ["Selection", 0, 0, 0],
      ["Insertion", 0, 0, 0],
      ["Heap", 0, 0, 0],
      ["Shell", 0, 0, 0],
      ["Quick3", 0, 0, 0],
      ["Quick", 0, 0, 0],
      ["Merge", 0, 0, 0],
      ["Count", 0, 0, 0],
      ["Radix", 0, 0, 0],
    ],
  ],
  [
    "nearlysorted",
    [
      ["Bubble", 0, 0, 0],
      ["Selection", 0, 0, 0],
      ["Insertion", 0, 0, 0],
      ["Heap", 0, 0, 0],
      ["Shell", 0, 0, 0],
      ["Quick3", 0, 0, 0],
      ["Quick", 0, 0, 0],
      ["Merge", 0, 0, 0],
      ["Count", 0, 0, 0],
      ["Radix", 0, 0, 0],
    ],
  ],
  [
    "unique",
    [
      ["Bubble", 0, 0, 0],
      ["Selection", 0, 0, 0],
      ["Insertion", 0, 0, 0],
      ["Heap", 0, 0, 0],
      ["Shell", 0, 0, 0],
      ["Quick3", 0, 0, 0],
      ["Quick", 0, 0, 0],
      ["Merge", 0, 0, 0],
      ["Count", 0, 0, 0],
      ["Radix", 0, 0, 0],
    ],
  ],
];

var time = 0;
var swaps = 0;
var comparisons = 0;
var performance_count = [
  ["Bubble", 0, 0, 0],
  ["Selection", 0, 0, 0],
  ["Insertion", 0, 0, 0],
  ["Heap", 0, 0, 0],
  ["Shell", 0, 0, 0],
  ["Quick3", 0, 0, 0],
  ["Quick", 0, 0, 0],
  ["Merge", 0, 0, 0],
  ["Count", 0, 0, 0],
  ["Radix", 0, 0, 0],
];

///  10 Sorting methods below:
function bubble(arr, n) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  swaps = 0;
  comparisons = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        swaps++;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken bubble", time);
  performance_count[0][1] = comparisons;
  performance_count[0][2] = swaps;
  performance_count[0][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  console.log(time);

  return arr;
}

function selection(arr, n) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  swaps = 0;
  comparisons = 0;
  for (let i = 0; i < n - 1; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i; j < n; j++) {
      comparisons++;
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    swaps++;
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken selection", time);
  performance_count[1][1] = comparisons;
  performance_count[1][2] = swaps;
  performance_count[1][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function insertion(arr, n) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  swaps = 0;
  comparisons = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      comparisons++;
      if (arr[j] < arr[j - 1]) {
        swaps++;
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken insertion", time);
  performance_count[2][1] = comparisons;
  performance_count[2][2] = swaps;
  performance_count[2][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function heap(arr) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  comparisons = 0;
  swaps = 0;
  start = 0;
  end = arr.length - 1;
  for (let i = end; i > 0; i--) {
    for (let j = Math.floor((i - 1) / 2); j >= 0; j--) {
      let left = 2 * j + 1;
      let right = 2 * j + 2;
      let big = left;
      if (right <= i && arr[right] > arr[left]) {
        big = right;
      }
      comparisons++;
      if (arr[j] < arr[big]) {
        let temp = arr[big];
        arr[big] = arr[j];
        arr[j] = temp;
        swaps++; // added on 12-24-2020
      }
      comparisons++;
    }
    swaps++;
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("final time heap", time);
  performance_count[3][1] = comparisons;
  performance_count[3][2] = swaps;
  performance_count[3][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function shell(arr, n) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  comparisons = 0;
  swaps = 0;
  for (let j = Math.floor(n / 2); j >= 1; j = Math.floor(j / 2)) {
    for (let i = j; i < n; i++) {
      let h = i;
      for (let k = i - j; k >= 0; k -= j) {
        comparisons++;
        if (arr[k] > arr[h]) {
          swaps++;
          let temp = arr[k];
          arr[k] = arr[h];
          arr[h] = temp;
          h = k;
        } else {
          break;
        }
      }
    }
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken shell", time);
  performance_count[4][1] = comparisons;
  performance_count[4][2] = swaps;
  performance_count[4][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function quick3(arr, start, end) {
  let i = end,
    j = end,
    high = start;
  let pivot = arr[start];
  while (high <= i) {
    //comparisons++
    if (arr[i] == pivot) {
      comparisons++;
      i--;
    } else if (arr[i] < pivot) {
      comparisons++;
      comparisons++;
      swaps++;
      let temp = arr[high];
      arr[high] = arr[i];
      arr[i] = temp;
      high++;
    } else {
      comparisons++;
      comparisons++;
      swaps++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i--;
      j--;
    }
  }
  //comparisons = comparisons + 3
  if (start < high - 1) quick3(arr, start, high - 1);
  if (j + 1 < end) quick3(arr, j + 1, end);
  return;
}

function quick3Main(arr) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  comparisons = 0;
  swaps = 0;
  start = 0;
  end = arr.length - 1;
  quick3(arr, start, end);
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("final time quick3", time);
  performance_count[5][1] = comparisons;
  performance_count[5][2] = swaps;
  performance_count[5][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function quick(arr, start, end) {
  let i = start,
    j = end,
    mid = Math.floor((start + end) / 2);
  let pivot = arr[mid];
  while (i <= j) {
    comparisons++;
    while (arr[i] < pivot) {
      //comparisons++;
      i++;
    }
    comparisons++;
    while (arr[j] > pivot) {
      //comparisons++;
      j--;
    }

    if (i <= j) {
      swaps++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  if (start < i - 1) quick(arr, start, i - 1);
  if (i < end) quick(arr, i, end);
  return;
}

function quickMain(arr) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  comparisons = 0;
  swaps = 0;
  start = 0;
  end = arr.length - 1;
  quick(arr, start, end);
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken quick", time);
  performance_count[6][1] = comparisons;
  performance_count[6][2] = swaps;
  performance_count[6][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function mergesort(arr, start, mid, end) {
  let n1 = mid - start + 1;
  let n2 = end - mid;
  let l = [];
  let r = [];
  for (let i = 0; i < n1; i++) {
    l[i] = arr[start + i];
  }
  for (let i = 0; i < n2; i++) {
    r[i] = arr[mid + 1 + i];
  }

  let i = 0,
    j = 0,
    k = start;
  while (i < n1 && j < n2) {
    if (l[i] > r[j]) {
      comparisons++;
      arr[k++] = r[j++];
    } else if (l[i] <= r[j]) {
      arr[k++] = l[i++];
      comparisons++;
      comparisons++;
    } else {
      comparisons++;
      comparisons++;
    }
  }
  while (i < n1) {
    arr[k++] = l[i++];
  }
  while (j < n2) {
    arr[k++] = r[j++];
  }
  return;
}

function merge(arr, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    merge(arr, start, mid);
    merge(arr, mid + 1, end);
    mergesort(arr, start, mid, end);
    return;
  } else return;
}

function mergeMain(arr) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  var start = 0;
  var end = arr.length - 1;
  comparisons = 0;
  swaps = 0;
  merge(arr, start, end);
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken merge", time);
  performance_count[7][1] = comparisons;
  performance_count[7][2] = swaps;
  performance_count[7][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

function countsort(a) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  comparisons = 0;
  swaps = 0;
  let minimum = a[0];
  let maximum = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < minimum) {
      minimum = a[i];
    }
    comparisons++;
    if (a[i] > maximum) {
      maximum = a[i];
    }
    comparisons++;
  }
  for (let i = 0; i < a.length; i++) {
    a[i] -= minimum;
  }
  let bucket = [];
  bucket.length = maximum - minimum + 1;
  for (let i = 0; i < bucket.length; i++) {
    bucket[i] = 0;
  }
  for (let i = 0; i < a.length; i++) {
    bucket[a[i]]++;
  }
  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] == 0) {
      continue;
    }
    for (let j = 0; j < bucket[i]; j++) {
      a[index++] = i + minimum;
    }
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken count", time);
  performance_count[8][1] = comparisons;
  performance_count[8][2] = swaps;
  performance_count[8][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return a;
}

function radix(arr, div) {
  let temp = [];
  temp.length = 10;
  for (let i = 0; i < temp.length; i++) {
    temp[i] = 0;
  }
  let op = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    temp[Math.floor(arr[i] / div) % 10]++;
  }

  temp[0] = temp[0] - 1;
  for (let i = 1; i < 10; i++) {
    temp[i] += temp[i - 1];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    swaps++;
    let tempo = arr[i];
    let index = temp[Math.floor(arr[i] / div) % 10]--;
    op[index] = tempo;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = op[i];
  }
}

function radixsort(arr) {
  let startTime = performance.now() + performance.timeOrigin;
  console.log("initial time", startTime);
  comparisons = 0;
  swaps = 0;
  let maximum = arr[0];
  let minimum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
    comparisons++;
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
    comparisons++;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] -= minimum;
  }

  let length = (maximum - minimum).toString().length;

  for (let i = 0, div = 1; i < length; i++, div *= 10) {
    radix(arr, div);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] += minimum;
  }
  let endTime = performance.now() + performance.timeOrigin;
  console.log("final time", endTime);
  time = endTime - startTime;
  console.log("time taken radixsort", time);
  performance_count[9][1] = comparisons;
  performance_count[9][2] = swaps;
  performance_count[9][3] = Math.floor(time * Math.pow(10, 6)) + " ns";
  return arr;
}

////Sorting method definition ends.

function generateDateformat(date) {
  return new Date(
    date.slice(0, 4) + "," + date.slice(5, 7) + "," + date.slice(8)
  );
}

function generateRandomDate(start, end) {
  start = new Date(start);
  end = new Date(end);
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString();
}

// function formatDate(date) {
//   return date.toISOString();
// }

function dataFormatter(inputDate) {
  let convertedDate = new Date(inputDate).toISOString();
  let parsedDate = convertedDate.slice(0, 10);
  return parsedDate;
}

let randomarr = [];
let reversearr = [];
let nearlysortedarr = [];
let uniquearr = [];
let uniqueOutArr = [];
let outarr = [];
let nearlysortedOutArr = [];
// variables for datatime
let displayInputArr = [];
let displayReverseInputArr = [];
let displayNearlyInputArr = [];
let displayUniqueInputArr = [];

function sorting() {
  changeRandomTabColor();
  //document.getElementById("errorFile").innerHTML = "";
  document.getElementById("errorDatatype").innerHTML = "";
  document.getElementById("errorNoofelements").innerHTML = "";
  document.getElementById("errorMinval").innerHTML = "";
  document.getElementById("errorMaxval").innerHTML = "";
  document.getElementById("errorNearly").innerHTML = "";
  document.getElementById("errorDup").innerHTML = "";
  var regex = /^[0-9]+$/;
  var regminmax = /^-?\d+$/;
  var regfloatminmax = /^-?\d*\.?\d*$/;
  var regfloat = /^-?\d*\.\d*$/;
  var regChar = /^[A-Za-z]+$/;

  let datatype = document.getElementById("datatype").value;
  let nearlysortedpercent = parseInt(
    document.getElementById("nearlysortedpercent").value
  );
  let duplicatepercent = parseInt(
    document.getElementById("duplicatepercent").value
  );

  var arr = [];
  var n = 0;

  // Validation for the input form.

  if (datatype == "Choose") {
    document.getElementById("errorDatatype").innerHTML =
      "Please choose valid data type!";
    return;
  }
  // To validate nearlysorted and duplicate percentage fields
  if (
    !regex.test(document.getElementById("nearlysortedpercent").value) ||
    isNaN(nearlysortedpercent) ||
    nearlysortedpercent < 0 ||
    nearlysortedpercent > 100
  ) {
    document.getElementById("errorNearly").innerHTML =
      "Please enter valid percentage!";
    document.getElementById("errorNearly").style.color = "red";
    document.getElementById("outputdata").style.display = "none";
    return;
  }
  if (
    !regex.test(document.getElementById("duplicatepercent").value) ||
    isNaN(duplicatepercent) ||
    duplicatepercent < 0 ||
    duplicatepercent > 100
  ) {
    document.getElementById("errorDup").innerHTML =
      "Please enter valid percentage!";
    document.getElementById("errorDup").style.color = "red";
    document.getElementById("outputdata").style.display = "none";
    return;
  }
  // To handle data if uploaded from a file.
  // if (document.getElementById("file-upload").value != "") {
  //   Papa.parse(document.getElementById("file-upload").files[0], {
  //     download: false,
  //     header: false,
  //     complete: function (result) {
  //       console.log(result);
  //       arr = [];
  //       console.log(result.data.length);
  //       console.log(result.data[0].length);
  //       console.log(result.data[0]);
  //       //for(let j=0;j<result.data.length;j++){
  //       for (let i = 0; i < result.data[0].length; i++) {
  //         arr.push(result.data[0][i]);
  //       }

  //       if (datatype == "Integer") {
  //         for (let i = 0; i < arr.length; i++) {
  //           if (regminmax.test(arr[i])) {
  //             continue;
  //           }
  //           document.getElementById("errorFile").innerText =
  //             "The datatype and contents in the file doesnt match !";
  //           document.getElementById("outputdata").style.display = "none";
  //           return;
  //         }
  //       } else if (datatype == "Float") {
  //         for (let i = 0; i < arr.length; i++) {
  //           if (regfloatminmax.test(arr[i])) {
  //             continue;
  //           }
  //           document.getElementById("errorFile").innerText =
  //             "The datatype and contents in the file doesnt match !";
  //           document.getElementById("outputdata").style.display = "none";
  //           return;
  //         }
  //       } else if (datatype == "DateTime") {
  //         for (let i = 0; i < arr.length; i++) {
  //           if (new Date(arr[i]) != "Invalid Date") {
  //             arr[i] = dataFormatter(arr[i]);
  //             continue;
  //           }
  //           document.getElementById("errorFile").innerText =
  //             "The datatype and contents in the file doesnt match !";
  //           return;
  //         }
  //       } else if (datatype == "Character") {
  //         for (let i = 0; i < arr.length; i++) {
  //           console.log(arr[i].length);
  //           if (arr[i].length != 1) {
  //             document.getElementById("errorFile").innerText =
  //               "The datatype and contents in the file doesnt match !";
  //             document.getElementById("outputdata").style.display = "none";
  //             return;
  //           }
  //         }
  //       }
  //       document.getElementById("filearr").innerText = arr;
  //       SortingCall();
  //     },
  //   });
  // } else {
  //   SortingCall();
  // }
  SortingCall();
  function SortingCall() {
    let minVal, maxVal;
    //console.log("filename " + document.getElementById("file-upload").value);
    // If data is from a file upload we handle it as below
    // if (document.getElementById("file-upload").value != "") {
    //   console.log(
    //     "after getting arr : " + document.getElementById("filearr").innerText
    //   );
    //   arr = document.getElementById("filearr").innerText.split(",");
    //   // To convert from string to integer/float in  the uploaded file data.
    //   if (datatype == "Integer" || datatype == "Float") {
    //     for (var i = 0; i < arr.length; i++) {
    //       arr[i] = parseInt(arr[i]);
    //     }
    //   }
    // }
    n = arr.length;
    // Form validation.
    if (document.getElementById("filearr").innerText == "") {
      n = parseInt(document.getElementById("noofelements").value);
      // validating the noofelements input field value
      if (
        !regex.test(document.getElementById("noofelements").value) ||
        isNaN(n) ||
        n <= 0
      ) {
        document.getElementById("errorNoofelements").innerHTML =
          "Please enter valid array size!";
        document.getElementById("outputdata").style.display = "none";
        return;
      }

      if (datatype == "Integer" || datatype == "String") {
        minVal = parseInt(document.getElementById("minrange").value);
        maxVal = parseInt(document.getElementById("maxrange").value);
      } else if (datatype == "Float") {
        minVal = parseFloat(document.getElementById("minrange").value);
        maxVal = parseFloat(document.getElementById("maxrange").value);
      }
      if (datatype == "DateTime") {
        minVal = document.getElementById("minrange").value;
        maxVal = document.getElementById("maxrange").value;
      }
      if (datatype == "Integer") {
        if (
          !regminmax.test(document.getElementById("minrange").value) ||
          isNaN(minVal) ||
          !Number.isInteger(minVal)
        ) {
          document.getElementById("errorMinval").innerHTML =
            "Enter valid minimum value";
          document.getElementById("outputdata").style.display = "none";
          return;
        }

        if (
          !regminmax.test(document.getElementById("maxrange").value) ||
          isNaN(maxVal) ||
          !Number.isInteger(maxVal) ||
          maxVal < minVal
        ) {
          document.getElementById("errorMaxval").innerHTML =
            "Enter valid maximum value";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
      }
      if (datatype == "Float") {
        if (
          !regfloatminmax.test(document.getElementById("minrange").value) ||
          isNaN(minVal)
        ) {
          document.getElementById("errorMinval").innerHTML =
            "Enter valid minimum value";
          document.getElementById("outputdata").style.display = "none";
          return;
        }

        if (
          !regfloatminmax.test(document.getElementById("maxrange").value) ||
          isNaN(maxVal) ||
          maxVal < minVal
        ) {
          document.getElementById("errorMaxval").innerHTML =
            "Enter valid maximum value";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
      }
      if (datatype == "String") {
        if (
          !regex.test(document.getElementById("minrange").value) ||
          isNaN(minVal) ||
          !Number.isInteger(minVal) ||
          minVal <= 0
        ) {
          document.getElementById("errorMinval").innerHTML =
            "Enter valid minimum length";
          document.getElementById("outputdata").style.display = "none";
          return;
        }

        if (
          !regex.test(document.getElementById("maxrange").value) ||
          (isNaN(maxVal) && !Number.isInteger(maxVal)) ||
          maxVal < minVal
        ) {
          document.getElementById("errorMaxval").innerHTML =
            "Enter valid maximum length";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
        let mindigits = document.getElementById("minrange").value;
        let maxdigits = document.getElementById("maxrange").value;
        let possibleSize = 0;
        for (let index = maxdigits; index >= mindigits; index--) {
          possibleSize += Math.pow(26, index);
        }
        if (possibleSize < n) {
          document.getElementById("errorNoofelements").innerHTML =
            "Enter valid array size";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
      }

      if (datatype == "Character") {
        if (!regChar.test(document.getElementById("minrange").value)) {
          document.getElementById("errorMinval").innerHTML =
            "Enter valid format";
          document.getElementById("outputdata").style.display = "none";
          return;
        }

        if (!regChar.test(document.getElementById("maxrange").value)) {
          document.getElementById("errorMinval").innerHTML =
            "Enter valid format";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
      }
      if (datatype == "DateTime") {
        //2021-07-05:09:24:00.000
        if (
          !(minVal.length == 23) ||
          !(minVal.slice(4, 5) == "-") ||
          !(minVal.slice(7, 8) == "-") ||
          !(minVal.slice(10, 11) == ":") ||
          !(minVal.slice(13, 14) == ":") ||
          !(minVal.slice(16, 17) == ":") ||
          !(minVal.slice(19, 20) == ".") ||
          isNaN(parseInt(minVal.slice(0, 4))) ||
          isNaN(parseInt(minVal.slice(5, 7))) ||
          isNaN(parseInt(minVal.slice(8, 10))) ||
          isNaN(parseInt(minVal.slice(11, 13))) ||
          isNaN(parseInt(minVal.slice(14, 16))) ||
          isNaN(parseInt(minVal.slice(17, 19))) ||
          isNaN(parseInt(minVal.slice(20, 22)))
        ) {
          document.getElementById("errorMinval").innerHTML =
            "Enter valid format";
          document.getElementById("outputdata").style.display = "none";
          return;
        }

        if (
          !(maxVal.length == 23) ||
          !(maxVal.slice(4, 5) == "-") ||
          !(maxVal.slice(7, 8) == "-") ||
          !(maxVal.slice(10, 11) == ":") ||
          !(maxVal.slice(13, 14) == ":") ||
          !(maxVal.slice(16, 17) == ":") ||
          !(maxVal.slice(19, 20) == ".") ||
          isNaN(parseInt(maxVal.slice(0, 4))) ||
          isNaN(parseInt(maxVal.slice(5, 7))) ||
          isNaN(parseInt(maxVal.slice(8, 10))) ||
          isNaN(parseInt(maxVal.slice(11, 13))) ||
          isNaN(parseInt(maxVal.slice(14, 16))) ||
          isNaN(parseInt(maxVal.slice(17, 19))) ||
          isNaN(parseInt(maxVal.slice(20, 22)))
        ) {
          document.getElementById("errorMaxval").innerHTML =
            "Enter valid format";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
        // end of field validation.
        if (
          !(
            generateDateformat(maxVal).getTime() -
              generateDateformat(minVal).getTime() >
            0
          )
        ) {
          document.getElementById("errorMaxval").innerHTML =
            "Please provide correct range";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
      }
      if (datatype == "Character") {
        let startChar = document.getElementById("minrange").value;
        let endChar = document.getElementById("maxrange").value;
        let startCharCode = startChar.charCodeAt(0);
        let endCharCode = endChar.charCodeAt(0);
        if (startCharCode < 65 || startCharCode > endCharCode) {
          document.getElementById("errorMinval").innerHTML =
            "Please provide correct range";
          document.getElementById("outputdata").style.display = "none";
          return;
        }
      }
      // if (datatype == "Character") {
      //   if (minVal != "1") {
      //     document.getElementById("errorMinval").innerHTML =
      //       "Character datatype min size should be 1 ";
      //     return;
      //   }
      //   if (maxVal != "1") {
      //     document.getElementById("errorMaxval").innerHTML =
      //       "Character datatype max size should be 1 ";
      //     return;
      //   }
      // }
    }

    if (document.getElementById("filearr").innerText == "") {
      if (datatype == "Integer") {
        let rangeDifference = maxVal - minVal + 1;
        let availableElemPercent = (n / rangeDifference) * 100;
        let availableElemArray = [];

        if (n > rangeDifference) {
          document.getElementById("errorNoofelements").innerHTML =
            "Size must be less than the range between min and max value.";
          document.getElementById("outputdata").style.display = "none";
          return;
        } else if (availableElemPercent >= 60) {
          // The available element array is created with all possible values between the given min and max range.
          for (let i = 0; i < rangeDifference; i++) {
            // TODO Need to check if i < n or i < rangeDifference
            availableElemArray[i] = minVal + i;
          }
          // Now the available element array is shuffled using the below code.
          for (let j = n - 1; j >= 0; j--) {
            let randomIndex = Math.floor(Math.random() * (maxVal - minVal));
            let temp = availableElemArray[maxVal - minVal];
            availableElemArray[maxVal - minVal] =
              availableElemArray[randomIndex];
            availableElemArray[randomIndex] = temp;
            arr[j] = availableElemArray[maxVal - minVal]; // the input array is getting created with the shuffled available element array
            maxVal--;
          }
        } else if (availableElemPercent < 60) {
          for (let i = 0; i < n; i++) {
            let randomInt = Math.floor(
              Math.random() * (maxVal - minVal) + minVal
            );
            if (!availableElemArray.includes(randomInt)) {
              availableElemArray.push(randomInt);
            } else {
              i--;
            }
            arr = availableElemArray;
          }
        }
      } else if (datatype == "Float") {
        // Since float has many unique values, the available element array is created using the below method by checking if an element already exists or not before pushing a new element
        let availableElemArray = [];
        for (let i = 0; i < n; i++) {
          let val = Math.random() * (maxVal - minVal) + minVal;
          if (!availableElemArray.includes(val)) {
            availableElemArray.push(val);
            arr[i] = val;
          } else {
            i--;
          }
        }
      } else if (datatype == "String") {
        // Added new logic similar to float, since the probablity of getting the same string is less. and so we can check that using includes()
        let availableElemArray = [];
        for (let i = 0; i < n; i++) {
          let val = "";
          let noofdigits = Math.round(
            Math.random() * (maxVal - minVal) + minVal
          );
          for (let j = 0; j < noofdigits; j++) {
            let digit = parseInt(Math.random() * 26 + 97);
            val += String.fromCharCode(digit);
          }
          if (!availableElemArray.includes(val)) {
            availableElemArray.push(val);
            arr[i] = val;
          } else {
            i--;
          }
        }
      } else if (datatype == "DateTime") {
        // for (let i = 0; i < n; i++) {
        //   let val = generateRandomDate(minVal, maxVal);
        //   if (!arr.includes(val)) {
        //     arr[i] = val;
        //   } else {
        //     i--;
        //   }
        // }
        // console.log("random date array", arr);
        let maxValTime = new Date(maxVal).getTime();
        let minValTime = new Date(minVal).getTime();
        let possibleArrSize = maxValTime - minValTime;
        let availableElemPercent = (n / possibleArrSize) * 100;
        let availableElemArray = [];

        if (n > possibleArrSize) {
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
            let index = maxValTime - minValTime;
            let temp = availableElemArray[index];
            availableElemArray[index] = availableElemArray[randomIndex];
            availableElemArray[randomIndex] = temp;
            arr[j] = new Date(availableElemArray[index]); // the input array is getting created with the shuffled available element array
            maxValTime--;
          }
        } else if (availableElemPercent < 60) {
          for (let i = 0; i < n; i++) {
            let val = generateRandomDate(minVal, maxVal);
            if (!arr.includes(val)) {
              arr[i] = val;
            } else {
              i--;
            }
          }
        }
      } else if (datatype == "Character") {
        let startChar = document.getElementById("minrange").value;
        let endChar = document.getElementById("maxrange").value;
        let startCharCode = startChar.charCodeAt(0);
        let endCharCode = endChar.charCodeAt(0);
        let rangeDifference = endCharCode - startCharCode;
        let ignoreAsciiCodes = [91, 92, 93, 94, 95, 96];
        let maxStrings = 52; // 26 lowercase and 26 uppercase letters for characters
        let availableElemPercent = (n / maxStrings) * 100;
        let availableElemArray = [];

        if (n > rangeDifference) {
          document.getElementById("errorNoofelements").innerHTML =
            "Size must be less than the range between min and max value.";
          document.getElementById("outputdata").style.display = "none";
          return;
        } else if (availableElemPercent >= 60) {
          let index = 0;
          for (let i = startCharCode; i < endCharCode; i++) {
            if (!ignoreAsciiCodes.includes(i)) {
              availableElemArray[index] = i;
              index++;
            } else {
              index--;
            }
          }
          for (let i = 0; i < n; i++) {
            let randomIndex = Math.floor(Math.random() * n); //TODO similar to integer random generation.

            let temp = availableElemArray[i];
            availableElemArray[i] = availableElemArray[randomIndex];
            availableElemArray[randomIndex] = temp;
          }
        } else if (availableElemPercent < 60) {
          for (let i = 0; i < n; i++) {
            let val = Math.floor(
              Math.random() * (endCharCode - startCharCode) + startCharCode
            );
            if (
              !availableElemArray.includes(val) &&
              !ignoreAsciiCodes.includes(val)
            ) {
              availableElemArray.push(val);
            } else {
              i--;
            }
          }
        }
        for (let i = 0; i < n; i++) {
          arr[i] = String.fromCharCode(availableElemArray[i]);
        }
      }
    }
    temparr = [...arr];
    arrcopy = [...arr];
    randomarr = [...arr];
    // Reverse of an array is created from the input arr
    arr = arr
      .sort(function (a, b) {
        return a - b;
      })
      .reverse();
    reversearr = [...arr];

    arr = arr.sort(function (a, b) {
      return a - b;
    });

    //Nearly sorted array is created from the input arr
    nearlysortedarr = [...arr];

    let nearlyunsortedpercentInt = Math.floor(
      ((100 - nearlysortedpercent) / 100.0) * n
    );
    if (nearlyunsortedpercentInt % 2 == 1) nearlyunsortedpercentInt--;

    let map = {};

    for (let i = 0; i < nearlyunsortedpercentInt; i += 2) {
      let index1 = 0;
      let index2 = 0;
      index1 = Math.floor(Math.random() * n);
      index2 = Math.floor(Math.random() * n);
      if (
        (map[index1] && map[index1].includes(index2)) ||
        (map[index2] && map[index2].includes(index1))
      ) {
        i -= 2;
        continue;
      } else {
        if (map[index1]) {
          map[index1].push(index2);
        } else {
          map[index1] = [index2];
        }
        if (map[index2]) {
          map[index2].push(index1);
        } else {
          map[index2] = [index1];
        }
        let temp = nearlysortedarr[index1];
        nearlysortedarr[index1] = nearlysortedarr[index2];
        nearlysortedarr[index2] = temp;
      }
    }

    // Unique array is created using the input array
    uniquearr = [...arr]; //TODO need to see if we need a sorted array, since arr is sorted already.

    let minDuplicatePercent = ((2 / n) * 100).toFixed(2); //TODO
    let duplicateArray = [];
    if (duplicatepercent < minDuplicatePercent) {
      document.getElementById("errorDup").innerHTML =
        "Duplicate percent must be greater than " +
        minDuplicatePercent +
        " and less than or equal to 100";
      document.getElementById("outputdata").style.display = "none";
      return;
    } else {
      let numOfDuplicateElem = Math.round((n * duplicatepercent) / 100);
      let fetchDuplicateElem = numOfDuplicateElem / 2;
      let numOfUniqueElem = Math.floor(n - fetchDuplicateElem);
      let secondSetDuplicateArray = [];
      for (let i = 0; i < numOfUniqueElem; i++) {
        duplicateArray[i] = uniquearr[i];
      }
      for (let i = 0; i < Math.floor(fetchDuplicateElem); i++) {
        let tempRandomIndex = Math.floor(Math.random() * numOfUniqueElem);
        duplicateArray.push(uniquearr[tempRandomIndex]);
        secondSetDuplicateArray.push(uniquearr[tempRandomIndex]);
      }

      if (numOfDuplicateElem % 2 != 0) {
        let fetchLastElementIndex = Math.floor(
          Math.random() * secondSetDuplicateArray.length
        );
        duplicateArray.push(secondSetDuplicateArray[fetchLastElementIndex]);
      }
    }

    uniquearr = [...duplicateArray];

    let n1 = n;

    let a = [...randomarr];
    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        displayInputArr[i] = a[i];
      }
    }
    let arrdata = [...a];
    //sorting methods called in sequence
    bubble(a, n1);
    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        a[i] = a[i];
      }
    }
    outarr = [...a];
    pc[0][1][0][1] = performance_count[0][1];
    pc[0][1][0][2] = performance_count[0][2];
    pc[0][1][0][3] = performance_count[0][3];

    a = [...randomarr];

    selection(a, n1);

    pc[0][1][1][1] = performance_count[1][1];
    pc[0][1][1][2] = performance_count[1][2];
    pc[0][1][1][3] = performance_count[1][3];

    a = [...randomarr];

    insertion(a, n1);

    pc[0][1][2][1] = performance_count[2][1];
    pc[0][1][2][2] = performance_count[2][2];
    pc[0][1][2][3] = performance_count[2][3];

    a = [...randomarr];

    mergeMain(a, 0, n1 - 1);

    pc[0][1][7][1] = performance_count[7][1];
    pc[0][1][7][2] = performance_count[7][2];
    pc[0][1][7][3] = performance_count[7][3];

    a = [...randomarr];

    quickMain(a, 0, n1 - 1);

    pc[0][1][6][1] = performance_count[6][1];
    pc[0][1][6][2] = performance_count[6][2];
    pc[0][1][6][3] = performance_count[6][3];

    a = [...randomarr];

    quick3Main(a, 0, n1 - 1);

    pc[0][1][5][1] = performance_count[5][1];
    pc[0][1][5][2] = performance_count[5][2];
    pc[0][1][5][3] = performance_count[5][3];

    a = [...randomarr];

    heap(a, 0, n1 - 1);

    pc[0][1][3][1] = performance_count[3][1];
    pc[0][1][3][2] = performance_count[3][2];
    pc[0][1][3][3] = performance_count[3][3];

    a = [...randomarr];

    shell(a, n1);

    pc[0][1][4][1] = performance_count[4][1];
    pc[0][1][4][2] = performance_count[4][2];
    pc[0][1][4][3] = performance_count[4][3];

    if (
      datatype == "Integer" &&
      !regfloat.test(temparr[0]) &&
      !isNaN(temparr[0])
    ) {
      a = [...randomarr];

      countsort(a);

      pc[0][1][8][1] = performance_count[8][1];
      pc[0][1][8][2] = performance_count[8][2];
      pc[0][1][8][3] = performance_count[8][3];

      a = [...randomarr];

      a = radixsort(a); /////

      pc[0][1][9][1] = performance_count[9][1];
      pc[0][1][9][2] = performance_count[9][2];
      pc[0][1][9][3] = performance_count[9][3];
    }

    n1 = n;
    if (datatype == "Character" || datatype == "String") {
      reversearr = reversearr.sort().reverse(); // Added this line on 1st Sep 2021,char sort wasnt working as expected.
    }
    a = [...reversearr];

    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        displayReverseInputArr[i] = a[i];
      }
    }
    bubble(a, n1);

    pc[1][1][0][1] = performance_count[0][1];
    pc[1][1][0][2] = performance_count[0][2];
    pc[1][1][0][3] = performance_count[0][3];

    a = [...reversearr];

    selection(a, n1);

    pc[1][1][1][1] = performance_count[1][1];
    pc[1][1][1][2] = performance_count[1][2];
    pc[1][1][1][3] = performance_count[1][3];

    a = [...reversearr];

    insertion(a, n1);

    pc[1][1][2][1] = performance_count[2][1];
    pc[1][1][2][2] = performance_count[2][2];
    pc[1][1][2][3] = performance_count[2][3];

    a = [...reversearr];

    mergeMain(a, 0, n1 - 1);

    pc[1][1][7][1] = performance_count[7][1];
    pc[1][1][7][2] = performance_count[7][2];
    pc[1][1][7][3] = performance_count[7][3];

    a = [...reversearr];

    quickMain(a, 0, n1 - 1);

    pc[1][1][6][1] = performance_count[6][1];
    pc[1][1][6][2] = performance_count[6][2];
    pc[1][1][6][3] = performance_count[6][3];

    a = [...reversearr];

    quick3Main(a, 0, n1 - 1);

    pc[1][1][5][1] = performance_count[5][1];
    pc[1][1][5][2] = performance_count[5][2];
    pc[1][1][5][3] = performance_count[5][3];

    a = [...reversearr];

    heap(a, 0, n1 - 1);

    pc[1][1][3][1] = performance_count[3][1];
    pc[1][1][3][2] = performance_count[3][2];
    pc[1][1][3][3] = performance_count[3][3];

    a = [...reversearr];

    shell(a, n1);

    pc[1][1][4][1] = performance_count[4][1];
    pc[1][1][4][2] = performance_count[4][2];
    pc[1][1][4][3] = performance_count[4][3];

    if (
      datatype == "Integer" &&
      !regfloat.test(temparr[0]) &&
      !isNaN(temparr[0])
    ) {
      a = [...reversearr];

      countsort(a);

      pc[1][1][8][1] = performance_count[8][1];
      pc[1][1][8][2] = performance_count[8][2];
      pc[1][1][8][3] = performance_count[8][3];

      a = [...reversearr];

      a = radixsort(a);

      pc[1][1][9][1] = performance_count[9][1];
      pc[1][1][9][2] = performance_count[9][2];
      pc[1][1][9][3] = performance_count[9][3];
    }

    n1 = n;

    a = [...nearlysortedarr];

    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        displayNearlyInputArr[i] = a[i];
      }
    }
    bubble(a, n1);
    nearlysortedOutArr = [...a];
    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        nearlysortedOutArr[i] = a[i];
      }
    }

    pc[2][1][0][1] = performance_count[0][1];
    pc[2][1][0][2] = performance_count[0][2];
    pc[2][1][0][3] = performance_count[0][3];

    a = [...nearlysortedarr];

    selection(a, n1);

    pc[2][1][1][1] = performance_count[1][1];
    pc[2][1][1][2] = performance_count[1][2];
    pc[2][1][1][3] = performance_count[1][3];

    a = [...nearlysortedarr];

    insertion(a, n1);

    pc[2][1][2][1] = performance_count[2][1];
    pc[2][1][2][2] = performance_count[2][2];
    pc[2][1][2][3] = performance_count[2][3];

    a = [...nearlysortedarr];

    mergeMain(a, 0, n1 - 1);

    pc[2][1][7][1] = performance_count[7][1];
    pc[2][1][7][2] = performance_count[7][2];
    pc[2][1][7][3] = performance_count[7][3];

    a = [...nearlysortedarr];

    quickMain(a, 0, n1 - 1);

    pc[2][1][6][1] = performance_count[6][1];
    pc[2][1][6][2] = performance_count[6][2];
    pc[2][1][6][3] = performance_count[6][3];

    a = [...nearlysortedarr];

    quick3Main(a, 0, n1 - 1);

    pc[2][1][5][1] = performance_count[5][1];
    pc[2][1][5][2] = performance_count[5][2];
    pc[2][1][5][3] = performance_count[5][3];

    a = [...nearlysortedarr];

    heap(a, 0, n1 - 1);

    pc[2][1][3][1] = performance_count[3][1];
    pc[2][1][3][2] = performance_count[3][2];
    pc[2][1][3][3] = performance_count[3][3];

    a = [...nearlysortedarr];

    shell(a, n1);

    pc[2][1][4][1] = performance_count[4][1];
    pc[2][1][4][2] = performance_count[4][2];
    pc[2][1][4][3] = performance_count[4][3];

    if (
      datatype == "Integer" &&
      !regfloat.test(temparr[0]) &&
      !isNaN(temparr[0])
    ) {
      a = [...nearlysortedarr];

      countsort(a);

      pc[2][1][8][1] = performance_count[8][1];
      pc[2][1][8][2] = performance_count[8][2];
      pc[2][1][8][3] = performance_count[8][3];

      a = [...nearlysortedarr];

      a = radixsort(a);

      pc[2][1][9][1] = performance_count[9][1];
      pc[2][1][9][2] = performance_count[9][2];
      pc[2][1][9][3] = performance_count[9][3];
    }

    n1 = n;

    a = [...uniquearr];
    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        displayUniqueInputArr[i] = a[i];
      }
    }

    bubble(a, n1);
    uniqueOutArr = [...a];
    if (datatype == "DateTime") {
      for (let i = 0; i < n1; i++) {
        uniqueOutArr[i] = a[i];
      }
    }

    pc[3][1][0][1] = performance_count[0][1];
    pc[3][1][0][2] = performance_count[0][2];
    pc[3][1][0][3] = performance_count[0][3];

    a = [...uniquearr];

    selection(a, n1);

    pc[3][1][1][1] = performance_count[1][1];
    pc[3][1][1][2] = performance_count[1][2];
    pc[3][1][1][3] = performance_count[1][3];

    a = [...uniquearr];

    insertion(a, n1);

    pc[3][1][2][1] = performance_count[2][1];
    pc[3][1][2][2] = performance_count[2][2];
    pc[3][1][2][3] = performance_count[2][3];

    a = [...uniquearr];

    mergeMain(a, 0, n1 - 1);

    pc[3][1][7][1] = performance_count[7][1];
    pc[3][1][7][2] = performance_count[7][2];
    pc[3][1][7][3] = performance_count[7][3];

    a = [...uniquearr];

    quickMain(a, 0, n1 - 1);

    pc[3][1][6][1] = performance_count[6][1];
    pc[3][1][6][2] = performance_count[6][2];
    pc[3][1][6][3] = performance_count[6][3];

    a = [...uniquearr];

    quick3Main(a, 0, n1 - 1);

    pc[3][1][5][1] = performance_count[5][1];
    pc[3][1][5][2] = performance_count[5][2];
    pc[3][1][5][3] = performance_count[5][3];

    a = [...uniquearr];

    heap(a, 0, n1 - 1);

    pc[3][1][3][1] = performance_count[3][1];
    pc[3][1][3][2] = performance_count[3][2];
    pc[3][1][3][3] = performance_count[3][3];

    a = [...uniquearr];

    shell(a, n1);

    pc[3][1][4][1] = performance_count[4][1];
    pc[3][1][4][2] = performance_count[4][2];
    pc[3][1][4][3] = performance_count[4][3];

    if (
      datatype == "Integer" &&
      !regfloat.test(temparr[0]) &&
      !isNaN(temparr[0])
    ) {
      a = [...uniquearr];

      countsort(a);

      pc[3][1][8][1] = performance_count[8][1];
      pc[3][1][8][2] = performance_count[8][2];
      pc[3][1][8][3] = performance_count[8][3];

      a = [...uniquearr];

      a = radixsort(a);

      pc[3][1][9][1] = performance_count[9][1];
      pc[3][1][9][2] = performance_count[9][2];
      pc[3][1][9][3] = performance_count[9][3];
    }

    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 10; i++) {
        console.log(
          pc[j][1][i][0] +
            "\t\t\t\t" +
            pc[j][1][i][1] +
            "\t\t" +
            pc[j][1][i][2] +
            "\t\t" +
            pc[j][1][i][3] +
            "\n"
        );
      }
    }
    // Radix sort is only for integers and floats
    if (
      datatype != "Integer" ||
      regfloat.test(temparr[0]) ||
      isNaN(temparr[0])
    ) {
      pc[0][1][8][1] = "NA";
      pc[0][1][8][2] = "NA";
      pc[0][1][8][3] = "NA";
      pc[0][1][9][1] = "NA";
      pc[0][1][9][2] = "NA";
      pc[0][1][9][3] = "NA";

      pc[1][1][8][1] = "NA";
      pc[1][1][8][2] = "NA";
      pc[1][1][8][3] = "NA";
      pc[1][1][9][1] = "NA";
      pc[1][1][9][2] = "NA";
      pc[1][1][9][3] = "NA";

      pc[2][1][8][1] = "NA";
      pc[2][1][8][2] = "NA";
      pc[2][1][8][3] = "NA";
      pc[2][1][9][1] = "NA";
      pc[2][1][9][2] = "NA";
      pc[2][1][9][3] = "NA";

      pc[3][1][8][1] = "NA";
      pc[3][1][8][2] = "NA";
      pc[3][1][8][3] = "NA";
      pc[3][1][9][1] = "NA";
      pc[3][1][9][2] = "NA";
      pc[3][1][9][3] = "NA";
    }

    //arrdata = randomarr.toString();
    document.getElementById("inputdata").style.display = "block";
    document.getElementById("outputdata").style.display = "block";
    // var outarr = randomarr.sort().toString();

    if (datatype == "DateTime") {
      arrdata = [...displayInputArr];
    }
    if (arr.length <= 20) {
      document.getElementById("inputarr").innerText = arrdata;
      document.getElementById("outputarr").innerText = outarr;
      document.getElementById("resultarr").innerText = arrdata;
      document.getElementById("resultoutarr").innerText = outarr;
    } else {
      document.getElementById("inputarr").innerText =
        arrdata.slice(0, 20) + ".....";
      document.getElementById("outputarr").innerText =
        outarr.slice(0, 20) + ".....";
      document.getElementById("resultarr").innerText = arrdata;
      document.getElementById("resultoutarr").innerText = outarr;
    }
    // Table to show the anlaysis data
    var table1 = "<table>";
    table1 +=
      "<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
    for (let i = 0; i < 10; i++) {
      table1 +=
        "<tr><td style ='font-Weight:bold;text-decoration:underline'><a href='" +
        pc[0][1][i][0] +
        ".html' style='color:#1F95EE' target='_blank'>" +
        pc[0][1][i][0] +
        "</a></td><td>" +
        pc[0][1][i][1] +
        "</td><td>" +
        pc[0][1][i][2] +
        "</td><td>" +
        pc[0][1][i][3] +
        "</td></tr>";
    }
    table1 += "</table>";

    var table2 = "<table>";
    table2 +=
      "<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
    for (let i = 0; i < 10; i++) {
      table2 +=
        "<tr><td style ='font-Weight:bold;text-decoration:underline'><a href='" +
        pc[1][1][i][0] +
        ".html' style='color:#1F95EE' target='_blank'>" +
        pc[1][1][i][0] +
        "</a></td><td>" +
        pc[1][1][i][1] +
        "</td><td>" +
        pc[1][1][i][2] +
        "</td><td>" +
        pc[1][1][i][3] +
        "</td></tr>";
    }
    table2 += "</table>";

    var table3 = "<table>";
    table3 +=
      "<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
    for (let i = 0; i < 10; i++) {
      table3 +=
        "<tr><td style ='font-Weight:bold;text-decoration:underline'><a href='" +
        pc[2][1][i][0] +
        ".html' style='color:#1F95EE' target='_blank'>" +
        pc[2][1][i][0] +
        "</a></td><td>" +
        pc[2][1][i][1] +
        "</td><td>" +
        pc[2][1][i][2] +
        "</td><td>" +
        pc[2][1][i][3] +
        "</td></tr>";
    }
    table3 += "</table>";

    var table4 = "<table>";
    table4 +=
      "<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
    for (let i = 0; i < 10; i++) {
      table4 +=
        "<tr><td style ='font-Weight:bold;text-decoration:underline'><a href='" +
        pc[3][1][i][0] +
        ".html' style='color:#1F95EE' target='_blank'>" +
        pc[3][1][i][0] +
        "</a></td><td>" +
        pc[3][1][i][1] +
        "</td><td>" +
        pc[3][1][i][2] +
        "</td><td>" +
        pc[3][1][i][3] +
        "</td></tr>";
    }
    table4 += "</table>";

    document.getElementById("table1").innerHTML = table1;
    document.getElementById("table2").innerHTML = table2;
    document.getElementById("table3").innerHTML = table3;
    document.getElementById("table4").innerHTML = table4;

    var timetakenrandom = [];
    var timetakenreverse = [];
    var timetakennearlysorted = [];
    var timetakenunique = [];

    var comptakenrandom = [];
    var comptakenreverse = [];
    var comptakennearlysorted = [];
    var comptakenunique = [];

    var swapstakenrandom = [];
    var swapstakenreverse = [];
    var swapstakennearlysorted = [];
    var swapstakenunique = [];

    for (let i = 0; i < 10; i++) {
      // 1982320 ns
      timetakenrandom[i] = parseInt(pc[0][1][i][3].slice(0, -3)) / 1000;
      timetakenreverse[i] = parseInt(pc[1][1][i][3].slice(0, -3)) / 1000;
      timetakennearlysorted[i] = parseInt(pc[2][1][i][3].slice(0, -3)) / 1000;
      timetakenunique[i] = parseInt(pc[3][1][i][3].slice(0, -3)) / 1000;

      comptakenrandom[i] = pc[0][1][i][1];
      comptakenreverse[i] = pc[1][1][i][1];
      comptakennearlysorted[i] = pc[2][1][i][1];
      comptakenunique[i] = pc[3][1][i][1];

      swapstakenrandom[i] = pc[0][1][i][2];
      swapstakenreverse[i] = pc[1][1][i][2];
      swapstakennearlysorted[i] = pc[2][1][i][2];
      swapstakenunique[i] = pc[3][1][i][2];
    }
    document.getElementById("graph").style.display = "block";
    document.getElementById("data").innerHTML = timetakenrandom;
    document.getElementById("timerandom").innerHTML = timetakenrandom;
    document.getElementById("timereverse").innerHTML = timetakenreverse;
    document.getElementById(
      "timenearlysorted"
    ).innerHTML = timetakennearlysorted;
    document.getElementById("timeunique").innerHTML = timetakenunique;

    document.getElementById("comparisons").innerHTML = comptakenrandom;
    document.getElementById("comprandom").innerHTML = comptakenrandom;
    document.getElementById("compreverse").innerHTML = comptakenreverse;
    document.getElementById(
      "compnearlysorted"
    ).innerHTML = comptakennearlysorted;
    document.getElementById("compunique").innerHTML = comptakenunique;

    document.getElementById("swaps").innerHTML = swapstakenrandom;
    document.getElementById("swapsrandom").innerHTML = swapstakenrandom;
    document.getElementById("swapsreverse").innerHTML = swapstakenreverse;
    document.getElementById(
      "swapsnearlysorted"
    ).innerHTML = swapstakennearlysorted;
    document.getElementById("swapsunique").innerHTML = swapstakenunique;
    graph(); // Graph called to display the output data.
  }
}

// The below method is display the input data according to the tab that is chosen in the table.
function inputarrContentChange(tabname) {
  let datatype = document.getElementById("datatype").value; // Need to work on datetime format for all tabs.
  if (tabname == "reverse") {
    if (datatype == "DateTime") {
      reversearr = [...displayReverseInputArr];
    }
    document.getElementById("resultarr").innerHTML = reversearr;
    document.getElementById("resultoutarr").innerHTML = outarr; // added this line to get the right output in the popup modal
    if (reversearr.length <= 20) {
      document.getElementById("inputarr").innerHTML = reversearr;
      document.getElementById("outputarr").innerHTML = outarr;
    } else {
      document.getElementById("inputarr").innerText =
        reversearr.slice(0, 20) + "....."; // If the num of elements is more than 20, it is displayed with the trailing dots format.
      document.getElementById("outputarr").innerText =
        outarr.slice(0, 20) + ".....";
    }
  } else if (tabname == "random") {
    if (datatype == "DateTime") {
      randomarr = [...displayInputArr];
    }
    document.getElementById("resultarr").innerHTML = randomarr;
    document.getElementById("resultoutarr").innerHTML = outarr;
    if (randomarr.length <= 20) {
      document.getElementById("inputarr").innerHTML = randomarr;
      document.getElementById("outputarr").innerHTML = outarr;
    } else {
      document.getElementById("inputarr").innerText =
        randomarr.slice(0, 20) + ".....";
      document.getElementById("outputarr").innerText =
        outarr.slice(0, 20) + ".....";
    }
  } else if (tabname == "nearlysorted") {
    if (datatype == "DateTime") {
      nearlysortedarr = [...displayNearlyInputArr];
    }
    document.getElementById("resultarr").innerHTML = nearlysortedarr;
    document.getElementById("resultoutarr").innerHTML = nearlysortedOutArr;
    if (nearlysortedarr.length <= 20) {
      document.getElementById("inputarr").innerHTML = nearlysortedarr;
      document.getElementById("outputarr").innerHTML = nearlysortedOutArr;
    } else {
      document.getElementById("inputarr").innerText =
        nearlysortedarr.slice(0, 20) + ".....";
      document.getElementById("outputarr").innerText =
        nearlysortedOutArr.slice(0, 20) + ".....";
    }
  } else if (tabname == "duplicate") {
    if (datatype == "DateTime") {
      uniquearr = [...displayUniqueInputArr];
    }
    document.getElementById("resultarr").innerHTML = uniquearr;
    document.getElementById("resultoutarr").innerHTML = uniqueOutArr;
    if (uniquearr.length <= 20) {
      document.getElementById("inputarr").innerHTML = uniquearr;
      document.getElementById("outputarr").innerHTML = uniqueOutArr;
    } else {
      document.getElementById("inputarr").innerText =
        uniquearr.slice(0, 20) + ".....";
      document.getElementById("outputarr").innerText =
        uniqueOutArr.slice(0, 20) + ".....";
    }
  }
}
