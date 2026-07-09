// async function fun(){
//     return "Hello, World!";
// }
// fun().then(data => console.log(data));

// const task = new Promise((res) => {
//     res("done");    
// })

// async function fun(){
//     const val = await task;
//     console.log(val);   
// }

// task.then((data) => {
//     console.log(data);
// })


// const task = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Task Completed");
//     }, 2000);
// }) ;
// const task2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Task2 Completed");
//     }, 4000);
// }) ;
// async function fun(){
//     const val = await task;
//     console.log("hllow");
// }
// fun()

// function getData(){
//     task.then((res) => {
//         console.log(res);
//     });
// }

// function GetData(){
//     task2.then((res) => {
//         console.log(res);
//     });
// }
// getData()
// GetData()

const Url = "https://api.github.com/users/adityachaurasia1676"

async function check() {
    const data = await fetch(Url);
    const res = await data.json();
    console.log(res);
}
check()