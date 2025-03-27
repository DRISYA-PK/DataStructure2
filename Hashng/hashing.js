class Hash{
constructor(size)
{
    this.size=size;
    this.table=new Array(size)
    this.length=0;
}
hash(key)
{
    let hash=0;
    for(let i=0;i<key.length;i++)
    {
        hash+=key.charCodeAt(i)
    }
    

    hash=hash%this.size;
  //  console.log(hash)
    return hash;
}

set(key,value)
{
    let hash=this.hash(key);
    console.log(hash)
    if(this.length===this.size)
    {
        console.log("ooooooooooooooo")
        return "hash already filled";
    }
   
    this.table[hash]=value;
   // console.log("value", this.table[hash])
    this.length++;
}
get(key)
{
    let hash=this.hash(key)
    if(hash>this.size||hash<0)
    {
        return "Invalid key";
    }
    return this.table[hash];
   
}
remove(key)
{
    let hash=this.hash(key);
    this.table[hash]=undefined;
    this.length--;
}
display(){
    for(let i=0;i<this.size;i++)
    {
        if(this.table[i]!==undefined)
        {
            console.log(i,this.table[i])
        }
      
    }
}
}

const hash=new Hash(5);
hash.set("fruits","apple")
hash.set("fruitsl","apple1")
hash.set("fruitsh","apple2")
hash.set("fruitsk","apple3")
hash.display();
