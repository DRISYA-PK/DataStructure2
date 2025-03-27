class Quandratic{
    constructor(size)
    {
        this.size=size;
        this.table=new Array(size);
    }
    hash(key)
    {
        let hash=0;
        for(let i=0;i<key.length;i++)
        {
            hash+=key.charCodeAt(i);
        }
        return hash%this.size;
    }
    set(key,value)
    {
        let hash=this.hash(key);
        let index=hash;
        let i=1;
        while(this.table[index]!==undefined)
        {
            index=(index+i*i)%this.size;
        }
        this.table[index]={key,value}
    }
    get(key)
    {
        let hash=this.hash(key);
        let index=hash;
        let i=1;
        while(this.table[index]!==undefined)
        {
            if(this.table[index].key===key) return this.table[index].value;
            index=(index+i*i)%this.size;
        }
    }
    print()
    {
        for(let i=0;i<this.size;i++)
        {
            if(this.table[i]!==undefined)
            {
                console.log(i,this.table[i])
            }
        }
    }
}

const hash=new Quandratic(10);
hash.set("orange","fruite");
hash.set("orange","color");
hash.set("orangeb","colorb");
hash.print();

console.log(hash.get("orange"))
