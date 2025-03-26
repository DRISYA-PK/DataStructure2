function addReverse(stack,popitem)
{
    if(stack.length===0)
    {
        stack.push(popitem);
    }
    else
    {
        let temp=stack.pop();
        addReverse(stack,popitem)
        stack.push(temp);
    }
}

function reverse(stack)
{
    if(stack.length===0)
    {
        return ;
    }
    let popitem=stack.pop();
        reverse(stack);
        addReverse(stack,popitem)
return stack;
   
}

let stack=[1,2,3,4,5,6];
console.log(reverse(stack))
console.log(stack)
