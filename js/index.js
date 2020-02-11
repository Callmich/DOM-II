// Your code goes here


document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.5)';
        el.style.transition ='transform .5s';
        el.style.color = "red";
    })
});

document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.transition ='transform .5s';
        el.style.color = "black";
    })
});

addEventListener('keydown', ()=>{
    document.body.style.backgroundColor = 'yellow';
});

addEventListener('keyup', ()=>{
    document.body.style.backgroundColor = 'white';
});

const bigBus = document.querySelector('.intro img');

bigBus.addEventListener('click', ()=>{
     bigBus.src= 'img/scaryBus.jpg'
});

bigBus.addEventListener('dblclick', ()=>{
    bigBus.src= 'img/fun-bus.jpg'
});

let allText = document.querySelector('body');

window.addEventListener('scroll', ()=>{
    allText.style.color = 'red';
})

