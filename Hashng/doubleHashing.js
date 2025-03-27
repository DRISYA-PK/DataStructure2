class DoubleHashing
{
    constructor(size)
    {
    this.size=size;
    this.table=new Array(size)
    }
    hash1(key)
    {
        let hash=0;
        for(let i=0;i<key.length;i++)
        {
            hash+=key.charCodeAt(i);

        }
        return hash%this.size;
    }
    hash2(key)
    {


        
        let hash=0;
        for(let i=0;i<key.length;i++)
        {
            hash+=key.charCodeAt(i);

        }
        return (7-(hash%7))||1;
    }
    set(key,value)
    {
        let hash1=this.hash1(key);
        let hash2=this.hash2(key)
        let i=0;
        while(this.table[hash1]!==undefined)
        {
            hash1=(hash1+(i*hash2))%this.size;
            i++;
        }
        this.table[hash1]={key,value}
    }
    
    get(key)
    {
        let hash1=this.hash1(key);
        let hash2=this.hash2(key)
        let i=0;
        while(this.table[hash1]!==undefined)
        {
            
            if(this.table[hash1].key===key) return this.table[hash1].value;
            hash1=(hash1+(i*hash2))%this.size;
            i++;
        }
        
}

print()
{
    for(let i=0;i<this.size;i++)
    {
        if(this.table[i]!==undefined)
            console.log(i,this.table[i])
    }
}
}

console.log("haiiiiiiiiiiiiiiiii")
const  doubleHashing=new DoubleHashing(5);
doubleHashing.set("violet","color");
doubleHashing.set("violet","vegitable");
doubleHashing.set("violetbb","colorbb");
doubleHashing.set("violefft","colofffr");
doubleHashing.print();
console.log(doubleHashing.get("violet"))
