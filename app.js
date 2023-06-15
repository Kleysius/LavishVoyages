AOS.init()

// background image slider
const sliderImage = ["img7.png", "img8.png", "img9.png", "img10.png", "img11.png", "img12.png"];

let slider = document.querySelector(".background-image");
let sliderGridItems = [...document.querySelectorAll(".grid-item")];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGridItems.map((gridItem, index) => {
        setTimeout(() => {

            gridItem.classList.remove('hide');

            setTimeout(() => {

                if (index === sliderGridItems.length - 1) {
                    if (currentImage >= sliderImage.length - 1) {
                        currentImage = 0;
                    } else {
                        currentImage++;
                    }

                    slider.src = `img/${sliderImage[currentImage]}`;

                    sliderGridItems.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i * 100)
                    })
                }

            }, 100)

        }, index * 100)
    })
}

// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 188) {
        navbar.classList.add('bg')
    } else {
        navbar.classList.remove('bg')
    }
});