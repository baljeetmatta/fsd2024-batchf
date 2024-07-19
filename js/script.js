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

// function printData(item,index)
// {
//     console.log("Called",item);
// }

//arr.forEach(printData);
// arr.forEach(function(item){
//     console.log(item);
// })
//let arr=[23,4,5,6,7];
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
// let results=arr.map(function(item){
// //     if(item%2==0)
// //     return item*2;
// // else
// // return item;
//     return (item%2==0?item*2:item);
    

// })
// console.log(results);
//OBJECTS
//let arr=[];

//let obj={'your name':'Code','age':30,'name':'Test','10th':450}
//console.log(obj.10th);
//console.log(obj["your name"]);
//console.log(obj["10th"]);

// //console.log(obj["name"]);
// let pro="name";
// //console.log(obj.pro);
// console.log(obj[pro]);

// for(x in obj)
//     {

//         console.log(x,":",obj[x]);

//     }

// let obj={
//     name:'Code',
//     age:30,
//     education:['X','XII','B.Sc','Msc'],
//     marks:{'X':450,'XII':510}
// }

// console.log(obj.education[0]);
// obj.education.forEach(function(item){
//     console.log(item);
// })
//obj.marks.X

// let obj={
//     name:'Test',
//     age:10,
//     getName:getMyName
// }
// let obj1={
//     name:'Code',
//     age:10,
//     getName:getMyName
// }
// function getMyName(){
//     console.log(this.name);

// }
// obj1.getName();

// let obj={};
// obj.name="Code";
// console.log(obj.age);
// obj.age=10;
// console.log(obj);
// delete obj.age;
// console.log(obj);

let arr=[{name:'Test',age:30},{name:'Code',age:31}];
arr.forEach(function(item){
    console.log(item.name);

})
