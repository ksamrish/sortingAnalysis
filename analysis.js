

var pc = [         
	["random",[
		["bubble",0,0,0],
		["selection",0,0,0],
		["insertion",0,0,0],
		["merge",0,0,0],
		["quick",0,0,0],
		["quick3",0,0,0],
		["heap",0,0,0],
		["shell",0,0,0],
		["count",0,0,0],
		["radix",0,0,0]]
	],
	["reverse",[
		["bubble",0,0,0],
		["selection",0,0,0],
		["insertion",0,0,0],
		["merge",0,0,0],
		["quick",0,0,0],
		["quick3",0,0,0],
		["heap",0,0,0],
		["shell",0,0,0],
		["count",0,0,0],
		["radix",0,0,0]]
	],
	["nearlysorted",[
		["bubble",0,0,0],
		["selection",0,0,0],
		["insertion",0,0,0],
		["merge",0,0,0],
		["quick",0,0,0],
		["quick3",0,0,0],
		["heap",0,0,0],
		["shell",0,0,0],
		["count",0,0,0],
		["radix",0,0,0]]
	],
	["unique",[
		["bubble",0,0,0],
		["selection",0,0,0],
		["insertion",0,0,0],
		["merge",0,0,0],
		["quick",0,0,0],
		["quick3",0,0,0],
		["heap",0,0,0],
		["shell",0,0,0],
		["count",0,0,0],
		["radix",0,0,0]]
	],
];

var time = 0;
var swaps = 0;
var comparisons = 0;
var performance_count = [
	["bubble",0,0,0],
	["selection",0,0,0],
	["insertion",0,0,0],
	["merge",0,0,0],
	["quick",0,0,0],
	["quick3",0,0,0],
	["heap",0,0,0],
	["shell",0,0,0],
	["count",0,0,0],
	["radix",0,0,0]
];

function bubble( arr,  n) {
	time = performance.now();
	swaps = 0;
	comparisons = 0;
	for(let i=0;i<n-1;i++) {
		for(let j=0;j<n-i-1;j++) {
			comparisons++;
			if(arr[j]>arr[j+1]) {
				swaps++;
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	time = performance.now() - time;
	performance_count[0][1] =  comparisons;
	performance_count[0][2] =  swaps;
	performance_count[0][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	//console.log(time);
	
	return arr;
}


function selection(arr,n) {
	time = performance.now();
	swaps = 0;
	comparisons = 0;
	for(let i=0;i<n-1;i++) {
		let min = arr[i];
		let index = i;
		for(let j=i;j<n;j++) {
			comparisons++;
			if(arr[j]<min) {
				min = arr[j];
				index = j;
			}
		}
		swaps++;
		let temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
	time = performance.now() - time;
	performance_count[1][1] =  comparisons;
	performance_count[1][2] =  swaps;
	performance_count[1][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}


function insertion(arr, n) {
	time = performance.now();
	swaps = 0;
	comparisons = 0;
	for(let i=1;i<n;i++) {
		for(let j=i;j>0;j--) {
			comparisons++;
			if(arr[j]<arr[j-1]) {
				swaps++;
				let temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;

			}
		}
	}
	time = performance.now() - time;
	performance_count[2][1] =  comparisons;
	performance_count[2][2] =  swaps;
	performance_count[2][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}


function mergesort(arr,start,mid,end) {
	let n1 = mid-start+1;
	let n2 = end-mid;
	let l = [];
	let r = [];
	for(let i=0;i<n1;i++) 
		l[i] = arr[start+i];
	for(let i=0;i<n2;i++)
		r[i] = arr[mid+1+i];
		let i=0,j=0,k=start;
	while(i<n1&&j<n2) {
		if(l[i]>r[j]) {
			comparisons++;
			arr[k++] = r[j++];
		}
		else if(l[i]<=r[j]){
			arr[k++] = l[i++];
			comparisons++;
			comparisons++;
		} 
		else{
			comparisons++;
			comparisons++;
        }
        comparisons++;
	}
    comparisons++;
	while(i<n1){ 
        arr[k++] = l[i++];
        comparisons++;
    }
    comparisons++;
	while(j<n2){
        arr[k++] = r[j++];
        comparisons++;
    }
    comparisons++;
    return;
    
}


function merge(arr,start,end) {
    comparisons++;
	if(start<end) {
		let mid = Math.floor((start+end)/2);
		merge(arr,start,mid);
		merge(arr,mid+1,end);
        mergesort(arr,start,mid,end);
		return;
	}
    else
		return;
}

function mergeMain(arr){
	time = performance.now();
	var start = 0;
	var end = arr.length -1;
	comparisons = 0;
	swaps = 0;
	merge(arr, start, end);
	time = performance.now() - time;
	performance_count[3][1] =  comparisons;
	performance_count[3][2] =  swaps;
	performance_count[3][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}

function quick(arr,start,end) {
	let i = start,j = end,mid = Math.floor((start+end)/2);
	let pivot = arr[mid];
	while(i<=j) {
		while(arr[i]<pivot) {
			comparisons++;
			i++;
		}
		comparisons++;
		while(arr[j]>pivot) {
			comparisons++;
			j--;
		}
		comparisons++;
		if(i<=j) {
			swaps++;
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;j--;
		}
	}
	if(start<i-1)
		quick(arr,start,i-1);
	if(i<end)
		quick(arr,i,end);
	return;
}


function quickMain(arr){
	time = performance.now();
	comparisons = 0;
	swaps = 0;
	start = 0 ;
	end = arr.length -1 ;
	quick(arr,start,end);
	time = performance.now() - time;
	performance_count[4][1] =  comparisons;
	performance_count[4][2] =  swaps;
	performance_count[4][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}


function quick3(arr,start,end) {
	let i = end, j = end, high = start;
	let pivot = arr[start];
	while(high<=i) {
		if(arr[i]==pivot) {
			comparisons++;
			i--;
		}
		else if(arr[i]<pivot) {
			comparisons++;
			comparisons++;
			swaps++;
			let temp = arr[high];
			arr[high] = arr[i];
			arr[i] = temp;
			high++;
		}
		else {
			comparisons++;
			comparisons++;
			swaps++;
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i--;j--;
		}
	}
	if(start<high-1)
		quick3(arr,start,high-1);
	if(j+1<end)
		quick3(arr,j+1,end);
	return;
}

function quick3Main(arr){
	time = performance.now();
	comparisons = 0;
	swaps = 0;
	start = 0;
	end = arr.length - 1; 
	quick3(arr,start,end);
	time = performance.now() - time;
	performance_count[5][1] =  comparisons;
	performance_count[5][2] =  swaps;
	performance_count[5][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}

function heap(arr) {
	time = performance.now();
	comparisons = 0;
	swaps = 0;
	start = 0;
	end = arr.length -1 ;
	for(let i=end;i>0;i--) {
		for(let j=Math.floor((i-1)/2);j>=0;j--) {
			let left = 2*j+1;
			let right = 2*j+2;
			let big = left;
			if(right<=i && arr[right]>arr[left]) {
				big = right;
			}
			comparisons++;
			if(arr[j]<arr[big]) {
				let temp = arr[big];
				arr[big] = arr[j];
				arr[j] = temp;
			}
			comparisons++;
		}
		swaps++;
		let temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;
	}
	time = performance.now() - time;
	performance_count[6][1] =  comparisons;
	performance_count[6][2] =  swaps;
	performance_count[6][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}

function shell(arr,n) {
	time = performance.now();
	comparisons = 0;
	swaps = 0;
	for(let j=Math.floor(n/2);j>=1;j=Math.floor(j/2)) {
		for(let i=j;i<n;i++) {
			let h=i;
			for(let k=i-j;k>=0;k-=j) {
				comparisons++;
				if(arr[k]>arr[h]) {
					swaps++;
					let temp = arr[k];
					arr[k] = arr[h];
					arr[h] = temp;
					h=k;
				}
				else {
					break;
				}
			}
		}
	}
	time = performance.now() - time;
	performance_count[7][1] =  comparisons;
	performance_count[7][2] =  swaps;
	performance_count[7][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}

function countsort(a) {
	time = performance.now();
	comparisons = 0;
	swaps = 0;
	let minimum = a[0];
	let maximum = a[0];
	for(let i=0;i<a.length;i++) {
		if(a[i]<minimum)
			minimum = a[i];
		if(a[i]>maximum)
			maximum = a[i];
		comparisons++;
		comparisons++;
	}
	for(let i=0;i<a.length;i++) {
		a[i]-=minimum;
	}
	let bucket= [];
	bucket.length = (maximum - minimum + 1);
	for(let i = 0;i < bucket.length; i++){
		bucket[i] = 0;
	}
	for(let i=0;i<a.length;i++) {
		bucket[a[i]]++;
	}
	let index = 0;
	for(let i=0;i<bucket.length;i++) {
		if(bucket[i]==0) {
			continue;
		}
		for(let j=0;j<bucket[i];j++) {
			a[index++] = i+minimum;
		}
	}
	time = performance.now() - time;
	performance_count[8][1] =  comparisons;
	performance_count[8][2] =  swaps;
	performance_count[8][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return a;
}

function radix(arr,div) {
	let temp = [];
	temp.length = 10;
	for(let i = 0; i < temp.length ;i++ ){
		temp[i] = 0;
	}
	let op = new Array(arr.length);
	for(let i=0;i<arr.length;i++) {
		temp[(Math.floor(arr[i]/div))%10]++;
	}

	temp[0] = temp[0]-1;
	for(let i=1;i<10;i++) {
		temp[i] += temp[i-1];
	}
	for(let i=arr.length-1;i>=0;i--) {
		swaps++;
		let tempo = arr[i];
		let index = temp[(Math.floor(arr[i]/div))%10]--;
		op[index] = tempo;
	}
	for(let i=0;i<arr.length;i++) {
		arr[i] = op[i];
	}
}

function radixsort(arr) {
	time = performance.now();
	comparisons = 0;
	swaps = 0;
	let maximum = arr[0];
	let minimum = arr[0];
	for(let i=0;i<arr.length;i++) {
		if(arr[i]<minimum) {
			minimum = arr[i];
		}
		if(arr[i]>maximum) {
			maximum = arr[i];
		}
		comparisons++;
		comparisons++;
	}
	for(let i=0;i<arr.length;i++) {
		arr[i]-=minimum;
	}
	//console.log("maximum "+maximum+"\t"+"minimum: "+minimum);
	let length = (maximum-minimum).toString().length;
	//console.log(length);
	for(let i=0,div=1;i<length;i++,div*=10) {
		radix(arr,div);
	}
	for(let i = 0; i < arr.length; i++){
		arr[i] += minimum;
	}
	time = performance.now() - time;
	performance_count[9][1] =  comparisons;
	performance_count[9][2] =  swaps;
	performance_count[9][3] =  Math.floor(time*Math.pow(10,6))+" ns";
	return arr;
}	
function generateDateformat(date){
	return new Date(date.slice(0,4)+","+date.slice(5,7)+","+date.slice(8));
}
function generateRandomDate(start, end) { 
	start = new Date(start.slice(0,4)+","+start.slice(5,7)+","+start.slice(8));
    end = new Date(end.slice(0,4)+","+end.slice(5,7)+","+end.slice(8));
    // //console.log(start,end);
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // //console.log(date); 
    date = formatDate(date);
    return date;
}

function formatDate(date) {
    var month = '' + (date.getMonth()+1);
    var day = '' + date.getDate();
    var year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function getdata(){
	////console.log(document.getElementById('filearr').value);
}
function dataFormatter(inputDate){	
	let convertedDate = new Date(inputDate).toISOString();
	let parsedDate = convertedDate.slice(0,10);
	return parsedDate;
}


function sorting(){
	// document.getElementById("errorFile").innerHTML="";
	// document.getElementById("errorDatatype").innerHTML="";
	// document.getElementById("errorNoofelements").innerHTML="";
	// document.getElementById("errorMinval").innerHTML="";
	// document.getElementById("errorMaxval").innerHTML="";
	// document.getElementById("errorNearly").innerHTML="";
	// document.getElementById("errorDup").innerHTML="";
	// var regex = /^[0-9]+$/;
	// var regminmax = /^-?\d+$/;
	// var regfloatminmax = /^-?\d*\.?\d*$/;
	// var regfloat = /^-?\d*\.\d*$/;

	// let datatype = document.getElementById("datatype").value;
	// let nearlysortedpercent = parseInt(document.getElementById("nearlysortedpercent").value);
	// let duplicatepercent = parseInt(document.getElementById("duplicatepercent").value);
	
	// var arr = [];
	// var n = 0;

	// if(datatype=="Choose"){
	// 	document.getElementById("errorDatatype").innerHTML="Please choose valid data type!";
	// 	return;
	// }
	
	// if(!regex.test(document.getElementById("nearlysortedpercent").value)||isNaN(nearlysortedpercent)||nearlysortedpercent<0||nearlysortedpercent>100){
	// 	document.getElementById("errorNearly").innerHTML="Please enter valid percentage!";	
	// 	//console.log("invalid nearlysorted percent");
	// 	document.getElementById("errorNearly").style.color="red";
	// 	return;
	// }
	// if(!regex.test(document.getElementById("duplicatepercent").value)||isNaN(duplicatepercent)||duplicatepercent<0||duplicatepercent>100){
	// 	//document.getElementById("errorDup").innerHTML="Please enter valid percentage!";	
	// 	////console.log("invalid duplicate percent");
	// 	//document.getElementById("errorDup").style.color="red";
	// 	return;
	// }

	if(document.getElementById('file').value!=""){
		Papa.parse(document.getElementById('file').files[0],{
			download: false,
			header: false,
			complete: function(result){
				//console.log(result);
				arr = [];
				// //console.log(result.data.length);
				// //console.log(result.data[0].length);
				// //console.log(result.data[0]);
				//for(let j=0;j<result.data.length;j++){
					for(let i=0;i<result.data[0].length;i++){
						arr.push(result.data[0][i]);
					}
				
				if(datatype == "Integer"){
					for(let i = 0; i < arr.length;i++){
						if(regminmax.test(arr[i])){
							continue;
						}
						//document.getElementById("errorFile").innerText = "The datatype and contents in the file doesnt match !";
						return;
					}
				}
				else if(datatype == "Float"){
					for(let i = 0; i < arr.length;i++){
						if(regfloatminmax.test(arr[i])){
							continue;
						}
						//document.getElementById("errorFile").innerText = "The datatype and contents in the file doesnt match !";
						return;
					}
				}
				else if(datatype == "DateTime"){
					for(let i = 0; i < arr.length;i++){
						if(new Date(arr[i]) != "Invalid Date"){
							arr[i] = dataFormatter(arr[i]);
							continue;
						}
						//document.getElementById("errorFile").innerText = "The datatype and contents in the file doesnt match !";
						return;
					}
				}
				else if(datatype == "Character"){
					for(let i = 0; i < arr.length;i++){
						//console.log(arr[i].length)
						if(arr[i].length != 1){
							//document.getElementById("errorFile").innerText = "The datatype and contents in the file doesnt match !";
							return;
						}					
					}

				}
				//document.getElementById("filearr").innerText =arr;
				SortingCall()
			}
		});
		
	}else{
		SortingCall()

	}
	
	

	function SortingCall(){
		let minVal,maxVal;
		//console.log("filename "+document.getElementById("file").value);
		if(document.getElementById("file").value!=""){
			// while(document.getElementById("bool").innerText==""){};
			//console.log("after getting arr : "+document.getElementById("filearr").innerText);
			arr = document.getElementById("filearr").innerText.split(',');
		}
		n = arr.length;
		if(document.getElementById("filearr").innerText == ""){
			//console.log("work 0");
			n = parseInt(document.getElementById("noofelements").value);
			if(!regex.test(document.getElementById("noofelements").value)||isNaN(n)||n<=0){
				document.getElementById("errorNoofelements").innerHTML="Please enter valid array size!";	
				//console.log("invalid array size");
				return;
			}
			
		
			if(datatype=="Integer"||datatype=="String"||datatype =="Character"){
				minVal = parseInt(document.getElementById("minrange").value);
				maxVal = parseInt(document.getElementById("maxrange").value);		
			}
			else if(datatype=="Float"){
				minVal = parseFloat(document.getElementById("minrange").value);
				maxVal = parseFloat(document.getElementById("maxrange").value);
			}
			if(datatype=="DateTime"){
				minVal = document.getElementById("minrange").value;
				maxVal = document.getElementById("maxrange").value;
			}
			if(datatype=="Integer"){
				if(!regminmax.test(document.getElementById("minrange").value)||isNaN(minVal)||!Number.isInteger(minVal)){
					document.getElementById("errorMinval").innerHTML="Enter valid minimum value";
					return;
				}

				if(!regminmax.test(document.getElementById("maxrange").value)||isNaN(maxVal)||!Number.isInteger(maxVal)||maxVal<minVal){
					document.getElementById("errorMaxval").innerHTML="Enter valid maximum value";
					return;
				}
			}
			if(datatype=="Float"){
				if(!regfloatminmax.test(document.getElementById("minrange").value)||isNaN(minVal)){
					document.getElementById("errorMinval").innerHTML="Enter valid minimum value";
					return;
				}

				if(!regfloatminmax.test(document.getElementById("maxrange").value)||isNaN(maxVal)||maxVal<minVal){
					document.getElementById("errorMaxval").innerHTML="Enter valid maximum value";
					return;
				}
			}
			if(datatype=="String"){
				if(!regex.test(document.getElementById("minrange").value)||isNaN(minVal)||!Number.isInteger(minVal)||minVal<=0){
					document.getElementById("errorMinval").innerHTML="Enter valid minimum length";
					return;
				}

				if(!regex.test(document.getElementById("maxrange").value)||isNaN(maxVal)&&!Number.isInteger(maxVal)||maxVal<minVal){
					document.getElementById("errorMaxval").innerHTML="Enter valid maximum length";
					return;
				}
			}
			if(datatype=="DateTime"){
				if(!(minVal.length==10)||!(minVal.slice(4,5)=='-')||!(minVal.slice(7,8)=='-')||isNaN(parseInt(minVal.slice(0,4)))||isNaN(parseInt(minVal.slice(5,7)))||isNaN(parseInt(minVal.slice(8,10)))){
					document.getElementById("errorMinval").innerHTML="Enter valid format";
					//console.log("enter valid format");
					return;
				}
			
				if(!(maxVal.length==10)||!(maxVal.slice(4,5)=='-')||!(maxVal.slice(7,8)=='-')||isNaN(parseInt(maxVal.slice(0,4)))||isNaN(parseInt(maxVal.slice(5,7)))||isNaN(parseInt(maxVal.slice(8,10)))){
					document.getElementById("errorMaxval").innerHTML="Enter valid format";
					//console.log("enter valid format");
					return;
				}
				if(!(generateDateformat(maxVal).getTime()-generateDateformat(minVal).getTime()>0)){
					document.getElementById("errorMaxval").innerHTML="Please provide correct range";
					return;
				}
			}

			if(datatype == "Character"){
				if(minVal != "1"){
					document.getElementById("errorMinval").innerHTML="Character datatype min size should be 1 ";
					return;
				}
				if(maxVal != "1"){
					document.getElementById("errorMaxval").innerHTML="Character datatype max size should be 1 ";
					return;
				}
			}
		}
		//while(document.getElementById("bool").innerText  == ""){
		// else{
		// 	// while(document.getElementById("bool")==""){}
		// 	// //console.log("arr inside"+arr);
		// 	//console.log("work1");
		// 	if(regfloat.test(arr[0])&&!isNaN(arr[0])){
		// 		for(let i=0;i<arr.length;i++){
		// 			arr[i] = parseFloat(arr[i]);
		// 		}
		// 	}
		// 	else if(regminmax.test(arr[0])&&!isNaN(arr[0])){
		// 		for(let i=0;i<arr.length;i++){
		// 			arr[i] = parseInt(arr[i]);
		// 		}
		// 	}
		// }

		//console.log(n+" "+typeof(n)+"\t"+datatype+" "+typeof(datatype)+"\t"+minVal+" "+typeof(minVal)+"\t"+maxVal+" "+typeof(maxVal)+"\t"+nearlysortedpercent+" "+typeof(nearlysortedpercent)+"\t"+duplicatepercent+" "+typeof(duplicatepercent));
		
		let randomarr = [];
		let reversearr = [];
		let nearlysortedarr = [];
		let uniquearr = [];
		
		if(document.getElementById("filearr").innerText ==""){
			if(datatype=="Integer"){ 
				for(let i=0;i<n;i++) {
					let val = Math.floor(Math.random()*(maxVal-minVal)+minVal);
					arr[i] = val;
				}
			}
			else if(datatype=="Float"){
				for(let i=0;i<n;i++) {
					let val = Math.random()*(maxVal-minVal)+minVal;
					arr[i] = val;
				}
			}
			else if(datatype=="String"){
				for(let i=0;i<n;i++) {
					let val = Math.floor(Math.random()*(maxVal-minVal)+minVal);
					arr[i] = val;
				}
				for(let i=0;i<n;i++) {
					let val = "";
					let noofdigits = Math.floor(Math.random()*(maxVal-minVal)+minVal);
					for(let j=0;j<noofdigits;j++) {
						let digit = parseInt((Math.random()*25)+97);
						val+=String.fromCharCode(digit);
					}
					arr[i] = val;
				}
			}
			else if(datatype=="DateTime"){
				for(let i=0;i<n;i++) {
					let val = generateRandomDate(minVal,maxVal);
					arr[i] = val;
				}
			}
			else if(datatype == "Character"){
				for(let i=0;i<n;i++) {
					let val = "";
						let digit = parseInt((Math.random()*255));
						val+=String.fromCharCode(digit);				
					arr[i] = val;
				}

			}
		}
		temparr = [...arr];
		randomarr = [...arr];
		
		arr = arr.sort(function(a,b){return a-b}).reverse();

		reversearr = [...arr];
		
		let nearlyunsortedpercentInt = Math.floor(((100-nearlysortedpercent)/100.0)*n);
		let listInt = [];
		if(nearlyunsortedpercentInt%2==1)
			nearlyunsortedpercentInt--;
		for(let i=0;i<nearlyunsortedpercentInt;i+=2) {
			let bool1 = true;
			let bool2 = true;
			let rand1 = 0;
			let rand2 = 0;
			while(bool1) {
				rand1 = Math.floor(Math.random()*(n));
				if(!listInt.includes(rand1)) {
					listInt.push(rand1);
					bool1 = false;
				}
			}
			while(bool2) {
				rand2 =  Math.floor(Math.random()*(n));
				if(!listInt.includes(rand2)) {
					listInt.push(rand2);
					bool2 = false;
				}
			}
			let temp = arr[rand1];
			arr[rand1] = arr[rand2];
			arr[rand2] = temp;
		}

		nearlysortedarr = [...arr];

		uniquepercent = Math.ceil(((100-duplicatepercent)/100.0)*n);	
		data = "";
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
		for(let i=0;i<n;i++) {
			arr[i] = Number.MAX_SAFE_INTEGER;
		}
		let randindInt = [];
		for(let i=0;i<uniquepercent;i++) {
			while(true) {
				let randindex = Math.floor(Math.random()*(n-1));
				if(!randindInt.includes(randindex)) {
					randindInt.push(randindex);
					arr[randindex] = listuniqInt[i];
					break;
				}
			}
		}	
		for(let i=0,j=0;i<n;i++) {
			if(j==uniquepercent)
				j = 0;
			if(arr[i]==Number.MAX_SAFE_INTEGER) {
				arr[i] = listuniqInt[j++];
			}
		}
		uniquearr = [...arr];

		let n1 = n;
		// //console.log("safe here");
		let a = [...randomarr];
		//console.log("\nRandom numbers array sorting:\n"
						// + "-----------------------------\n");
		// //console.log("Before sorting:");
		// //console.log(a);
		bubble(a,n1);
		let outarr = [...a];
		//console.log("\n\nBubble sort:");
		//console.log(a);
		pc[0][1][0][1] = performance_count[0][1];
		pc[0][1][0][2] = performance_count[0][2];
		pc[0][1][0][3] = performance_count[0][3];
		//console.log("\nNo of comparisons: "+pc[0][1][0][1]+"\tNo of swaps: "+pc[0][1][0][2]+"\tRunTime: "+pc[0][1][0][3]);

		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		selection(a,n1);
		//console.log("\n\nSelection sort:");
		//console.log(a);
		pc[0][1][1][1] = performance_count[1][1];
		pc[0][1][1][2] = performance_count[1][2];
		pc[0][1][1][3] = performance_count[1][3];
		//console.log("\nNo of comparisons: "+pc[0][1][1][1]+"\tNo of swaps: "+pc[0][1][1][2]+"\tRunTime: "+pc[0][1][1][3]);

		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		insertion(a,n1);
		//console.log("\n\nInsertion sort:");
		//console.log(a);
		pc[0][1][2][1] = performance_count[2][1];
		pc[0][1][2][2] = performance_count[2][2];
		pc[0][1][2][3] = performance_count[2][3];
		//console.log("\nNo of comparisons: "+pc[0][1][2][1]+"\tNo of swaps: "+pc[0][1][2][2]+"\tRunTime: "+pc[0][1][2][3]);

		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		mergeMain(a,0,n1-1);
		//console.log("\n\nMerge sort:");
		//console.log(a);
		pc[0][1][3][1] = performance_count[3][1];
		pc[0][1][3][2] = performance_count[3][2];
		pc[0][1][3][3] = performance_count[3][3];
		//console.log("\nNo of comparisons: "+pc[0][1][3][1]+"\tNo of swaps: "+pc[0][1][3][2]+"\tRunTime: "+pc[0][1][3][3]);

		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quickMain(a,0,n1-1);
		//console.log("\n\nQuick sort:");
		//console.log(a);
		pc[0][1][4][1] = performance_count[4][1];
		pc[0][1][4][2] = performance_count[4][2];
		pc[0][1][4][3] = performance_count[4][3];
		//console.log("\nNo of comparisons: "+pc[0][1][4][1]+"\tNo of swaps: "+pc[0][1][4][2]+"\tRunTime: "+pc[0][1][4][3]);


		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quick3Main(a,0,n1-1);
		//console.log("\n\nQuick3 sort:");
		//console.log(a);
		pc[0][1][5][1] = performance_count[5][1];
		pc[0][1][5][2] = performance_count[5][2];
		pc[0][1][5][3] = performance_count[5][3];
		//console.log("\nNo of comparisons: "+pc[0][1][5][1]+"\tNo of swaps: "+pc[0][1][5][2]+"\tRunTime: "+pc[0][1][5][3]);

		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		heap(a,0,n1-1);
		//console.log("\n\nHeap sort:");
		//console.log(a);
		pc[0][1][6][1] = performance_count[6][1];
		pc[0][1][6][2] = performance_count[6][2];
		pc[0][1][6][3] = performance_count[6][3];
		//console.log("\nNo of comparisons: "+pc[0][1][6][1]+"\tNo of swaps: "+pc[0][1][6][2]+"\tRunTime: "+pc[0][1][6][3]);
		
		a = [...randomarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		shell(a,n1);
		//console.log("\n\nShell sort:");
		//console.log(a);
		pc[0][1][7][1] = performance_count[7][1];
		pc[0][1][7][2] = performance_count[7][2];
		pc[0][1][7][3] = performance_count[7][3];
		//console.log("\nNo of comparisons: "+pc[0][1][7][1]+"\tNo of swaps: "+pc[0][1][7][2]+"\tRunTime: "+pc[0][1][7][3]);

		if(datatype=="Integer"&&(!regfloat.test(temparr[0]))&&(!isNaN(temparr[0]))){
			a = [...randomarr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			countsort(a);
			//console.log("\n\nCount sort:");
			//console.log(a);
			pc[0][1][8][1] = performance_count[8][1];
			pc[0][1][8][2] = performance_count[8][2];
			pc[0][1][8][3] = performance_count[8][3];
			//console.log("\nNo of comparisons: "+pc[0][1][8][1]+"\tNo of swaps: "+pc[0][1][8][2]+"\tRunTime: "+pc[0][1][8][3]);
			
			a = [...randomarr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			a = radixsort(a);/////
			//console.log("\n\nRadix sort:");
			//console.log(a);
			pc[0][1][9][1] = performance_count[9][1];
			pc[0][1][9][2] = performance_count[9][2];
			pc[0][1][9][3] = performance_count[9][3];
			//console.log("\nNo of comparisons: "+pc[0][1][9][1]+"\tNo of swaps: "+pc[0][1][9][2]+"\tRunTime: "+pc[0][1][9][3]);
		}
		//console.log("\n--------------------------------------------\n");
						
		n1 = n;
		
		a = [...reversearr];
		//console.log("\n\nReverse numbers array sorting:\n"
							// + "------------------------------\n");
		//console.log("Before sorting:");
		//console.log(a);
		bubble(a,n1);
		//console.log("\n\nBubble sort:");
		//console.log(a);
		pc[1][1][0][1] = performance_count[0][1];
		pc[1][1][0][2] = performance_count[0][2];
		pc[1][1][0][3] = performance_count[0][3];
		//console.log("\nNo of comparisons: "+pc[1][1][0][1]+"\tNo of swaps: "+pc[1][1][0][2]+"\tRunTime: "+pc[1][1][0][3]);
		
		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		selection(a,n1);
		//console.log("\n\nSelection sort:");
		//console.log(a);
		pc[1][1][1][1] = performance_count[1][1];
		pc[1][1][1][2] = performance_count[1][2];
		pc[1][1][1][3] = performance_count[1][3];
		//console.log("\nNo of comparisons: "+pc[1][1][1][1]+"\tNo of swaps: "+pc[1][1][1][2]+"\tRunTime: "+pc[1][1][1][3]);
		
		
		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		insertion(a,n1);
		//console.log("\n\nInsertion sort:");
		//console.log(a);
		pc[1][1][2][1] = performance_count[2][1];
		pc[1][1][2][2] = performance_count[2][2];
		pc[1][1][2][3] = performance_count[2][3];
		//console.log("\nNo of comparisons: "+pc[1][1][2][1]+"\tNo of swaps: "+pc[1][1][2][2]+"\tRunTime: "+pc[1][1][2][3]);
		
		
		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		mergeMain(a,0,n1-1);
		//console.log("\n\nMerge sort:");
		//console.log(a);
		pc[1][1][3][1] = performance_count[3][1];
		pc[1][1][3][2] = performance_count[3][2];
		pc[1][1][3][3] = performance_count[3][3];
		//console.log("\nNo of comparisons: "+pc[1][1][3][1]+"\tNo of swaps: "+pc[1][1][3][2]+"\tRunTime: "+pc[1][1][3][3]);
		

		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quickMain(a,0,n1-1);
		//console.log("\n\nQuick sort:");
		//console.log(a);
		pc[1][1][4][1] = performance_count[4][1];
		pc[1][1][4][2] = performance_count[4][2];
		pc[1][1][4][3] = performance_count[4][3];
		//console.log("\nNo of comparisons: "+pc[1][1][4][1]+"\tNo of swaps: "+pc[1][1][4][2]+"\tRunTime: "+pc[1][1][4][3]);
		

		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quick3Main(a,0,n1-1);
		//console.log("\n\nQuick3 sort:");
		//console.log(a);
		pc[1][1][5][1] = performance_count[5][1];
		pc[1][1][5][2] = performance_count[5][2];
		pc[1][1][5][3] = performance_count[5][3];
		//console.log("\nNo of comparisons: "+pc[1][1][5][1]+"\tNo of swaps: "+pc[1][1][5][2]+"\tRunTime: "+pc[1][1][5][3]);
		

		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		heap(a,0,n1-1);
		//console.log("\n\nHeap sort:");
		//console.log(a);
		pc[1][1][6][1] = performance_count[6][1];
		pc[1][1][6][2] = performance_count[6][2];
		pc[1][1][6][3] = performance_count[6][3];
		//console.log("\nNo of comparisons: "+pc[1][1][6][1]+"\tNo of swaps: "+pc[1][1][6][2]+"\tRunTime: "+pc[1][1][6][3]);
		

		a = [...reversearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		shell(a,n1);
		//console.log("\n\nShell sort:");
		//console.log(a);
		pc[1][1][7][1] = performance_count[7][1];
		pc[1][1][7][2] = performance_count[7][2];
		pc[1][1][7][3] = performance_count[7][3];
		//console.log("\nNo of comparisons: "+pc[1][1][7][1]+"\tNo of swaps: "+pc[1][1][7][2]+"\tRunTime: "+pc[1][1][7][3]);
		
		if(datatype=="Integer"&&(!regfloat.test(temparr[0]))&&(!isNaN(temparr[0]))){
			a = [...reversearr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			countsort(a);
			//console.log("\n\nCount sort:");
			//console.log(a);
			pc[1][1][8][1] = performance_count[8][1];
			pc[1][1][8][2] = performance_count[8][2];
			pc[1][1][8][3] = performance_count[8][3];
			//console.log("\nNo of comparisons: "+pc[1][1][8][1]+"\tNo of swaps: "+pc[1][1][8][2]+"\tRunTime: "+pc[1][1][8][3]);
			

			a = [...reversearr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			a = radixsort(a);
			//console.log("\n\nRadix sort:");
			//console.log(a);
			pc[1][1][9][1] = performance_count[9][1];
			pc[1][1][9][2] = performance_count[9][2];
			pc[1][1][9][3] = performance_count[9][3];
			//console.log("\nNo of comparisons: "+pc[1][1][9][1]+"\tNo of swaps: "+pc[1][1][9][2]+"\tRunTime: "+pc[1][1][9][3]);
		}

		//console.log("\n--------------------------------------------\n");
		
		n1 = n;
		
		a = [...nearlysortedarr];
		//console.log("\n\nNearly sorted numbers array sorting:\n"
							// + "------------------------------------\n");
		//console.log("Before sorting:");
		//console.log(a);
		bubble(a,n1);
		//console.log("\n\nBubble sort:");
		//console.log(a);
		pc[2][1][0][1] = performance_count[0][1];
		pc[2][1][0][2] = performance_count[0][2];
		pc[2][1][0][3] = performance_count[0][3];
		//console.log("\nNo of comparisons: "+pc[2][1][0][1]+"\tNo of swaps: "+pc[2][1][0][2]+"\tRunTime: "+pc[2][1][0][3]);

		
		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		selection(a,n1);
		//console.log("\n\nSelection sort:");
		//console.log(a);
		pc[2][1][1][1] = performance_count[1][1];
		pc[2][1][1][2] = performance_count[1][2];
		pc[2][1][1][3] = performance_count[1][3];
		//console.log("\nNo of comparisons: "+pc[2][1][1][1]+"\tNo of swaps: "+pc[2][1][1][2]+"\tRunTime: "+pc[2][1][1][3]);

		
		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		insertion(a,n1);
		//console.log("\n\nInsertion sort:");
		//console.log(a);
		pc[2][1][2][1] = performance_count[2][1];
		pc[2][1][2][2] = performance_count[2][2];
		pc[2][1][2][3] = performance_count[2][3];
		//console.log("\nNo of comparisons: "+pc[2][1][2][1]+"\tNo of swaps: "+pc[2][1][2][2]+"\tRunTime: "+pc[2][1][2][3]);

		
		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		mergeMain(a,0,n1-1);
		//console.log("\n\nMerge sort:");
		//console.log(a);
		pc[2][1][3][1] = performance_count[3][1];
		pc[2][1][3][2] = performance_count[3][2];
		pc[2][1][3][3] = performance_count[3][3];
		//console.log("\nNo of comparisons: "+pc[2][1][3][1]+"\tNo of swaps: "+pc[2][1][3][2]+"\tRunTime: "+pc[2][1][3][3]);


		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quickMain(a,0,n1-1);
		//console.log("\n\nQuick sort:");
		//console.log(a);
		pc[2][1][4][1] = performance_count[4][1];
		pc[2][1][4][2] = performance_count[4][2];
		pc[2][1][4][3] = performance_count[4][3];
		//console.log("\nNo of comparisons: "+pc[2][1][4][1]+"\tNo of swaps: "+pc[2][1][4][2]+"\tRunTime: "+pc[2][1][4][3]);


		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quick3Main(a,0,n1-1);
		//console.log("\n\nQuick3 sort:");
		//console.log(a);
		pc[2][1][5][1] = performance_count[5][1];
		pc[2][1][5][2] = performance_count[5][2];
		pc[2][1][5][3] = performance_count[5][3];
		//console.log("\nNo of comparisons: "+pc[2][1][5][1]+"\tNo of swaps: "+pc[2][1][5][2]+"\tRunTime: "+pc[2][1][5][3]);

		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		heap(a,0,n1-1);
		//console.log("\n\nHeap sort:");
		//console.log(a);
		pc[2][1][6][1] = performance_count[6][1];
		pc[2][1][6][2] = performance_count[6][2];
		pc[2][1][6][3] = performance_count[6][3];
		//console.log("\nNo of comparisons: "+pc[2][1][6][1]+"\tNo of swaps: "+pc[2][1][6][2]+"\tRunTime: "+pc[2][1][6][3]);

		
		a = [...nearlysortedarr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		shell(a,n1);
		//console.log("\n\nShell sort:");
		//console.log(a);
		pc[2][1][7][1] = performance_count[7][1];
		pc[2][1][7][2] = performance_count[7][2];
		pc[2][1][7][3] = performance_count[7][3];
		//console.log("\nNo of comparisons: "+pc[2][1][7][1]+"\tNo of swaps: "+pc[2][1][7][2]+"\tRunTime: "+pc[2][1][7][3]);

		if(datatype=="Integer"&&(!regfloat.test(temparr[0]))&&(!isNaN(temparr[0]))){
			a = [...nearlysortedarr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			countsort(a);
			//console.log("\n\nCount sort:");
			//console.log(a);
			pc[2][1][8][1] = performance_count[8][1];
			pc[2][1][8][2] = performance_count[8][2];
			pc[2][1][8][3] = performance_count[8][3];
			//console.log("\nNo of comparisons: "+pc[2][1][8][1]+"\tNo of swaps: "+pc[2][1][8][2]+"\tRunTime: "+pc[2][1][8][3]);

			a = [...nearlysortedarr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			a = radixsort(a);
			//console.log("\n\nRadix sort:");
			//console.log(a);
			pc[2][1][9][1] = performance_count[9][1];
			pc[2][1][9][2] = performance_count[9][2];
			pc[2][1][9][3] = performance_count[9][3];
			//console.log("\nNo of comparisons: "+pc[2][1][9][1]+"\tNo of swaps: "+pc[2][1][9][2]+"\tRunTime: "+pc[2][1][9][3]);
		}


		//console.log("\n--------------------------------------------\n");
						
		n1 = n;

		a = [...uniquearr];
		//console.log("\n\nFew Unique numbers array sorting:\n"
							// + "---------------------------------\n");
		//console.log("Before sorting:");
		//console.log(a);
		bubble(a,n1);
		//console.log("\n\nBubble sort:");
		//console.log(a);
		pc[3][1][0][1] = performance_count[0][1];
		pc[3][1][0][2] = performance_count[0][2];
		pc[3][1][0][3] = performance_count[0][3];
		//console.log("\nNo of comparisons: "+pc[3][1][0][1]+"\tNo of swaps: "+pc[3][1][0][2]+"\tRunTime: "+pc[3][1][0][3]);


		
		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		selection(a,n1);
		//console.log("\n\nSelection sort:");
		//console.log(a);
		pc[3][1][1][1] = performance_count[1][1];
		pc[3][1][1][2] = performance_count[1][2];
		pc[3][1][1][3] = performance_count[1][3];
		//console.log("\nNo of comparisons: "+pc[3][1][1][1]+"\tNo of swaps: "+pc[3][1][1][2]+"\tRunTime: "+pc[3][1][1][3]);
		
		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		insertion(a,n1);
		//console.log("\n\nInsertion sort:");
		//console.log(a);
		pc[3][1][2][1] = performance_count[2][1];
		pc[3][1][2][2] = performance_count[2][2];
		pc[3][1][2][3] = performance_count[2][3];
		//console.log("\nNo of comparisons: "+pc[3][1][2][1]+"\tNo of swaps: "+pc[3][1][2][2]+"\tRunTime: "+pc[3][1][2][3]);
		
		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		mergeMain(a,0,n1-1);
		//console.log("\n\nMerge sort:");
		//console.log(a);
		pc[3][1][3][1] = performance_count[3][1];
		pc[3][1][3][2] = performance_count[3][2];
		pc[3][1][3][3] = performance_count[3][3];
		//console.log("\nNo of comparisons: "+pc[3][1][3][1]+"\tNo of swaps: "+pc[3][1][3][2]+"\tRunTime: "+pc[3][1][3][3]);
		
		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quickMain(a,0,n1-1);
		//console.log("\n\nQuick sort:");
		//console.log(a);
		pc[3][1][4][1] = performance_count[4][1];
		pc[3][1][4][2] = performance_count[4][2];
		pc[3][1][4][3] = performance_count[4][3];
		//console.log("\nNo of comparisons: "+pc[3][1][4][1]+"\tNo of swaps: "+pc[3][1][4][2]+"\tRunTime: "+pc[3][1][4][3]);

		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		quick3Main(a,0,n1-1);
		//console.log("\n\nQuick3 sort:");
		//console.log(a);
		pc[3][1][5][1] = performance_count[5][1];
		pc[3][1][5][2] = performance_count[5][2];
		pc[3][1][5][3] = performance_count[5][3];
		//console.log("\nNo of comparisons: "+pc[3][1][5][1]+"\tNo of swaps: "+pc[3][1][5][2]+"\tRunTime: "+pc[3][1][5][3]);

		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		heap(a,0,n1-1);
		//console.log("\n\nHeap sort:");
		//console.log(a);
		pc[3][1][6][1] = performance_count[6][1];
		pc[3][1][6][2] = performance_count[6][2];
		pc[3][1][6][3] = performance_count[6][3];
		//console.log("\nNo of comparisons: "+pc[3][1][6][1]+"\tNo of swaps: "+pc[3][1][6][2]+"\tRunTime: "+pc[3][1][6][3]);
		
		a = [...uniquearr];
		//console.log("\n--------------------------------------------\nBefore sorting:");
		//console.log(a);
		shell(a,n1);
		//console.log("\n\nShell sort:");
		//console.log(a);
		pc[3][1][7][1] = performance_count[7][1];
		pc[3][1][7][2] = performance_count[7][2];
		pc[3][1][7][3] = performance_count[7][3];
		//console.log("\nNo of comparisons: "+pc[3][1][7][1]+"\tNo of swaps: "+pc[3][1][7][2]+"\tRunTime: "+pc[3][1][7][3]);
		
		if(datatype=="Integer"&&(!regfloat.test(temparr[0]))&&(!isNaN(temparr[0]))){
			a = [...uniquearr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			countsort(a);
			//console.log("\n\nCount sort:");
			//console.log(a);
			pc[3][1][8][1] = performance_count[8][1];
			pc[3][1][8][2] = performance_count[8][2];
			pc[3][1][8][3] = performance_count[8][3];
			//console.log("\nNo of comparisons: "+pc[3][1][8][1]+"\tNo of swaps: "+pc[3][1][8][2]+"\tRunTime: "+pc[3][1][8][3]);
			
			a = [...uniquearr];
			//console.log("\n--------------------------------------------\nBefore sorting:");
			//console.log(a);
			a = radixsort(a);
			//console.log("\n\nRadix sort:");
			//console.log(a);
			pc[3][1][9][1] = performance_count[9][1];
			pc[3][1][9][2] = performance_count[9][2];
			pc[3][1][9][3] = performance_count[9][3];
			//console.log("\nNo of comparisons: "+pc[3][1][9][1]+"\tNo of swaps: "+pc[3][1][9][2]+"\tRunTime: "+pc[3][1][9][3]);
		}
		

		//console.log("\n--------------------------------------------\n");

		for(let j = 0; j < 4 ; j++){
			//console.log(pc[j][0]);
			//console.log("\n--------------------------------------------\n");
			//console.log("Sorting Type" + "\t" +" Comparisons" +"\t" + "Swaps" +"\t" + "Time Taken");
			//console.log("\n--------------------------------------------\n");
			for(let i=0;i<10;i++){
				//console.log(pc[j][1][i][0]+"\t\t\t\t"+pc[j][1][i][1]+"\t\t"+pc[j][1][i][2]+"\t\t"+pc[j][1][i][3]+"\n");
			}
		}
		if(datatype!="Integer"||(regfloat.test(temparr[0]))||(isNaN(temparr[0]))){
			pc[0][1][8][1] = 'NA';
			pc[0][1][8][2] = 'NA';
			pc[0][1][8][3] = 'NA';
			pc[0][1][9][1] = 'NA';
			pc[0][1][9][2] = 'NA';
			pc[0][1][9][3] = 'NA';

			pc[1][1][8][1] = 'NA';
			pc[1][1][8][2] = 'NA';
			pc[1][1][8][3] = 'NA';
			pc[1][1][9][1] = 'NA';
			pc[1][1][9][2] = 'NA';
			pc[1][1][9][3] = 'NA';
			
			pc[2][1][8][1] = 'NA';
			pc[2][1][8][2] = 'NA';
			pc[2][1][8][3] = 'NA';
			pc[2][1][9][1] = 'NA';
			pc[2][1][9][2] = 'NA';
			pc[2][1][9][3] = 'NA';
			
			pc[3][1][8][1] = 'NA';
			pc[3][1][8][2] = 'NA';
			pc[3][1][8][3] = 'NA';
			pc[3][1][9][1] = 'NA';
			pc[3][1][9][2] = 'NA';
			pc[3][1][9][3] = 'NA';
		}
		//console.log(arr,randomarr,reversearr,nearlysortedarr,uniquearr);
		// var arrdata = randomarr.toString();
		// document.getElementById("inputdata").style.display="block";
		// document.getElementById("outputdata").style.display="block";
		// var outarr = randomarr.sort().toString();
		//console.log("output arrrrrrrrrrr: "+outarr);
		// if(arr.length<=20){
		// 	document.getElementById("inputarr").innerText=arrdata;
		// 	document.getElementById("outputarr").innerText=outarr;
		// 	document.getElementById("resultarr").innerText=arrdata;
		// 	document.getElementById("resultoutarr").innerText=outarr;
		// }
		// else{
		// 	document.getElementById("inputarr").innerText=arr.slice(0,20)+".....";
		// 	document.getElementById("outputarr").innerText=outarr.slice(0,20)+".....";
		// 	document.getElementById("resultarr").innerText=arrdata;
		// 	document.getElementById("resultoutarr").innerText=outarr;
		// }
		var table1 = "<table>";
		// table1+="<tr><th>"+pc[0][0]+"</th></tr>";
		table1+="<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
		for(let i=0;i<10;i++){
			table1+="<tr><td><a href='"+pc[0][1][i][0]+".html' target='_blank'>"+pc[0][1][i][0]+"</a></td><td>"+pc[0][1][i][1]+"</td><td>"+pc[0][1][i][2]+"</td><td>"+pc[0][1][i][3]+"</td></tr>";
		}
		table1 += "</table>";

		var table2 = "<table>";
		// table2+="<tr><th>"+pc[1][0]+"</th></tr>";
		table2+="<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
		for(let i=0;i<10;i++){
			table2+="<tr><td>"+pc[1][1][i][0]+"</td><td>"+pc[1][1][i][1]+"</td><td>"+pc[1][1][i][2]+"</td><td>"+pc[1][1][i][3]+"</td></tr>";
		}
		table2+= "</table>";
		
		var table3 = "<table>";
		// table3+="<tr><th>"+pc[2][0]+"</th></tr>";
		table3+="<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
		for(let i=0;i<10;i++){
			table3+="<tr><td>"+pc[2][1][i][0]+"</td><td>"+pc[2][1][i][1]+"</td><td>"+pc[2][1][i][2]+"</td><td>"+pc[2][1][i][3]+"</td></tr>";
		}
		table3+= "</table>";
		
		var table4 = "<table>";
		// table4+="<tr><th>"+pc[3][0]+"</th></tr>";
		table4+="<tr><th>Sorting Type</th><th>Comparisons</th><th>Swaps</th><th>Time Taken</th></tr>";
		for(let i=0;i<10;i++){
			table4+="<tr><td>"+pc[3][1][i][0]+"</td><td>"+pc[3][1][i][1]+"</td><td>"+pc[3][1][i][2]+"</td><td>"+pc[3][1][i][3]+"</td></tr>";
		}
		table4+= "</table>";

		// document.getElementById("table1").innerHTML = table1;
		// document.getElementById("table2").innerHTML = table2;
		// document.getElementById("table3").innerHTML = table3;
		// document.getElementById("table4").innerHTML = table4;
		
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

		//console.log(pc);
		for(let i=0;i<10;i++){	// 1982320 ns
			timetakenrandom[i] = parseInt(pc[0][1][i][3].slice(0,-3))/1000;
			timetakenreverse[i] = parseInt(pc[1][1][i][3].slice(0,-3))/1000;
			timetakennearlysorted[i] = parseInt(pc[2][1][i][3].slice(0,-3))/1000;
			timetakenunique[i] = parseInt(pc[3][1][i][3].slice(0,-3))/1000;
			
			comptakenrandom[i] = pc[0][1][i][1];
			comptakenreverse[i] = pc[1][1][i][1];
			comptakennearlysorted[i] = pc[2][1][i][1];
			comptakenunique[i] = pc[3][1][i][1];
			
			swapstakenrandom[i] = pc[0][1][i][2];
			swapstakenreverse[i] = pc[1][1][i][2];
			swapstakennearlysorted[i] = pc[2][1][i][2];
			swapstakenunique[i] = pc[3][1][i][2];
		}
		// document.getElementById("graph").style.display="block";
		// document.getElementById("data").innerHTML = timetakenrandom;
		// document.getElementById("timerandom").innerHTML = timetakenrandom;
		// document.getElementById("timereverse").innerHTML = timetakenreverse;
		// document.getElementById("timenearlysorted").innerHTML = timetakennearlysorted;
		// document.getElementById("timeunique").innerHTML = timetakenunique;

		// document.getElementById("comparisons").innerHTML = comptakenrandom;
		// document.getElementById("comprandom").innerHTML = comptakenrandom;
		// document.getElementById("compreverse").innerHTML = comptakenreverse;
		// document.getElementById("compnearlysorted").innerHTML = comptakennearlysorted;
		// document.getElementById("compunique").innerHTML = comptakenunique;

		// document.getElementById("swaps").innerHTML = swapstakenrandom;
		// document.getElementById("swapsrandom").innerHTML = swapstakenrandom;
		// document.getElementById("swapsreverse").innerHTML = swapstakenreverse;
		// document.getElementById("swapsnearlysorted").innerHTML = swapstakennearlysorted;
		// document.getElementById("swapsunique").innerHTML = swapstakenunique;
		graph();
	}

}


//     function drawTable() {
//         var div1 = document.getElementById('outputdata');
//  		var tbl = document.createElement("table");
//  		for (var j=0; j < 4; j++) {
// 			var row = document.createElement("tr");
// 			var cell = document.createElement("th");
// 			var cellText = document.createTextNode(pc[j][0])
// 			cell.appendChild(cellText);
// 			row.appendChild(cell);
// 			tbl.appendChild(row);

// 			row = document.createElement("tr");
// 			cell = document.createElement("th");
// 			cellText = document.createTextNode("Sorting Type");
// 			cell.appendChild(cellText);
// 			row.appendChild(cell);
// 			cell = document.createElement("th");
// 			cellText = document.createTextNode("Comparisons");
// 			cell.appendChild(cellText);
// 			row.appendChild(cell);
// 			cell = document.createElement("th");
// 			cellText = document.createTextNode("Swaps");
// 			cell.appendChild(cellText);
// 			row.appendChild(cell);
// 			cell = document.createElement("th");
// 			cellText = document.createTextNode("TimeTaken (ns)");
// 			cell.appendChild(cellText);
// 			row.appendChild(cell);
// 			tbl.appendChild(row);
// 			for (var i = 0; i < 10; i++) {
// 				row = document.createElement("tr");
// 				cell = document.createElement("td");
// 				cellText = document.createTextNode(pc[j][1][i][0]);
// 				cell.appendChild(cellText);
// 				row.appendChild(cell);
// 				cell = document.createElement("td");
// 				cellText = document.createTextNode(pc[j][1][i][1]);
// 				cell.appendChild(cellText);
// 				cell = document.createElement("td");
// 				cellText = document.createTextNode(pc[j][1][i][2]);
// 				cell.appendChild(cellText);
// 				cell = document.createElement("td");
// 				cellText = document.createTextNode(pc[j][1][i][3]);
// 				cell.appendChild(cellText);
// 				row.appendChild(cell);                     
// 				tbl.appendChild(row); // add the row to the end of the table body
// 			}
// 		}
//     	div1.appendChild(tbl); // appends <table> into <div1>
// 	}
// drawTable(); 
//}