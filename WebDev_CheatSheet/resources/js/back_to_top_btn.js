document.addEventListener("DOMContentLoaded", function () {
    // When the user scrolls down past the header, show the back-to-top button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        var backToTopBtn = document.getElementById("backToTopBtn");

        if (document.body.scrollTop > 238 || document.documentElement.scrollTop > 238) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // Scroll to the top of the page when the back-to-top button is clicked
    document.getElementById("backToTopBtn").addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTop();
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});
