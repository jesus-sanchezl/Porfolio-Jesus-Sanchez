document.addEventListener("DOMContentLoaded", function () {
                const scrollToTopButton = document.getElementById("scrollToTopBtn");
    
                
                window.addEventListener("scroll", function () {
                    
                    if (window.scrollY >= window.innerHeight / 2) {
                        scrollToTopButton.style.display = "block";
                    } else {
                     
                        scrollToTopButton.style.display = "none";
                    }
                });
    
                scrollToTopButton.addEventListener("click", function () {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            });