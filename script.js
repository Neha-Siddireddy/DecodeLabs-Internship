// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// =========================
// CLOSE MENU AFTER CLICKING
// =========================
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(
            this.getAttribute("href")
        );
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});