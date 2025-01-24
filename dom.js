// console.log(window);
// console.log();

// let element = document.getElementById("demo");
// element.innerText="<h1>hello</h1>";
// element.innerHTML="<h1> hello</h1>";
// console.log(element)


// let ele =document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="hi";
// ele[0].style.backgroundColor="tomata"

// spread operator :- it take out each and every value from the original array
// and store it inside one mopre new array(pure array)
// ? syntax:-[...varidable]

// let x=[...ele];
// console.log(x,Array.isArray(ele));

// x.map(element=>{
//     element.style.backgroundColor="orange"
// })


// let ele =document.getElementsByName("formData");
// [..ele].map(inp=>{
//     console.log("hi");
// })


// let ele= document.querySelector("#mru");
// console.log(ele);

// let ele =document.querySelectorAll(".test");
// console.log(ele);


// let btn=document.querySelector("#btn");
// //addevent listener("event",()=<{})
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
//     alert ("hi");
//     document.body.backgroundColor="orange"
// })

// let btn=document.querySelector("#btn");
// btn.addEventListener("dblclick",()=>{
//      console.log("button clicked");

// })

// let v=document.getElementById("v");
// v.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow";
//     v.style.backgroundColor="blue"
// })

let inp =document.getElementById("inp");
inp.addEventListener("keydown",()=>{
    console.log("hi");
})
let inp1 =document.getElementById("inp1");
inp1.addEventListener("keyup",()=>{
    console.log("hee");
})
