
   /*1. Check the range and the number of elements. 
If num of elements > the difference in range , error 

calculate the available elements % (arraySize *100/difference in range)

the availableElements % > 60 - Palani logic to swap within the array 

if its availableElements % < 60% - our logic but without duplicate. */
    
    let duplicatepercent = 99;
    let n = 10;
    let uniquepercent = Math.ceil(((100-duplicatepercent)/100.0)*n);
    let arr = [1,2,3,4,5,6,7,8,9,10];	
    let data = "";
    let listuniqInt = [];
    for(let i=0;i<uniquepercent;i++) {
        let countsame = 0;
        while(true) {
            if(countsame>20){ 
                listuniqInt.push(arr[Math.floor(Math.random()*n-1)]);
                break;   
            }		
            let random = Math.floor(Math.random()*(n-1));
            if(!listuniqInt.includes(arr[random])) {
                listuniqInt.push(arr[random]);
                break;
            }
            countsame++;
        }
    }
    console.log('listuniqInt',listuniqInt);
    for(let i=0;i<n;i++) {
        arr[i] = Number.MAX_SAFE_INTEGER;
    }
    console.log('arr',arr);
    let randindInt = [];
    for(let i=0;i<uniquepercent;i++) {
        let duplicateCount = 0 ;
        while(true) {
            let randindex = Math.floor(Math.random()*(n-1));
            console.log('random ind',randindex);
            if(duplicateCount > 20){
                randindInt.push(randindex);
                arr[randindex] = listuniqInt[i];
                break;
            }
            
            if(!randindInt.includes(randindex)) {
                randindInt.push(randindex);
                arr[randindex] = listuniqInt[i];
                break;
            }
            duplicateCount++;
        }
    }	
    console.log('randindInt',randindInt);
    console.log('arr at line 39',arr);
    for(let i=0,j=0;i<n;i++) {
        if(j==uniquepercent)
            j = 0;
        if(arr[i]==Number.MAX_SAFE_INTEGER) {
            arr[i] = listuniqInt[j++];
            console.log('here',arr)
        }
    }

    console.log('last arr',arr)

    listuniqInt [
        8, 9, 7, 3, 2,
        5, 1, 6, 4, 6
      ]