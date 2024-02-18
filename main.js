let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const split = new SplitText("h3", { type: "chars" });

swiper
  .on("slideChangeTransitionStart", function () {
    gsap.to(split.chars, {
      yPercent: 120,
      stagger: 0.05,
    });
  })
  .on("slideChangeTransitionEnd", function () {
    gsap.to(split.chars, {
      yPercent: 0,
      stagger: 0.05,
    });
  });
