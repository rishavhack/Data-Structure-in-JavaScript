function factorial(num){
    let total = 1;
    for(var i = num; i>0; i--)
    {
        total *= i
    }
    return total
}
console.log(factorial(5))