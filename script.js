const text = document.querySelectorAll('.faq');

text.forEach(function(event) {
    event.firstElementChild.addEventListener('click', function() {
        text.forEach(function(txt) {
            txt.firstElementChild.classList.remove('active');
            txt.lastElementChild.classList.remove('expand');
            txt.firstElementChild.firstElementChild.classList.remove('rotate');
        })
        event.firstElementChild.classList.toggle('active');
        event.lastElementChild.classList.toggle('expand');
        event.firstElementChild.firstElementChild.classList.toggle('rotate');
    })
})