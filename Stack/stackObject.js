class StackObj{
    constructor()
    {
        this.stack={};
        this.count=0;
    }
    push(element)
    {
        this.stack[this.count]=element;
        this.count++;
    }
    pop()
    {
        if(this.count===0)return "stack is empty";
         delete this.stack[this.count-1];
        this.count--;
    }
    display()
    {
        if(this.count===0)return "stack is empty";
        for(let i=0;i<this.count;i++)
        {
        console.log(this.stack[i])
        }
    }
}

const stackObj=new StackObj();
stackObj.push(44);
stackObj.push(441);
stackObj.push(442);
stackObj.push(443);
stackObj.display();
stackObj.pop();
console.log("-------------after pop----------")
stackObj.display();
