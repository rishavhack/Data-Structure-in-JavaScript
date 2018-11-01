function myGetDigit(num,i){
    return String(num).split('').reverse()[i]  ?  parseInt(String(num).split('').reverse()[i]) : 0
}
function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}
function myDigitCount(num){
    return String(num).split('').length
}
function digitCount(num){
    if(num === 0)  {
    	return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1; 
}
function mostDigits(nums){
	let maxDigits = 0;
	for(let i =0; i < nums.length;i++)
	{
		maxDigits = Math.max(maxDigits,digitCount(num[i]))
	}
	return maxDigits;
}