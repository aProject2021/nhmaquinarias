document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    let scrollAmount = 0;
    let cardWidth = document.querySelector(".card").offsetWidth + 20; // Ancho dinámico

    function updateCardWidth() {
        cardWidth = document.querySelector(".card").offsetWidth + 20;
    }

    // Ajustar tamaño de desplazamiento en resize
    window.addEventListener("resize", updateCardWidth);

    rightBtn.addEventListener("click", () => {
        if (scrollAmount < track.scrollWidth - track.clientWidth) {
            scrollAmount += cardWidth;
            track.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    leftBtn.addEventListener("click", () => {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            track.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    dropdown.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
