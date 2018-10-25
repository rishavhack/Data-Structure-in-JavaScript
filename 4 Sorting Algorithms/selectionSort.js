function selectionSort(arr){
   if(arr.length == 0)
   {
       return;
   }else{
       for(var i = 0;i < arr.length;i++)
       {
           for(var j = i+1; j<arr.length;j++)
           {
               if(arr[i]>arr[j])
               {
                   var temp = arr[i];
                   arr[i] = arr[j];
                   arr[j] = temp;

               }
           }
       }
   }
   return arr
}
console.log(selectionSort([7,4,8,3,9,88]));