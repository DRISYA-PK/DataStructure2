class Hash{
    constructor(size)
    {
        this.table=new Array(size);
        this.size=size;
    }
    hash(key)
    {
        let index=0;
        for(let i=0;i<key.length;i++)
        {
            index=index+key.charCodeAt(i)
        }
        return index%this.size;
    }
    set(key,value)
    {
        let hash=this.hash(key);
        if(!this.table[hash])
        {
            this.table[hash]=[];
        }
       // if(this.table[hash][0].keys=="dfsff")
     
        this.table[hash].push({key,value})
       
    
    }
    get(key)
    {
       // console.log("iiiiiiiiiii")
        let hash=this.hash(key);
        let bucket=this.table[hash];
       // console.log(bucket)
       if(bucket)
       {
        for(let f of bucket)
        {
          //  console.log(f.key)
           // console.log(key)
            if(f.key===key)
                console.log( f.value)
        }
       }
        
       
    }
    print()
    {
      for(let i=0;i<this.size;i++)
      {
        if(this.table[i]!=undefined)
        console.log(i,this.table[i])
      }
    }
}

let hash=new Hash(5)
hash.set("fruits","mango")
hash.set("fruits1","mango1")
hash.set("fruits","mangokkk")
hash.set("fruits","mangokkk")
//hash.print();
console.log(hash.get("fruits"))