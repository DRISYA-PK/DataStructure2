function quicksort(Array)
{
    if(Array.length<=1) return Array;

    let left=[],right=[];
    let pivot=Array[0];
    for(let i=1;i<Array.length;i++)
    {
        if(Array[i]<pivot)
            left.push(Array[i]);
        else
            right.push(Array[i]);
    }

return [...quicksort(left),pivot,...quicksort(right)]
}


console.log(quicksort([4,5,3,4,1,2]))