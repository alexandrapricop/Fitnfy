var menu = document.querySelector('.menu');
var drop = document.querySelector('#list');
console.log(drop);

function classToggle(){
    drop.classList.toggle('hidden');
    drop.classList.toggle('links');
}

menu.addEventListener('click', classToggle);