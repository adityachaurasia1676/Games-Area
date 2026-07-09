// // const time = document.querySelector("#time");

// // function updateClock(){

// //     const now = new Date();
    
// //     let hours = now.getHours();
// //     let minutes = now.getMinutes();
// //     let seconds = now.getSeconds();

// //     hours = String(hours).padStart(2,'0');
// //     minutes = String(minutes).padStart(2,'0');
// //     seconds = String(seconds).padStart(2,'0');

// //     time.textContent = `${hours}:${minutes}:${seconds}`;
// // }

// // updateClock();

// // setInterval(updateClock,1000);
// // prototype.updateClock = updateClock;    

// obj2={

// }
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     ChangeAge(){
//         return this.name + " is " + this.age + " years old.";
//     }
// }
// // function changeAge(=>{
// //     String name = document.getElementById("name").value;
// //     String age = document.getElementById("age").value;
// //     const person1 = new Person(name, age);
// //     document.getElementById("result").innerHTML = person1.ChangeAge();
// // })
// const obj = {
//     name:"Jhon Doe",
//     age: 30,
//     ChangeAge: function(){
//         return this.name + " is " + this.age + " years old.";
//     }
// }

// // const obj={
// //     name:"Jhon Doe",
// //     age:20 ;
// //     person:fuction(){
// //         const that = this ;
// //         function abc(){
// //             console.log(this.name) ;
// //         }
// //     }
// // }

// const an=(name,value)=>{
//     console.log(this) ;
// }
// console.log(an()) ;

// function abc(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this.name);
//     console.log(this.age);
// }
// const obj1={
//     name:"Nagesh",
//     age:20,
// }
// const obj2={
//     name:"Kanna",
//     age:19
// }
// abc.call(obj1, obj1.name, obj1.age);
// abc.call(obj2, obj2.name, obj2.age);

// const increment=function(name,age){
//     this.name=name;
//     this.age+=age;
//     console.log(this.name);
//     console.log(this.age);
// }
// increment.call(obj1, obj1.name, 5);
// increment.call(obj2, "Vishu", 3);
// console.log(obj2);

// const br=increment.bind(obj1, obj1.name, 5);
// br();
// person.call(obj1, obj1.name, obj1.age){
//     console.log(this.name);

// }.catch((err)=>{
//     console.log(err);
// }
// const attendance = new Promise((resolve, reject)=>{ 
//     let att=true;
//     setTimeout(()=>{
//         if(att){
//             resolve({name:"Aditya Chaurasia", age:20, course:"B.Tech"});
//         } else {
//             reject("Attendance is not marked");
//         }
//     }, 2000);
// });

// attendance.then((student)=>{
//     return student
// }).then((student)=>{
//     console.log(`Name: ${student.name}`);
// }).catch((err)=>{
//     console.log(err);
// });


// fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
//     console.log(data); ;
// }).catch((err)=>{
//     console.log(err);
// }) ;

// what is promise in javascript
// In JavaScript, a Promise is an object that represents the eventual
// completion (or failure) of an asynchronous operation and 
// its resulting value. It allows you to write asynchronous
//  code in a more manageable and readable way, 
//  avoiding the so-called "callback hell."

// what is bind in javascript
// In JavaScript, the `bind()` method is used to create a new
//  function that, when called, has its `this` keyword set to a 
//  specific value. It allows you to explicitly set the context 
//  (`this`) for a function, which can be useful when you want to 
//  ensure that a function operates in the context of a particular 
//  object.

// super exted, prototype, call, apply, bind, promise, async await, fetch, local storage, session storage, 
// cookies, closure, hoisting, event bubbling, event capturing, event delegation,
//  DOM manipulation, AJAX, JSON, RESTful APIs
// Creating a Promise


// const task = new Promise((resolve, reject) => {
//     console.log("Task Started...................");
//     setTimeout(() => {
//         let success = true; 
//         if (success) {
//             resolve({
//                 id: 1,
//                 name: "",
//                 score: 95
//             });
//         } else {
//             reject("Something went wrong!");
//         }
//     }, 3000);
// });

// task
// .then((data) => {
//     console.log("Promise Resolve");
//     console.log(data);
//     return data.score;
// })
// .then((score) => {
//     console.log("Student Score:", score);
//     return score + 5;
// })
// .then((newScore) => {
//     console.log("Bonus Score:", newScore);
// })
// .catch((error) => {
//     console.log("Promise Rejected with error:");
//     console.log(error);
// })
// .finally(() => {
//     console.log("promise has completed ");
// });
// const p = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Task Completed");
//     }, 2000);-
// });
// const p = Promise.resolve("Hello World");

// p.then((data) => {
//     console.log(data);
// });

// const server1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Server 1 Data");
//     }, 2000);
// });

// const server2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Server 2 Failed");
//     }, 3000);
// });

// const server3 = Promise.resolve("Server 3 Data");

// const server4 = new Promise((resolve, reject) => {
//     reject("Server 4 Failed");
// });

// Promise.all([server1, server2, server3])
// .then((data) => {
//     console.log("Promise.all Success");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Promise.all Error");
//     console.log(err);
// });

// Promise.allSettled([server1, server2, server3, server4])
// .then((results) => {
//     console.log("Promise.allSettled Result");

//     results.forEach((result) => {
//         if (result.status === "fulfilled") {
//             console.log( result.value);
//         } else {
//             console.log(result.reason);
//         }
//     });
// });

// let string  = "{name: 'John', age: 30, city: 'New York'}";
// let result = JSON.parse(string);
// console.log(result);

// fetch("https://jsonplaceholder.typicode.com/posts") 

// method:"post",
// headers:{
//     "Content-Type":"application/json"
// },
// body: JSON.stringify({
//     title: "My Post",
//     body: "This is the post content",
//     userId: 1
// // })
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "post",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         id:1,
//         title: "My Post",
//     })
// }).then((response) => response.json())
// .then((data) => {
//     console.log("Post Created:", data.id);
// })

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "put",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        id:1,
        title: "Updated Post",
        body: "This is the updated post content",
        userId: 1
    })
}).then((response) => response.json())
.then((data) => {
    console.log(data.id); 
})

