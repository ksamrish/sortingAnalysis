function mergesort(arr,start,mid,end) {
	let n1 = mid-start+1;
	let n2 = end-mid;
	let l = [];
	let r = [];
	for(let i=0;i<n1;i++){
		l[i] = arr[start+i];
	}		
	for(let i=0;i<n2;i++){
		r[i] = arr[mid+1+i];
	}
		
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
	}
	while(i<n1){ 
		arr[k++] = l[i++];
	}
	while(j<n2){
		arr[k++] = r[j++];
	}
	return;
}


function merge(arr,start,end) {
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
	var start = 0;
	var end = arr.length -1;
	comparisons = 0;
	swaps = 0;
	merge(arr, start, end);
	return arr;
}