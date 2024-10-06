if (document.querySelector("header .topbar .topbar-slider")) {
  const topbarSlider = new Swiper("header .topbar .topbar-slider .swiper", {
    direction: "horizontal",
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".half-banner .banner-slider")) {
  const halfBannerSlider = new Swiper(".half-banner .banner-slider .swiper", {
    direction: "horizontal",
    speed: 1000,
    autoplay: {
      delay: 4000,
    },
    loop: true,
    effect: "fade",
  });
}
