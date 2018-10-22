function fibonacci(num){
   var arr = [0,1];
   for(var i = 1;arr[arr.length-1]<num;i++)
   {
       arr.push(arr[i]+arr[i-1])
   }
   return arr
}
console.log(fibonacci(8));