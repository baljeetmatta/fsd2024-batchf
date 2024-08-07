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
