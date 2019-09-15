const navSlide = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `nav-links-fade 0.5s ease forwards ${index / 7 +
            0.5}s`;
            }
        });
        burgerMenu.classList.toggle("toggle");
    });
};

navSlide();