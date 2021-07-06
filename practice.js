let map = {};

let nearlyunsortedpercentInt = 10;
let n = 10;

for(let i=0;i<nearlyunsortedpercentInt;i+=2) {
    let rand1 = 0;
    let rand2 = 0;
    rand1 = Math.floor(Math.random()*(n));
    rand2 =  Math.floor(Math.random()*(n));
    console.log(rand1,rand2);
    if((map[rand1]&&map[rand1].includes(rand2)) || (map[rand2]&&map[rand2].includes(rand1))){
        console.log("already there in map", rand1, rand2);
        i-=2;
        continue;
    }
    else{
        if(map[rand1]){
            map[rand1].push(rand2);
        }
        else{
            map[rand1] = [rand2];
        }
        if(map[rand2]){
            map[rand2].push(rand1);
        }
        else{
            map[rand2] = [rand1];
        }
    }
}

console.log(map);
