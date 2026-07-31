const counters = document.querySelectorAll(".stat-card h2");

const speed = 200;

counters.forEach(counter => {

    if (counter.innerText.includes("/")) return;

    const updateCount = () => {

        const target = +counter.innerText.replace("+","");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if(count < target){

            counter.setAttribute("data-count", count + increment);

            counter.innerText = Math.min(count + increment, target) + "+";

            setTimeout(updateCount,10);

        }

    };

    updateCount();

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Hide preloader after page loads
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});
// Lightbox Gallery

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});