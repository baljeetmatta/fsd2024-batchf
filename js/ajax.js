// //1. Create an object XMLHttpRequest
// let request=new XMLHttpRequest();
// //2. Request Prepare-> Method,URL,Mode(aysnc,sync)
// request.open("GET","../data.json");
// //3. load event
// // request.onload=function(){

// // }
// request.addEventListener("load",()=>{
//     let result=JSON.parse(request.responseText);
//     console.log(result);


// })
// //4. Submit/send
// request.send();

// let request=new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",()=>{
//     let result=JSON.parse(request.responseText);
//     console.log(result);

// })
// request.send();


// let request=new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users");
// request.onreadystatechange=function(){
//     console.log(request.readyState);
//     if(request.readyState==4)
//         console.log(request.responseText);

// }
// request.addEventListener("load",function(){

//     console.log(request.responseText);

// })
// request.setRequestHeader("Content-type","application/json")
// //request.send("variablename=value&variablename=value")
// let obj={};
// obj.name="Code";
// obj.job="Trainer";
// request.send(JSON.stringify(obj));
// let no=11;
// let prom=new Promise((resolve,reject)=>{

//     if(no%2==0)
//         resolve();
//     else
//     reject();

// })
// let p=prom.then(()=>{
//     console.log("Even")
// }).catch(()=>{
//     console.log("ODD");
// })
// console.log(p);
//fetch(URL,options)
// 
// fetch("https://reqres.in/api/users?page=1")
// .then((response)=>{return response.json()})
// .then((response)=>{console.log(response)});
// let obj={};
// obj.name="COde";
// obj.job="Trainer";

// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     body:JSON.stringify(obj),
//     headers:{
//         "content-type":"application/json"
//     }
// }).then((response)=>{return response.json()})
// .then((response)=>{
//     console.log(response)
// })
async function getData()
{
    let response=await fetch("https://reqres.in/api/users?page=1")
    let output=await response.json();
    console.log(output);

}
getData();
console.log("Hello");
