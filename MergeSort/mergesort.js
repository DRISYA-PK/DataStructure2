function mergeSort(array)
{
    if(array.length<=1) return array;

    let mid=Math.floor(array.length/2);
    let left=mergeSort(array.slice(0,mid));
    let right=mergeSort(array.slice(mid))
    return merge(left,right)
}
function merge(left,right)
{
    let sortedarray=[];
    let i=0,j=0;
    while(i<left.length && j<right.length)
    {
        if(left[i]<right[j])
        {
            sortedarray.push(left[i])
            i++
        }
        else
        {
            sortedarray.push(right[j])
            j++
        }
    }
    return [...sortedarray,...left.slice(i),...right.slice(j)]
}


console.log(mergeSort([7,5,3,11,355,1]))