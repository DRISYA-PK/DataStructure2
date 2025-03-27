class queue{
    constructor(size)
    {
        this.size=size;
        this.queue=new Array(size);
        this.rear=-1;
        this.front=-1;

    }
    enqueueAtrear(value)
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
        this.queue[this.rear]=value;
    }
    enqueueAtFront(value)
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
            this.front=(this.front-1+this.size)%this.size;
        }
        this.queue[this.front]=value;
    }
    dequeAtFront()
    { if(this.front===-1)
        {
           return "no element";
        }
        if(this.rear===this.front)
        {
            this.rear=this.front=-1;

        }
        this.front=(this.front+1)%this.size;

    }
    dequeAtRear()
    { if(this.front===-1)
        {
           return "no element";
        }
        if(this.rear===this.front)
        {
            this.rear=this.front=-1;

        }
        this.rear=(this.rear-1+this.size)%this.size;

    }
    print()
    {

       


        let i=this.front;
        let queue1=[];
       while(true)
       {
        
                queue1.push(this.queue[i])
                if(i===this.rear)break;
        i=(i+1)%this.size;
       }
       console.log(queue1);
    }
}
const queue1=new queue(15);
queue1.enqueueAtrear(50);
queue1.enqueueAtrear(60);
queue1.enqueueAtrear(70);
queue1.enqueueAtrear(80);
queue1.print();

queue1.enqueueAtFront(40);

queue1.enqueueAtFront(30);

queue1.enqueueAtFront(20);
queue1.enqueueAtFront(10);
queue1.print();
queue1.dequeAtFront();
queue1.print();
queue1.dequeAtRear();
queue1.print();
