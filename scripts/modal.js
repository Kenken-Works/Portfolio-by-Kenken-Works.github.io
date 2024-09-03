// modal.js

// Function to open the modal
function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Get the modal elements
const tetrisModal = document.getElementById("tetrisModal");
const contactModal = document.getElementById("contactModal");

// Get the buttons that open the modals
const openTetrisModalBtn = document.getElementById("openTetrisModal");
const openContactModalBtn = document.getElementById("openContactModal");

// Get the elements that close the modals
const closeTetrisModalBtn = document.getElementById("closeTetrisModal");
const closeContactModalBtn = document.getElementById("closeContactModal");

// When the user clicks on the button, open the Tetris modal
openTetrisModalBtn.onclick = function() {
    tetrisModal.style.display = "flex";
}

// When the user clicks on the button, open the Contact modal
openContactModalBtn.onclick = function() {
    contactModal.style.display = "flex";
}

// When the user clicks on the close button, close the Tetris modal
closeTetrisModalBtn.onclick = function() {
    tetrisModal.style.display = "none";
}

// When the user clicks on the close button, close the Contact modal
closeContactModalBtn.onclick = function() {
    contactModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tetrisModal) {
        tetrisModal.style.display = "none";
    }
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

// Opening the modal using the 'openModal' function
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

// Closing the modal using the 'closeModal' function
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});
