// modal.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to open the modal
    function openModal() {
        const modal = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'block';
        }
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

if (openTetrisModalBtn) {
        // When the user clicks on the button, open the Tetris modal
        openTetrisModalBtn.onclick = function() {
            if (tetrisModal) {
                tetrisModal.style.display = "flex";
            }
        };
    }

    if (openContactModalBtn) {
        // When the user clicks on the button, open the Contact modal
        openContactModalBtn.onclick = function() {
            if (contactModal) {
                contactModal.style.display = "flex";
            }
        };
    }

    if (closeTetrisModalBtn) {
        // When the user clicks on the close button, close the Tetris modal
        closeTetrisModalBtn.onclick = function() {
            if (tetrisModal) {
                tetrisModal.style.display = "none";
            }
        };
    }

    if (closeContactModalBtn) {
        // When the user clicks on the close button, close the Contact modal
        closeContactModalBtn.onclick = function() {
            if (contactModal) {
                contactModal.style.display = "none";
            }
        };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == tetrisModal) {
            tetrisModal.style.display = "none";
        }
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    };

    // Opening and closing modals for other elements
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    if (openModalButton && closeModalButton) {
        openModalButton.addEventListener('click', function() {
            const myModal = document.getElementById('myModal');
            if (myModal) {
                myModal.style.display = 'block';
            }
        });

        closeModalButton.addEventListener('click', function() {
            const myModal = document.getElementById('myModal');
            if (myModal) {
                myModal.style.display = 'none';
            }
        });
    }
});
