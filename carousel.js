const Carousel = new (class Carousel {
    constructor() {
        this.images = [...document.querySelectorAll(".img-container img")];
        this.images.forEach((e) => {
            const circles = document.querySelector(".circles");
            const div = document.createElement("div");
            if (e.classList.contains("active")) {
                div.classList.add("activeDot");
            }
            circles.append(div);
        });
        this.dots = [...document.querySelectorAll(".circles div")];
    }
    disableActiveImage() {
        const index = this.images.findIndex((e) =>
            e.classList.contains("active")
        );
        this.images[index].classList.remove("active");
        return index;
    }
    removeActiveDot() {
        this.dots
            .find((el) => el.classList.contains("activeDot"))
            .classList.remove("activeDot");
    }
    next() {
        const index = this.disableActiveImage();
        this.removeActiveDot();
        if (index === this.images.length - 1) {
            this.images[0].classList.add("active");
            this.dots[0].classList.add("activeDot");
            return;
        }
        this.images[index + 1].classList.add("active");
        this.dots[index + 1].classList.add("activeDot");
    }
    prev() {
        const index = this.disableActiveImage();
        this.removeActiveDot();
        if (index === 0) {
            this.images[this.images.length - 1].classList.add("active");
            this.dots[this.images.length - 1].classList.add("activeDot");
            return;
        }
        this.images[index - 1].classList.add("active");
        this.dots[index - 1].classList.add("activeDot");
    }
    dot(e) {
        this.removeActiveDot();
        e.target.classList.add("activeDot");
        this.disableActiveImage();
        const targetDot = this.dots.findIndex((el) => el == e.target);
        this.images[targetDot].classList.add("active");
    }
})();

const nextImage = document
    .querySelector(".left")
    .addEventListener("click", Carousel.prev.bind(Carousel));
const previousImage = document
    .querySelector(".right")
    .addEventListener("click", Carousel.next.bind(Carousel));

const dots = document
    .querySelectorAll(".circles div")
    .forEach((e) => e.addEventListener("click", (e) => Carousel.dot(e)));

setInterval(() => {
    Carousel.next();
}, 2300);
