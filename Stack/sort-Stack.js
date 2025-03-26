function sort(stack)
{
  let tempstack=[];
  while(stack.length>0)
  {
    let pop=stack.pop();
    while(tempstack.length>0 && tempstack[tempstack.length-1]>pop)
        {
            stack.push(tempstack.pop())
        }  
        tempstack.push(   pop);
    
  }
  return tempstack;
}



console.log(sort([4,3,2,5,6]))


