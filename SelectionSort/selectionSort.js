function selectionSort(array)
{
  
    for(let i=0;i<array.length-1;i++)
    {
       let min=i;
       for(j=i+1;j<array.length;j++)
       {
            if(array[j]<array[min])
            {
                min=j;
            }
       }
       if(min!==i)
       {
        [array[min],array[i]]=[array[i],array[min]]
       }
    }
    return array;
}

console.log(selectionSort([10,25,4,58]))