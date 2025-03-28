
//3 2 1 
function reverse(stack)
{
    if(stack.length==0) return;
    let poped=stack.pop();
    reverse(stack);
    r(stack,poped)
    return stack

}
function r(stack,po)
{
    if(stack.length===0) {
        stack.push(po)
        return;
    }
    else
    {
    let p=stack.pop();
    r(stack,po)
    stack.push(p)
    }

}


let stack = [1,4,2,3,55];  
console.log(reverse(stack));               // Reverse the stack in place
//console.log(stack);   
