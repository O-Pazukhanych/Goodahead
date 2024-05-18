const burger = document.getElementsByClassName('menu-burger').item(0);
const burgerMenu = document.getElementById('burger-menu');
burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('_active');
    if (burger.classList.contains('_active'))
        burgerMenu.classList.add('_active');
    else
        burgerMenu.classList.remove('_active');
})
