function reverseString(string)
{
 let stack=[];
 let reverseString="";
for (const element of string) {
    stack.push(element)
}
while(stack.length>0)
{
    reverseString+=stack.pop();
}
return reverseString;
}


console.log(reverseString("meena"))

