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



// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainBlock");

// mainEle.style.border="2px solid red";
// mainEle.style.width="600px";
// mainEle.style.height="500px";

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("id","topBlock");

// let image=document.createElement("img");
// image.src="./wallpaper 1.jpg";
// image.style.width="600px";
// image.style.height="600px"
// // console.log(topEle);


// let bottomEle= document.createElement("div");
// bottomEle.setAttribute("id","bottomBlock");
// // console.log(bottomEle);

// let h= document.createElement("button");
// h.innerText="cat";
// h.style.textAlign="center";

// let btn=document.createElement("button");
// btn.innerText="view more";
// btn.style.border="none";
// btn.style.padding="5px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white";



// bottomEle.appendChild(h);
// bottomEle.appendChild(btn);

// topEle.append(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);



// let form = document.createElement("form");
// let uname=document.getElementById("uName");

// let password=document.getElementById("uPass");
// let check =document.getElementById("check");
// let show = document.getElementById("show");
// let gender=document.getElementById("uGen");
// console.log(gender);


// check.addEventListener("click",(event)=>{
//     if(event.target.checked==true){
//         password.setAttribute("type","text");
//         show.innerText="hide password";

//     }
//     else{
//         password.setAttribute("type","password");
//         show.innerText="show password";
//     }
// })
// check.addEventListener("click",(event)=>{
//     if (event.target.checked==true){
//              pass.setAttribute("type","text");
//              show.innerText="Hide password"
//     }
//     else{
//              pass.setAttribute("type","password");
//              show.innerText="Show password"
//     }
 
//  })
// form.addEventListener("submit",event=>{
//     event.preventDefault();
//     let un=uname.value;
//     let up=password.value;
//     let g="";
//     for(let i=0;i<=gender.length-1;i++){
//         // console.log(object);
//         if(gender[i].checked == true){
//             g =gender[i].values;

//         }
//     }
   
//     let userDetails={
//         name:un,
//         password:up,
//         gender:g
//     }
//     console.log(userDetails);
//     sessionStorage.setItem("userData",JSON.stringify(userDetails));
// })

// //1.setTimeout ()
// console.log(10);
// console.log(20);
// setTimeOut(()=>{
// 	console.log(30);
// },5000)
// console.log(50);
// console.log(40);


// //2.setInterval()

// console.log(10);
// console.log(20);
// setInterval(()=>{
// 	console.log("mru");
// },1500)
// console.log(50);
// console.log(40);

// // promise
// let p1= new Promise((resolve,reject)=>{});
// console.log(10);

// let p2= new Promise((resolve,reject)=>{
//     resolve("success");
// });
// p2
// .then((response)=>console.log(response));
// p2.catch((error)=>console.log(error));
// p2.finally(()=>console.log("finnaly for both"));

// let p3= new Promise((resolve,reject)=>{
//     reject("fail");
// });


// ! API FETCHING

// function fetchUsers(){
//    let response = fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     response.then(result=>{
//         // console.log(res.json());
//         return result.json().then(data=>{
//             console.log(data);
//             let store =document.getElementById("store");
//             console.log(store);
//             data.map(user=>{
//                 store.innerHTML+= `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>
//                 </tr>
//                 `
//         })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();


// function demo(){
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     return;
//     console.log(30);
//     console.log(40);
//     console.log("end");
// }
// demo();

//async and await

// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("success");
//     },5000)
// })

// async function demo(){
//     console.log("start");
//     let x= await p;
//     console.log(x);
//     console.log("end");
// };
// demo();

// async function fetchUsers(){
//     let response =await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
// }
// fetchUsers();



         
let array1=[{
    empid:1,
    empname:"xyz",
    empcompany:"xyz",
    empsalary:"xyz",
    empaddress:{
        empcity:"aa",
        emparea:"b"
        
}
},{
    empid:2,
    empname:"abc",
    empcompany:"abc",
    empsalary:"abc",
    empaddress:{
        empcity:"nn",
        emparea:"mm"
        
}
}
]
array1.map((user)=>{
    store.innerHTML+=`
   <tr>
  <td>${user.empid} </td>
   <td>${user.empname} </td>
    <td>${user.empcompany} </td>
    <td>${user.empsalary} </td>
    <td>${user.empaddress.empcity} </td>
    <td>${user.empaddress.emparea} </td>
    </tr>`
})