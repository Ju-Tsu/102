var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalActionYes = document.querySelector('.modal__action');
var modalActionNo = document.querySelector('.modal__action--negative');
var selectPlalnButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(selectPlalnButtons.length);


// console.dir(backdrop);
for (var i = 0; i < selectPlalnButtons.length; i++) {
    selectPlalnButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalActionNo) {
    modalActionNo.addEventListener('click', closeModal);
}

if (modal){
    modal.classList.remove('open');
}
function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
