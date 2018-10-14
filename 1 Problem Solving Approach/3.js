/*Given two strings, write a function to determine if
 the second string is an anagram of the first. 
 An anagram is a word, phrase, or name formed by
  rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true*/

function validAnagram(first,second)
{
    if(first.length !== second.length)
    {
        return false;
    }
    const lookup={};
    for (let i = 0;i<first.length;i++)
    {
        lookup[first[i]] ? lookup[first[i]] += 1 : lookup[first[i]] = 1;
    }
    for(let i = 0;i<second.length;i++)
    {
        if(!lookup[second[i]])
        {
            return false
        }
        else{
            lookup[second[i]] -= 1;
        }
    }
    return true;
}