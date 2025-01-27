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

// let inp =document.getElementById("inp");
// inp.addEventListener("keydown",()=>{
//     console.log("hi");
// })
// let inp1 =document.getElementById("inp1");
// inp1.addEventListener("keyup",()=>{
//     console.log("hee");
// })


// let bgColor = document.querySelectorAll(".bgColor");
// console.log(bgColor);
// [...bgColor].map((element=>{
//     element.addEventListener("mouseover",()=>{

//         element.style.backgroundColor=element.innerText;
//     });
// }))


// let ele = document.createElement("hi");
// ele.innerText="dynamic";
// ele.id="demo";
// let image= document.createElement('img');
// // image.src="./wallpaper 1.jpg";
// console.log(image);
// document.body.appendChild(ele);
// 


// let form = document.querySelector("form");
// let name=document.getElementById("uName");
// let email=document.getElementsById("uEmail");
// let password=document.getElementById("uPassword");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.lof("submitted");
//     let uName =name.value;
//     let uEmail = email.value;
//     let uPassword=password.value;
//     let userDetails={
//         uName,uEmail,uPassword
//     }
//     console.log(userDetails);
//     localStorage("userData",JSON.stringify(userDetails))
// })


// let video = document.createElement("video");
// video.setAttribute("src", "./wallpaper.jpg")
// console.log(video);
// video.setAttribute("controls","controls");

// document.body.appendChild(video);


// let h1 =document.createElement("h1");
// h1.setAttribute("id","demo");
// h1.innerText="hello";
// console.log(h1);
// document.body.appendChild(h1);



let mainEle = document.createElement("div");
mainEle.setAttribute("id","mainBlock");

mainEle.style.border="2px solid red";
mainEle.style.width="600px";
mainEle.style.height="500px";

console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("id","topBlock");

let image=document.createElement("img");
image.src="./wallpaper 1.jpg";
image.style.width="600px";
image.style.height="600px"
// console.log(topEle);


let bottomEle= document.createElement("div");
bottomEle.setAttribute("id","bottomBlock");
// console.log(bottomEle);

let h= document.createElement("button");
h.innerText="cat";
h.style.textAlign="center";

let btn=document.createElement("button");
btn.innerText="view more";
btn.style.border="none";
btn.style.padding="5px";
btn.style.backgroundColor="dodgerblue";
btn.style.color="white";



bottomEle.appendChild(h);
bottomEle.appendChild(btn);

topEle.append(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);

document.body.appendChild(mainEle);