//let arr=[34,4,5,6,7,67,7];
//let arr1=[100,200,300]
// function printData(item,index)
// {
//     console.log("Called",arguments[1]);
// }

// printArray(arr,printData);
// // for(i=0;i<arr.length;i++)
// // console.log(arr[i]);



// //printArray(arr1);
// // for(i=0;i<arr.length;i++)
// //     console.log(arr[i]);



// function printArray(array,task)
// {
// for(i=0;i<array.length;i++)
//     task(array[i],i,array);
    
// }   

//foreach, filter, map

function printData(item,index)
{
    console.log("Called",item);
}

//arr.forEach(printData);
// arr.forEach(function(item){
//     console.log(item);
// })
let arr=[23,4,5,6,7];
//let results=[];
// for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2==0)
//             results.push(arr[i]);
//     }
// arr.forEach(function(item){
//     if(item%2==0)
//         results.push(item)
// })
// let results=arr.filter(function(item){

//     if(item%2==0)
//         return true;
   
//     //return false;
// })

/*let results=[];
arr.forEach(function(item){
    if(item%2==0)
    results.push(item*2);
else
results.push(item);


})*/
let results=arr.map(function(item){
//     if(item%2==0)
//     return item*2;
// else
// return item;
    return (item%2==0?item*2:item);
    

})
console.log(results);