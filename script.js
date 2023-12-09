document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navItems = document.querySelector(".navitem");

    hamburger.addEventListener("click", function () {
        navItems.classList.toggle("show");
    });
});

