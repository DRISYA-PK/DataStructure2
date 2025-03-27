class LinearProbing{
    constructor(size)
    {
        this.table=new Array(size);
        this.size=size;
    }
hash(key)
{
let hash=0;
for(let i=0;i<key.length;i++)
{
    hash=hash+key.charCodeAt(i);
}

return hash%this.size;
}
    set(key,value)
    {
        let hash=this.hash(key);
        let index=hash;
        while(this.table[index]!==undefined)
        {
            index=(index+1)%this.size;
        }
        this.table[index]={key,value};
    }
    get(key)
    {
        let hash=this.hash(key);
        let index=hash;
        while(this.table[index]!==undefined)
        {
            if(this.table[index].key===key) return this.table[index].value;
            index=(index+1)%this.size;
        }
   }
   print()
   {
    for(let i=0;i<this.size;i++)
    {
        if(this.table[i]!==undefined)
        {
            console.log(i,this.table[i].key,":",this.table[i].value)
        }
    }
   }
}


const linear=new LinearProbing(10);
linear.set("mamgo","fruit");
linear.set("mango","yellow");
linear.set("grapes","green")
linear.print()
console.log(linear.get("mango"))