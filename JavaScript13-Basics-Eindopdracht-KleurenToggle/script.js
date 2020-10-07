const body = document.body;
const menu = document.querySelector('.menu');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const orange = document.querySelector('.orange');
const burger = document.querySelector('.burger');
let visible = document.querySelector('.visible');



// deze werkt!!
// burger.addEventListener('click', function () {
//     menu.style.visibility = 'visible';       
// })


// burger.addEventListener('click', function () {
//     menu.visibility.toggle = 'visible';
// });

// let navStatus = false;

// if (navStatus = true) {
//     menu.style.visibility = 'visible';
// }
// else if (navStatus = false) {
//     menu.style.visibility = 'invisible';
// }

// burger.addEventListener('click', function () {
//     navStatus.toggle();
// });


// red.addEventListener('click', function () {
//     body.classList.add('red');
// });


// eerst class aanmaken voor html en aanpassen css visibiltiy
// dan gewoon classlist toevoegen

let makeMenuVisible = () => {
    menu.classList.toggle("visible");
};
burger.addEventListener('click', makeMenuVisible);



red.addEventListener('click', function () {
    body.classList.add('red');
    body.classList.remove('blue');
    body.classList.remove('green');
    body.classList.remove('yellow');
    body.classList.remove('orange');
    menu.classList.toggle("visible");
});

blue.addEventListener('click', function () {
    body.classList.add('blue');
    body.classList.remove('red');
    body.classList.remove('green');
    body.classList.remove('yellow');
    body.classList.remove('orange');
    menu.classList.toggle("visible");
});

green.addEventListener('click', function () {
    body.classList.add('green');
    body.classList.remove('blue');
    body.classList.remove('red');
    body.classList.remove('yellow');
    body.classList.remove('orange');
    menu.classList.toggle("visible");
});

yellow.addEventListener('click', function () {
    body.classList.add('yellow');
    body.classList.remove('blue');
    body.classList.remove('green');
    body.classList.remove('red');
    body.classList.remove('orange');
    menu.classList.toggle("visible");
});

orange.addEventListener('click', function () {
    body.classList.add('orange');
    body.classList.remove('blue');
    body.classList.remove('green');
    body.classList.remove('yellow');
    body.classList.remove('red');
    menu.classList.toggle("visible");
});