function duplicate(string)
{
    let hashTable=new Map();

    for(char of string)
    {
      
        if(hashTable.has(char))
        {
            console.log(hashTable)
            return true;
        }
       hashTable.set(char,char)
        
    }
    return false;
}
console.log(duplicate("hellow"));
console.log(duplicate("hai"))