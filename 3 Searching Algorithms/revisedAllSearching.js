function linearSearch(arr,val) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == val) return i
	}
	return -1
}
function binarySeatch(arr,val){
    var left = 0;
    var right = arr.length - 1;
    var mid = Math.floor((left+right)/2);
    while(arr[mid] != val && left <= right){
        if(val < arr[mid])
        {
            right = mid -1
        }
        else{
            left = mid +1
        }
        mid = Math.floor((left+right)/2);
    }
    if(arr[mid] == val)
    {
         return mid
    }
    return -1
}

function selectionSort(arr){
	for(var i = 0; i < arr.length;i++){
	    var min = i
	    for(j = i+1;j<arr.length;j++){
	        if(arr[min] > arr[j]){
	            min = j
	        }
	    }
	    if(i != min){
	        var temp = arr[i];
	        arr[i] = arr[min];
	        arr[min] = temp
	    }
	    return arr;
	}
}