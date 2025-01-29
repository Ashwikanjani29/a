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

