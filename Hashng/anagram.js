function anagram(string1,string2)
{
 let hashTable=new Map();

 for(let char of string1)
 {
    hashTable.set(char,(hashTable.get(char)||0)+1)
 }
 for(let char of string2)
 {
    if(!hashTable.has(char)) return false;
    hashTable.set(char,hashTable.get(char)-1);
    if(hashTable.get(char)===0) hashTable.delete(char)
 }
return true;
}

console.log(anagram("hello","ollhe"))
console.log(anagram("oooooppp","oooooooppppppp"))