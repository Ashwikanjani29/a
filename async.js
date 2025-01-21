//1.setTimeout ()
console.log(10);
console.log(20);
setTimeOut(()=>{
	console.log(30);
},5000)
console.log(50);
console.log(40);


//2.setInterval()

console.log(10);
console.log(20);
setInterval(()=>{
	console.log("mru");
},1500)
console.log(50);
console.log(40);

// promise
let p1= new Promise((resolve,reject)=>{});
console.log(10);

let p2= new Promise((resolve,reject)=>{
    resolve("success");
});
p2
.then((response)=>console.log(response));
p2.catch((error)=>console.log(error));
p2.finally(()=>console.log("finnaly for both"));

let p3= new Promise((resolve,reject)=>{
    reject("fail");
});