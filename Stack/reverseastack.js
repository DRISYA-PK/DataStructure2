function Reverse(stack)
{
    let stack1=[];
    
    while(stack.length>0)
    {
        stack1.push(stack.pop())
       // i--
    }
    console.log(stack1.join(' '));
}

Reverse([1,2,3,4,5,6,7])