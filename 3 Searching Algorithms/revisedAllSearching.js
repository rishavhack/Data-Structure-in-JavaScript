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