// VARIABLES
var menu = document.querySelector('.menu');
var drop = document.querySelector('#list');
var upperMenu = document.querySelector('.mobile');
var buttonAbout = document.querySelector('.mobile-hidden');
var showcase = document.querySelector('.showcase');
var wH = window.innerHeight;
// CALLBACK FUNCTIONS
function classToggle(){
    drop.classList.toggle('hidden');
    drop.classList.toggle('links');
    upperMenu.classList.toggle('darken');
}

function moveToAbout(){
    console.log(5);
    window.scrollTo(100);
}

// EVENT LISTENERS
menu.addEventListener('click', classToggle);
buttonAbout.addEventListener('click', moveToAbout);

// OTHERS
showcase.style.height = wH;
console.log(showcase.style.height);


