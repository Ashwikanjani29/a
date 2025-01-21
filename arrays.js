// let users =["ramya","sai nikhil","prabhas","rahul"];
// console.log(users[0]);
let users = ["gita","dimple", "rahul", "prabhas"];

console.log(users[0]);
// console.log(users[3]);
// for(let i = 0; i< users.length; i++){
//     console.log(users[i]);
// }
// users.map((user)=>{
//     console.log(user);

// })

let x = users.forEach((user)=>{
     //console.log(user);
     return user;
});
console.log(x);