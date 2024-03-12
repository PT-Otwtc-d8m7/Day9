let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1; 

next.onclick = function() {
    if(active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadContainer();
}

prev.onclick = function() {
    if(active < 1) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadContainer();
}

function reloadContainer() 
{
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots .active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {
        next.click()
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadContainer();
    })
})

let refreshSlider = setInterval(()=> {next.click()}, 3000);