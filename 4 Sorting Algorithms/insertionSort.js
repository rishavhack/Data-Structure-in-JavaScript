function insertionSort(arr){
   if(arr.length == 0)
   {
       return;
   }else{
       for(var i = 1;i < arr.length;i++)
       {
           var min = i;
           for(var j = i; j>=0;j--)
           {
               if(arr[min]<arr[j]){
                   var temp  = arr[min];
                   arr[min] = arr[j];
                   arr[j] = temp;
                   min--;
               }
           }
       }
   }
   return arr
}
console.log(insertionSort([7,4,8,3,9,88]));