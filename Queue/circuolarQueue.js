class CircularQueue{
    constructor(size)
    {
        this.queue=new Array(size);
        this.size=size;
        this.rear=-1;
        this.front=-1;

    }
    enqueue(element)
    {
        if((this.rear+1)%this.size===this.front)
        {
            return "queue is full";
        }
      
        if(this.front===-1)
        {
            this.front=this.rear=0;
        }
        else{
        this.rear=(this.rear+1)%this.size;
        }
        this.queue[this.rear]=element;
        
    }
    dequeue()
    {
        if(this.front===-1)
        {
            return "queue is empty"
        }
        if(this.front===this.rear)
        {
            this.front=this.rear=-1;
        }
        else{
            this.front=(this.front+1)%this.size;
        }
    }
    print()
    {
        let newQueue=[];
        let i=this.front;
        while(true)
        {
           newQueue.push(this.queue[i])
           if(i===this.rear) break;
           i=(i+1)%this.size
        }
        console.log(newQueue)
    }
}


    const queue=new  CircularQueue(5);
    queue.enqueue(1340);
    queue.enqueue(140);
    queue.enqueue(1240);
    queue.enqueue(1430);
    queue.enqueue(104);
 console.log( queue.enqueue(1204));
    queue.enqueue(10214);
    queue.print();
queue.dequeue();
queue.print();