class QueueUsingStack{
    constructor()
    {
        this.stack1=[];
       // this.stack2=[];
    }
    push(element)
    {
        this.stack1.push(element);
    }
    pop()
    {
        let stack2=[];
        while(this.stack1.length>0)
        {
            stack2.push(this.stack1.pop())
        }
        let popedValue=stack2.pop();
        while(stack2.length>0)
            {
                this.stack1.push(stack2.pop())
            }
        console.log(popedValue);
    }
    display()
    {
        console.log(this.stack1)
    }

}
const queueStack =new QueueUsingStack();
queueStack.push(34)
queueStack.push(24)
queueStack.push(84)
queueStack.push(94)
queueStack.push(54)
queueStack.display();
queueStack.pop();
console.log("-------------after pop")
queueStack.display();