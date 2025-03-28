function insertionSort(array)
{
    for(let i=1;i<array.length;i++)
    {
        let key =array[i];
        let j=i-1;
        while(j>=0&& array[j]>key)
        {
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=key
    }
    console.log(array);
}
insertionSort([8,3,4,2,31,445,99])