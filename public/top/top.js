
document.addEventListener("DOMContentLoaded", function(){
    menuIcon = document.querySelector('.menu')
    closeIcon = document.querySelector('.close');
    headerTitle = document.querySelector('.header-title');
    headerMenu = document.querySelector('.header-menu');

    menuIcon.addEventListener('click', event => {
        headerTitle.style.display = 'none';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        headerMenu.style.display = 'flex';
    });

    closeIcon.addEventListener('click', event => {
        headerTitle.style.display = 'block';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        headerMenu.style.display = 'none';
    });
});