// VARIABLES
var menu = document.querySelector('.menu');
var drop = document.querySelector('#list');
var upperMenu = document.querySelector('.mobile');
var buttonAbout = document.querySelector('.mobile-hidden');
var showcase = document.querySelector('.showcase');
var list = document.querySelector('#list');
var listParent = list.parentElement;


// CALLBACK FUNCTIONS
function classToggle(){
    upperMenu.classList.toggle('darken');
    drop.classList.toggle('hidden');
    drop.classList.toggle('links');
    list.classList.toggle('out_of_site');
}

function moveToAbout(){
    console.log(5);
    window.scrollTo(100);
}

// EVENT LISTENERS
menu.addEventListener('click', classToggle);
buttonAbout.addEventListener('click', moveToAbout);


console.log(listParent);