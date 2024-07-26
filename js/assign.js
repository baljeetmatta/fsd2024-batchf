// let input1=document.querySelector("#input1")
// let input2=document.querySelector("#input2")
// let result=document.querySelector("#result")
// let addbtn=document.querySelector("#addbtn")
// addbtn.addEventListener("click",clickHandler);
// function clickHandler()
// {
//     let operand1=parseInt(input1.value);
//     let operand2=parseInt(input2.value);
//     let add=operand1+operand2;
//     result.value=add;
// }
let digits = document.querySelector("#digits");
let operand1 = 0;
let operator = "";
let isNew = false;

// let btn1=document.querySelector("#btn1")
// let btn2=document.querySelector("#btn2")
// let btn3=document.querySelector("#btn3")

// btn1.addEventListener("click",clickHandler);
// btn2.addEventListener("click",clickHandler);
// btn3.addEventListener("click",clickHandler);

// let elements=document.querySelectorAll(".btns");
// elements.forEach(function (element){
//     element.addEventListener("click",clickHandler)
// })


// let operations=document.querySelectorAll(".operations");
// operations.forEach(function (element){
//     element.addEventListener("click",operationHandler)
// })

// function operationHandler(e)
// {
//     if(e.target.innerText=="+")
//         {
//             operand1=parseInt(digits.innerText);
//             operator="+";
//             isNew=true;
//             console.log(operand1,operator,isNew);

//         }
//         if(e.target.innerText=="=")
//             {
//                 let operand2=parseInt(digits.innerText);
//                 let add=operand1+operand2;
//                 digits.innerText=add;

//             }

// }
// function clickHandler(e)
// {
//     //a=a+10 a+=10
//     if(digits.innerText=="0")
//         digits.innerText="";

//     if(isNew==true)
//         {
//             digits.innerText="";
//             isNew=false;

//         }

//     digits.innerText+=e.target.innerText;


// }
//Assign 3
let tasks = [];
let id = 1;
let taskname = document.querySelector("#taskname");
let taskList = document.querySelector("#taskList");
taskname.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        //tasks.push(taskname.value);
        let obj = {};
        obj.title = taskname.value;
        obj.status = "Pending";
        obj.taskid = id;
        id++;
        tasks.push(obj);
        addDom(obj)
        //addtoDom();
        taskname.value = "";
        console.log(tasks);


    }
    //console.log("Enter pressed");


})

// function addtoDom()
// {
//     // let li=document.createElement("li");
//     // li.innerText=taskname.value;

//     // taskList.append(li);

//     let taskdiv=document.createElement("div");

//     let span=document.createElement("span");
//     span.innerText=taskname.value;

//     taskdiv.append(span);

//     taskList.append(taskdiv);



// }
function addDom(task) {
    // let li=document.createElement("li");
    // li.innerText=taskname.value;

    // taskList.append(li);

    let taskdiv = document.createElement("div");
    taskdiv.setAttribute("id", task.taskid);

    let span = document.createElement("span");
    span.innerText = task.title;
    let chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click",function(){

        //console.log(chk.checked);
        let newstatus="pending";
        if(chk.checked==true)
            {
            span.style.textDecoration="line-through";
            newstatus="completed";
            }
        else
        
        span.style.textDecoration="none";

        tasks=tasks.map(function(item){
            if(item.taskid==task.taskid)
                item.status=newstatus;

            return item;

        })
        console.log(tasks);
        


        //console.log(tasks);


    })


    taskdiv.append(span);
    taskdiv.append(chk);

    taskList.append(taskdiv);



}