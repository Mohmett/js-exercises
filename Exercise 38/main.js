toggleButton=document.querySelector('.toggle-button');
navbar=document.querySelector('.navbar');
navlinks=document.querySelectorAll('.navlink');



toggleButton.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    // console.log('clicked');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});