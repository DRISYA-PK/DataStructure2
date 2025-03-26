class StackIntoQueue{
    constructor()
    {
        this.stack1=[];
        this.stack2=[];
    }
    push(elements)
    {
        this.stack1.push(elements);
    }
    pop()
    {
        if(this.stack1.length===0 )
        {
            return "Invalid";
        }
        while(this.stack1.length>0)
        {
            this.stack2.push(this.stack1.pop());
        }
        let popvalue=this.stack2.pop();
        while(this.stack2.length>0)
            {
                this.stack1.push(this.stack2.pop());
            }
            return popvalue;
        
    }
    print()
    {
        console.log(this.stack1.join(' '))
    }
}

const stack=new StackIntoQueue();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print();
console.log(stack.pop());

stack.print();