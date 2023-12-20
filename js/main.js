let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}

// navbar scrollY show/hide
// const navbar = document.querySelector('.navbar');
// const navbarHeight = navbar.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//     if (window.scrollY > navbarHeight) {
//         navbar.classList.add('navbar--dark');
//     } else {
//         navbar.classList.remove('navbar--dark');
//     }
// });

window.addEventListener('scroll', function() {
    let navigation = document.getElementById('navbar');
    if (window.scrollY > 200) { // Adjust the scroll threshold as needed
        navigation.classList.add('fixed-nav');
    } else {
        navigation.classList.remove('fixed-nav');
    }
});

