function collectOddValues(arr){
    let result = [];
    function helper(helparr){
        if(helparr.length == 0 ){
            return;
        }
        if(helparr[0] % 2 !== 0)
        {
            result.push(helparr[0])
        }
        helper(helparr.slice(1))
    }
    helper(arr)
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8]))