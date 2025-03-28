function quickSort(array)
{
    let swaped=false;
    for(let i=0;i<array.length;i++)
    {
        for(j=0;j<array.length-1-i;j++)
        {
            if(array[j]>array[j+1])
            {
                [array[j],array[j+1]]=[array[j+1],array[j]];
                swaped=true;
            }
        }
        if(!swaped) return array;
    }
  
    return array;
}

console.log(quickSort([2,4,1,3,55,6,223,9]));