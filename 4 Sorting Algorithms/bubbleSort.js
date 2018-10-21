function bubbleSort(arr){
    for(var i = 0;i < arr.length;i++)
    {
        for(j = 0;j< arr.length - i - 1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
         }
    }
    return arr
}

function bubbleSort(arr){
    for(var i = arr.length;i>0;i--)
    {
        for(var j = 0 ;j <i -1;j++)
        {
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1,3,7,5]))