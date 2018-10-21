/*This is worng Beacuse value is not present 
then it comes in infinit loop
*/
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
console.log(binarySeatch([2,6,7,8,17,18,22,28,45,88,89,100],88));