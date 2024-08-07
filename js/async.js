let btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
   // clearTimeout(id);
    clearInterval(id);
})
console.log("Hello");
let id=setInterval(test,1000);
console.log("World");
function test(){
    console.log("Timeout happens");

}