window.addEventListener('DOMContentLoaded', (event) => {
    // Adding scroll event listener
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        console.log("Scroll Position: ", scrollPosition);
    });

    // Function to scroll down by one screen height
    function scrollDown() {
        window.scrollBy({
            top: window.innerHeight, // Move by one viewport height
            behavior: 'smooth' // Smooth scrolling
        });
    }

    // Function to scroll up by one screen height
    function scrollUp() {
        window.scrollBy({
            top: -window.innerHeight, // Move by one viewport height
            behavior: 'smooth' // Smooth scrolling
        });
    }

    // Example: automatically scroll down after 2 seconds
    setTimeout(scrollDown, 2000);

    // Attach scroll functions to button or events as needed
});
