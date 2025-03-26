class Queue{
    constructor()
    {
        this.queue=[];
    }
    enqueue(element)
    {
        this.queue.push(element)
    }
    dequeue()
    {
        if(this.queue.length===0)
        {
            return "empty queue";
        }
        this.queue.shift();
    }
    print()
    {
        console.log(this.queue);
    }
}

const queue=new Queue();
queue.enqueue("10");
queue.enqueue("22");
queue.enqueue("32");
queue.enqueue("12");
queue.enqueue("140");
queue.enqueue("1430");
queue.print()
queue.dequeue();
queue.print();
