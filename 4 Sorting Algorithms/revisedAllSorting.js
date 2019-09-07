function bubbleSort(arr) {
	for (var i = arr.length; i > 0; i--) {
		for(var j = 0; j < i - 1; j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp
			}
		}
	}
	return arr
}

function insertionSort(arr){
	for(var i = 1; i< arr.length;i++){
		var currentVal = arr[i]
		for(var j = i-1; j>=0 && arr[j] > currentVal;j--){
			arr[j+1] = arr[j]
		}
		arr[j+1] = currentVal;
	}
	return arr
}