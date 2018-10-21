function navieStringSearch(fullString,str){
    var arr =[];
    for(var i = 0;i<fullString.length - str.length + 1;i++)
    {
        console.log(fullString.substring(i,i+str.length))
        if(fullString.substring(i,i+str.length) == str)
        {
            arr.push(i)
        }
    }
    return arr
}
console.log(navieStringSearch("lorie loledlol","lol"));

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")