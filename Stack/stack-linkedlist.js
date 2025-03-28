class linkedList{
    constructor(value)
    {
        this.value=value;
        this.next=null

    }
}

class stack{
    constructor()
    {
        this.top=null;
        this.count=0;;
    }
    push(value)
    {
        let newnode=new linkedList(value);
        newnode.next=this.top;
        this.top=newnode;
        this.count++;
    }
    pop()
    {
        this.top=this.top.next;

    }
}