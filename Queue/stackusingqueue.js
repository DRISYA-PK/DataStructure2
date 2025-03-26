class StackUsingQueue{
    constructor()
    {
        this.stack=[];
    }
    enqueue(value)
    {
        this.stack.push(value);
    }
    dequeue()
    {
        let queue=[];
        while(this.stack.length>0)
        {
            queue.push(this.stack.shift())
        }
        let v= queue.shift();
      //  console.log(queue)
        while(queue.length>0)
            {
                this.stack.push(queue.shift())
            }
            return v;
    }
    print()
    {
        console.log(this.stack)
    }
}


let stack=new StackUsingQueue();
stack.enqueue(100);
stack.enqueue(340);
stack.enqueue(34);
stack.enqueue(12);
stack.print()
console.log(stack.dequeue())