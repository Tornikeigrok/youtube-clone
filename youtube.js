document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('btn');
    const display = document.querySelector('aside');
    button.addEventListener('click', function(){
        display.classList.toggle('show');
    });
});