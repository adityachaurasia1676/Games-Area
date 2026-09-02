// add the box to the page and use it
const box = document.querySelector('.box');
// add the colors to the page and use them
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
// now making the event listener to the button to change the box coloer

blue.addEventListener('click',()=>{
    box.style.backgroundColor = 'blue';
})
red.addEventListener('click',()=>{
    box.style.backgroundColor = 'red';
})
green.addEventListener('click',()=>{
    box.style.backgroundColor = 'green';
})
orange.addEventListener('click',()=>{
    box.style.backgroundColor = 'orange';
})
yellow.addEventListener('click',()=>{
    box.style.backgroundColor = 'yellow';
})
purple.addEventListener('click',()=>{
    box.style.backgroundColor = 'purple';
})