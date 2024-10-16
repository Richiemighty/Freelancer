// Get the footer and the button
const footer = document.getElementById('footer');
const toggleBtn = document.getElementById('toggleFooterBtn');

// Toggle the 'footer-open' class when the button is clicked
toggleBtn.addEventListener('click', function() {
    footer.classList.toggle('footer-open'); // Toggle the class
});

// Get the footer and the button
const phnmenu = document.getElementById('phn-menu');
const togglePhn = document.getElementById('togphnmenu');

// Toggle the 'footer-open' class when the button is clicked
togglePhn.addEventListener('click', function() {
    phnmenu.classList.toggle('hamb-open'); // Toggle the class
});