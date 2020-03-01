menuIcon = document.querySelector('.menu');
closeIcon = document.querySelector('.close');
headerTitle = document.querySelector('.header-title');

menuIcon.addEventListener('click', event => {
    console.log('捕鯨');
    headerTitle.style.display = 'none';
});