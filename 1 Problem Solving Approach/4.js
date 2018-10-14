/*Write a function called sumZero 
which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both 
values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))*/

function sumZero(arr){
	for (var i = 0; i<arr.length;i++)
	{
		for(var j = i+1;j<arr.length;j++)
		
		{
			if(arr[i]+arr[j] == 0)
			{
				return [arr[i],arr[j]];
			}
		}
	}
}
function sumZero(arr){
    let first = 0;
    let lastIndex = arr.length - 1;
      while(first<lastIndex)
      {
          let sum = arr[first] + arr[lastIndex]
          if(sum == 0)
          {
              return [arr[first],arr[lastIndex]]
          }
          else if(sum>0)
          {
              lastIndex --
          }
          else
          {
              first++
          }
      }
}