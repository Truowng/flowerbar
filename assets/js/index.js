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

if (document.querySelector(".full-banner .banner-slider")) {
  const fullBannerSlider = new Swiper(".full-banner .banner-slider .swiper", {
    direction: "horizontal",
    speed: 1000,
    autoplay: {
      delay: 4000,
    },
    loop: true,
    effect: "fade",
  });
}

if (document.querySelector(".product-detail .detail-slider .swiper")) {
  const detailThumb = new Swiper(".product-detail .detail-thumb .swiper", {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 8,
    spaceBetween: 5,
    loop: true,
  });

  const detailSlider = new Swiper(".product-detail .detail-slider .swiper", {
    direction: "horizontal",
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    effect: "fade",
    thumbs: {
      swiper: detailThumb,
    },
  });
}
