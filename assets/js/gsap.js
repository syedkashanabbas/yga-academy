// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip, MotionPathPlugin);

// === Lenis Smooth Scroll ===
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// === Hero + Nav Initial Animations ===
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

// === Navbar Open/Close ===
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

// === Swiper Carousel ===
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

// === Parallax Scroll Animations ===
gsap.utils.toArray("[data-speed]").forEach(el => {
  gsap.to(el, {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      scrub: 1,
    }
  });
});

// === Canvas BG (Soft Bubble Movement) ===
const canvas = document.getElementById("eventsCanvas");

if (canvas && canvas.getContext) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    const section = document.querySelector(".upcoming-events");
    canvas.height = section ? section.offsetHeight : 500;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const bubbles = Array.from({ length: 20 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 20 + Math.random() * 30,
    dx: 0.4 + Math.random() * 0.6,
    dy: 0.2 + Math.random() * 0.5,
    opacity: 0.1 + Math.random() * 0.2
  }));

  function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let b of bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(68, 152, 162, ${b.opacity})`;
      ctx.fill();
      b.y -= b.dy;
      b.x += Math.sin(b.y / 20) * b.dx;

      if (b.y + b.r < 0) b.y = canvas.height + b.r;
    }
    requestAnimationFrame(drawBubbles);
  }

  drawBubbles();
}

// === Scroll Reveal Animations ===
gsap.utils.toArray(".event-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out",
  });
});

gsap.from(".feature-event-card", {
  scrollTrigger: {
    trigger: ".feature-event-card",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  x: 120,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// === Countdown Timer Logic ===
const eventDate = new Date("December 30, 2025 23:59:59").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    const wrapper = document.querySelector(".countdown-wrapper");
    if (wrapper) {
      wrapper.innerHTML = "<span>Event Started</span>";
      wrapper.style.justifyContent = "center";
    }
  }
}, 1000);
