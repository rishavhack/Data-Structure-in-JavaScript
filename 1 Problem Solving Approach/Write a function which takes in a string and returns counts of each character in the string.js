
function charCount(str){
    str = str.toLowerCase();
    var obj = {};
    for (let i = 0; i < str.length; i++)
    {
              if(obj.hasOwnProperty(str[i])){
                   obj[str[i]] += 1 
               }
               else{
                   obj[str[i]] = 1
               }
     
    }
    return obj;
}

function charCount(str){
	var obj ={};
	for (var i =0;i<str.length;i++)
	{
		var char = str[i].toLowerCase();
		if(/[a-z0-9]/.test(char))
		{
			if(obj[char] > 0)
			{
				obj[char]++;
			}
			else
			{
				obj[char] = 1;
			}
		}
	}
}
function charCount(str){
	var obj ={};
	for (var char of str)
	{
		var char = char.toLowerCase();
		if(/[a-z0-9]/.test(char))
		{
			if(obj[char] > 0)
			{
				obj[char]++;
			}
			else
			{
				obj[char] = 1;
			}
		}
	}
}
function charCount(str){
	var obj ={};
	for (var char of str)
	{
		var char = char.toLowerCase();
		if(/[a-z0-9]/.test(char))
		{
			obj[char] = ++obj[char] || 1; 

		}
	}
}
console.log(charCount("aaaa"));
/*{
	a:4
}*/
console.log(charCount("hello"));
/*{
	h:1,
	e:1,
	l:2,
	o:1
}
*/
console.log(charCount("Your PIN number is 1234!"));
/*{
	1:1,
	2:2,
	3:1,
	4:1,
	b:1,
	e:1,
	i:2,
	m:1,
	n:2,
	o:1,
	p:1,
	r:2,
	s:1,
	u:2,
	y:1
}*/
