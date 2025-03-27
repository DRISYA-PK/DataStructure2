function LeastOccured(arr)
{
    let hashTable=new Map();
    for(values of arr)
    {
        hashTable.set(values,(hashTable.get(values)||0)+1);
    }
   // console.log(hashTable)
    let min=Infinity;
    let key1='';
    for(let [key,value] of hashTable)
    {
     // console.log("d0",key,value)
        if(value<min)
        {
           // console.log(value)
            min=value;
            key1=key;
        }
    }
    console.log("least occured",key1)
}
 LeastOccured([1,2,1,3,1,2,3,4,5,5,6,6,4,8,8,9,9,9,10])