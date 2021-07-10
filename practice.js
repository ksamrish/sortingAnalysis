// Code for generating random numbers without duplicate on all cases 
   /*1. Check the range and the number of elements. 
If num of elements > the difference in range , error 

calculate the available elements % (arraySize *100/difference in range)

the availableElements % > 60 - Palani logic to swap within the array 

if its availableElements % < 60% - our logic but without duplicate. */

let minRange = 1;
let maxRange = 20;
let arraySize = 12;
let rangeDifference = (maxRange - minRange) + 1;
let availableElemPercent = (arraySize/rangeDifference)*100;
console.log(Math.round(availableElemPercent));
let randomArray = [];
let availableElemArray = [];
let givenDuplicatePercent = 50;
let minDuplicatePercent = ((2/arraySize)*100).toFixed(2);
let duplicateArray = [];

if(arraySize > rangeDifference){
    console.log("error")
}else if(availableElemPercent >= 60){
    for(let i = 0; i < rangeDifference;i++){
    availableElemArray[i] = minRange + i ;
    }
    console.log("availableElemArray",availableElemArray);

    for(let j = arraySize-1; j >= 0 ;j--){
        let randomIndex = Math.floor(Math.random()*(maxRange-minRange))+minRange;
        console.log(randomIndex)
        let temp = availableElemArray[maxRange-1];
        availableElemArray[maxRange-1] = availableElemArray[randomIndex];
        availableElemArray[randomIndex] = temp;
        console.log("inside availableElemArray",availableElemArray);
        randomArray[j] = availableElemArray[maxRange-1];
        maxRange--;
    }
    console.log(randomArray);
}else if(availableElemPercent < 60){
    for(let i = 0; i < arraySize ; i++){
        let randomInt = Math.floor(Math.random()*(maxRange-minRange)+minRange);
        if(!availableElemArray.includes(randomInt)){
            availableElemArray.push(randomInt)
        }else{
            i--;
        }
        randomArray = availableElemArray
        console.log("inside else", randomArray)
    }
}


if(givenDuplicatePercent < minDuplicatePercent){
    console.log("error");
}else{
    let numOfDuplicateElem = Math.round(arraySize*givenDuplicatePercent/100);
    console.log("num of duplicate elements", numOfDuplicateElem)

    let fetchDuplicateElem = (numOfDuplicateElem/2);
    console.log("fetchduplicateElem",fetchDuplicateElem)
    let numOfUniqueElem = Math.floor(arraySize - fetchDuplicateElem);
    console.log("numOfUniqueElem,",numOfUniqueElem)
    let secondSetDuplicateArray = [];
    for(let i = 0 ; i < numOfUniqueElem ; i++){
        duplicateArray[i] = randomArray[i];
    }
    console.log("duplicateArray",duplicateArray);
    for(let i = 0 ; i < Math.floor(fetchDuplicateElem);i++){
        let tempRandomIndex = Math.floor(Math.random()*(numOfUniqueElem));
        console.log("tempRandomIndex",tempRandomIndex)
        duplicateArray.push(randomArray[tempRandomIndex]);
        secondSetDuplicateArray.push(randomArray[tempRandomIndex]);
    }

    if(numOfDuplicateElem%2!=0){
        let fetchLastElementIndex = Math.floor(Math.random()*(secondSetDuplicateArray.length));
        console.log("fetchLastElementIndex",fetchLastElementIndex)
        duplicateArray.push(secondSetDuplicateArray[fetchLastElementIndex])
        console.log("last",duplicateArray)
    }
    console.log(duplicateArray.length)
}




    ////////////////////////////////
    // let duplicatepercent = 99;
    // let n = 10;
    // let uniquepercent = Math.ceil(((100-duplicatepercent)/100.0)*n);
    // let arr = [1,2,3,4,5,6,7,8,9,10];	
    // let data = "";
    // let listuniqInt = [];
    // for(let i=0;i<uniquepercent;i++) {
    //     let countsame = 0;
    //     while(true) {
    //         if(countsame>20){ 
    //             listuniqInt.push(arr[Math.floor(Math.random()*n-1)]);
    //             break;   
    //         }		
    //         let random = Math.floor(Math.random()*(n-1));
    //         if(!listuniqInt.includes(arr[random])) {
    //             listuniqInt.push(arr[random]);
    //             break;
    //         }
    //         countsame++;
    //     }
    // }
    // console.log('listuniqInt',listuniqInt);
    // for(let i=0;i<n;i++) {
    //     arr[i] = Number.MAX_SAFE_INTEGER;
    // }
    // console.log('arr',arr);
    // let randindInt = [];
    // for(let i=0;i<uniquepercent;i++) {
    //     let duplicateCount = 0 ;
    //     while(true) {
    //         let randindex = Math.floor(Math.random()*(n-1));
    //         console.log('random ind',randindex);
    //         if(duplicateCount > 20){
    //             randindInt.push(randindex);
    //             arr[randindex] = listuniqInt[i];
    //             break;
    //         }
            
    //         if(!randindInt.includes(randindex)) {
    //             randindInt.push(randindex);
    //             arr[randindex] = listuniqInt[i];
    //             break;
    //         }
    //         duplicateCount++;
    //     }
    // }	
    // console.log('randindInt',randindInt);
    // console.log('arr at line 39',arr);
    // for(let i=0,j=0;i<n;i++) {
    //     if(j==uniquepercent)
    //         j = 0;
    //     if(arr[i]==Number.MAX_SAFE_INTEGER) {
    //         arr[i] = listuniqInt[j++];
    //         console.log('here',arr)
    //     }
    // }

    // console.log('last arr',arr)

    // listuniqInt [
    //     8, 9, 7, 3, 2,
    //     5, 1, 6, 4, 6
    //   ]