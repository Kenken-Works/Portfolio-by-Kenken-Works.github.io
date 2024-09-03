window.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cool scroll animation
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            console.log("Scrolling Down");
            // Add custom animation or effect while scrolling down
        } else {
            console.log("Scrolling Up");
            // Add custom animation or effect while scrolling up
        }
        lastScrollTop = scrollTop;
    });
});
