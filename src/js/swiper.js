import Swiper from 'swiper/bundle';

const carouselSwiper = new Swiper(".carousel-swiper", {
    loop: true,
    spaceBetween: 80,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".carousel__pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 4
    },
});

const carouselImagesList = carouselSwiper.slides.map((slide, index) =>
    slide.getElementsByTagName('img').item(0)
);
const carouselDots = document.getElementsByClassName('carousel__pagination').item(0).getElementsByClassName('swiper-pagination-bullet');
for (let i = 0; i < carouselImagesList.length; i++) {
    carouselDots.item(i).style.backgroundImage = `url(${carouselImagesList[i].src})`;
}