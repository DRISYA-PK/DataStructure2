
function reverse(queue)
{
 if(queue.length===0)
 {
    return;
 }
    let po=queue.shift();
   reverse(queue)
 //  reverse2(queue,po);
 queue.push(po)
   return queue;
   
    
}
console.log(reverse([1,2,3,4,5,6,7,8,9]))