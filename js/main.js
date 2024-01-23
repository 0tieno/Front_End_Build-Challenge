let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}


window.addEventListener('scroll', function() {
    let navigation = document.getElementById('navbar');
    if (window.scrollY > 200) { // Adjust the scroll threshold as needed
        navigation.classList.add('fixed-nav');
    } else {
        navigation.classList.remove('fixed-nav');
    }
});



// ||MENU-BTN

let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector('.menu-list');

// Event listener for the menu button
menuBtn.addEventListener('click', toggleBtn);


// Event listener for the window
window.addEventListener('click', closeMenu);

function toggleBtn(event){
    // Prevent the click event from propagating to the window
    event.stopPropagation();
    menu.classList.toggle('active');
};


function closeMenu(e){
    // if(e.target !== menuBtn && e.target !== menu){
    //     menu.classList.remove('active');
    // }

    menu.classList.remove('active');
}

