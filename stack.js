//simple stack

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(value)
    {
        return  this.stack.push(value); //returning the number of elements in an array
         
    }
    isEmpty()
    {
     return   this.stack.length===0
    }
    pop()
    {
        if(this.isEmpty()) {return "stack is empty";}
         return this.stack.pop();

    }
    peek()
    {
        if(this.isEmpty()) {return "stack is empty";}
        return  this.stack[this.stack.length-1];
        
    }
    display()
    {
        console.log(this.stack.join(' '))
    }
}

const stack=new Stack();
stack.push(100);
stack.push(344);
stack.push(1223);
stack.push(212);
stack.push(1231);
stack.push(211);
stack.push(133);
stack.display();

stack.pop();
console.log("----------------------")
stack.display();

//stack using linkedlist
console.log("stack using linkedlist")

class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class StackLinked{
    constructor()
    {
        this.length=0;
        this.top=null;
    }
    push(element)
    {
        const node=new Node(element);
        node.next=this.top;
        this.top=node;
        this.length++;

    }
    pop()
    {
        if(this.length===0) return "no elements in stack";
        let removedNode=this.top;
        this.top=this.top.next;
        this.length--;
        return removedNode.value;
    }
    popAt(index)
    {
        if(this.length===0) return "no elements in stack";
        if(index===0)
        {
            let removedNode=this.top;
            this.top=this.top.next;
            this.length--;
            return removedNode;
        }
        if(index>this.length) return "invalid Index";

        let currentNode=this.top;

        for(let i=0;i<index-1;i++)
        {
            currentNode=currentNode.next
        }
        let removedNode1=currentNode.next.value;
        currentNode.next=currentNode.next.next;
        this.length--;
        return removedNode1


    }
    peek()
    {
        return this.length===0?"no elements in stack": this.top.value;
    }
    display()
    {
        //console.log(this.top.value)
        let currentNode=this.top;
        let stack=' '
        while(currentNode)
        {
            stack+=currentNode.value+' ';
            currentNode=currentNode.next
        }

        console.log(stack)
    }
}

const stackLink=new StackLinked();
stackLink.push(10);
stackLink.push(11);
stackLink.push(12);
stackLink.push(13);
stackLink.push(14);

stackLink.display();
stackLink.popAt(2);
console.log("-------------after pop----------")

stackLink.display();