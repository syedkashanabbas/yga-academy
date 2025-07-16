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

// overviewCardsSlider
// overviewSlide

gsap.to(".overviewCardsSlider.fowardSlider", {
  transform: "translateX(200%)",
  duration: 420,
  repeat: -1,
});

gsap.to(".overviewCardsSlider.reverseSlider", {
  transform: "translateX(-200%)",
  duration: 420,
  repeat: -1,
});

let program_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#programs",
    start: "top 75%",
  },
});
program_tl.to("#programsBg", {
  width: "100%",
  ease: "power.in",
  duration: 1,
});
program_tl.from("#programs .section_heading", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power.out",
});

program_tl.from("#programs .section_text", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power.out",
});

program_tl.from(".programCardCont .col-12", {
  opacity: 0,
  y: 100,
  duration: 0.75,
  stagger: 0.4,
  ease: "back.out",
});

let hightlights_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#highlights_heading",
    pin: true,
    scrub: 2,
  },
});

hightlights_tl.to("#highlights_heading .heading", {
  transform: "translateX(-80%)",
  duration: 1,
});
