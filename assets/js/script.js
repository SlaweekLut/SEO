const slideContainerServices = document.querySelector('.services__container');

window.addEventListener('resize', sliderServices)
window.onload = sliderServices()

function sliderServices() {
    if(screen.width < 769.8 && slideContainerServices.dataset.mobile == 'false') {
        swiperBenefit = new Swiper(".services__container", {
            slideClass: "services__item",
            wrapperClass: "services__content",
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            centeredSlides: true,
        });
        console.log("create");
        slideContainerServices.dataset.mobile = 'true'
    }
    if (screen.width > 770) {
        slideContainerServices.dataset.mobile = 'false'
        if(slideContainerServices.classList.contains('swiper-container-initialized')) {
            swiper.destroy()
        }
    }
}

const slideContainerHelped = document.querySelector('.helped__container');

window.addEventListener('resize', sliderHelped)
window.onload = sliderHelped()

function sliderHelped() {
    if(screen.width < 769.8 && slideContainerHelped.dataset.mobile == 'false') {
        swiperBenefit = new Swiper(".helped__container", {
            slideClass: "helped__item",
            wrapperClass: "helped__content",
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            centeredSlides: true,
        });
        console.log("create");
        slideContainerHelped.dataset.mobile = 'true'
    }
    if (screen.width > 770) {
        slideContainerHelped.dataset.mobile = 'false'
        if(slideContainerHelped.classList.contains('swiper-container-initialized')) {
            swiper.destroy()
        }
    }
}