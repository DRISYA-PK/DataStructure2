 class linkedList{
    constructor(value)
    {
        this.value=value;
        this.next=null
    }
 }
 class queue{
    constructor()
    {
        this.top=null,
        this.rear=null;
        this.count=0;
    }
    enqueue(value)
    {
        let node=new linkedList(value)
        if(this.count===0)
        {
            this.top=this.rear=node;
        }
        else
        {
           this.rear.next=node;
        this.rear=node;
        }
        this.count++;

    }
    dequeue()
    {
        if(this.count===1)
        {
            this.top=this.rear=null;
        }
        else
        {
            this.top=this.top.next;
        }
       // this.top=this.top.next;
        this.count--;
    }
    print()
    {
       let curre=this.top;
       while(curre)
       {
        console.log(curre.value)
        curre=curre.next;
       // console.log(curre)
       }
    }
 }

 const q=new queue();
 q.enqueue(10);
 q.enqueue(20);
 q.enqueue(30);
 q.enqueue(40);
 q.print();
 console.log("-------------")
 q.dequeue();
 q.dequeue();
 q.print();