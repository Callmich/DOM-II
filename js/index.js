// Your code goes here


document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.5)';
        el.style.transition ='transform .5s';
        el.style.color = "red";
    })
})

document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.transition ='transform .5s';
        el.style.color = "black";
    })
})