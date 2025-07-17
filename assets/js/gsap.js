let body_tl = gsap.timeline();

body_tl.from("nav", {
  y: -200,
  opacity: 0,
  delay: 1,
});

body_tl.from("#hero .section_heading span.d-inline-block", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.25,
  delay: 0.5,
});

$("#showNav").on("click", function () {
  let nav_tl = gsap.timeline();

  nav_tl.to("#navbar", {
    transform: "translateX(0%)",
    ease: "power.out",
    duration: 0.35,
  });

  nav_tl.from(
    ".navItem",
    {
      opacity: 0,
      x: 100,
      duration: 0.5,
      stagger: -0.25,
    },
    "0.1"
  );
});

$("#closeNav").on("click", function () {
  gsap.to("#navbar", {
    transform: "translateX(100%)",
    ease: "power.in",
    duration: 0.35,
  });
});

 const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
