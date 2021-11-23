window.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__menu-mobile'),
    list = document.querySelectorAll('.header__list-mobile');

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    list.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        })
    });
});