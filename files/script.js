let lenis; // Declara a variável globalmente

document.addEventListener("DOMContentLoaded", () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Movendo as chamadas para dentro do evento DOMContentLoaded
  lenis.stop();
  document.body.classList.add("no-scroll");
});

let togglemenu = false;
let sidemenu = gsap.utils.toArray(".menu-side");
gsap.set(".word6", {
  y: "100%",
});
function toggleMenu() {
  if (togglemenu) {
    document.body.classList.remove("no-scroll");
    lenis.start();
    gsap.to(".barbottom", 0.2, {
      marginTop: "10px",
      rotate: 0,
    });
    gsap.to(".bartop", 0.2, {
      rotate: 0,
      y: "0",
    });
    gsap.to(".menu", 1, {
      top: "-100%",
      delay: 2.0,
    });
    gsap.to(sidemenu, {
      duration: 2,
      top: "-100%",
      stagger: 0.1,
      backgroundColor: "#00000000",
      delay: 2.0,
    });
    gsap.to(".left-shadow-menu, .right-shadow-menu", 1, {
      width: "0%",
      delay: 1.0,
    });
    gsap.to(".video-menu", 2, {
      opacity: 0,
      height: "0%",
      ease: "power3.inOut",
    });
    gsap.to(".word6", 1.5, {
      y: "100%",
      stagger: 0.1,
      ease: "power3.inOut",
    });
  } else {
    document.body.classList.add("no-scroll");
    lenis.stop();
    gsap.to(".barbottom", 0.2, {
      marginTop: "0px",
      rotate: 45,
      ease: "linear",
    });
    gsap.to(".bartop", 0.2, {
      y: "0",
      rotate: -45,
      ease: "linear",
    });
    gsap.to(".menu", 1, {
      top: 0,
    });
    gsap.to(sidemenu, {
      duration: 2,
      top: "0",
      stagger: 0.1,
      ease: "power3.inOut",
    });
    gsap.to(sidemenu, 1, {
      backgroundColor: "#000000",
      delay: 1.5,
    });
    gsap.to(".left-shadow-menu, .right-shadow-menu", 1, {
      width: "30%",
      delay: 2.5,
    });
    gsap.to(".video-menu", 2, {
      opacity: 1,
      height: "100%",
      ease: "power3.inOut",
      delay: 2.5,
    });
    gsap.to(".word6", 1.5, {
      y: "0%",
      delay: 2.5,
      stagger: 0.1,
      ease: "power3.inOut",
    });
  }

  togglemenu = !togglemenu;
}
gsap.from(".content-l-top, .content-l-bottom", 7, {
  opacity: 0,
  filter: "blur(10px)",
  x: "-25%",
});
gsap.to(".center-letter", 4, {
  "--opacity": 1,
});
gsap.from(".content-l-center", 7, {
  opacity: 0,
  x: "25%",
  filter: "blur(10px)",
});
gsap.from(".background-video", 5, {
  scale: 0.5,
  opacity: 0,
  ease: "power3.inOut",
});
gsap.to(".background-video", 2, {
  filter: "blur(10px)",
  scale: 1,
  opacity: 1,
  width: "100%",
  height: "100%",
  ease: "power2.inOut",
  delay: 5,
});
gsap.to(".letter-beggin", 1, {
  background: "#fff",
  delay: 5,
});
gsap.from(".grid-template-white", 1, {
  opacity: 0,
  delay: 6,
  onComplete: () => {
    document.body.classList.remove("no-scroll");
    lenis.start();
  },
});
gsap.from(".word-owner", 2, {
  y: "100%",
  stagger: 0.1,
  delay: 5.8,
  ease: "power3.inOut",
});
gsap.from(".menu-toggle", 1, {
  opacity: 0,
  delay: 6.0,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".homepage",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.registerPlugin(ScrollTrigger);
let blackLine = gsap.utils.toArray(".line-black");
tl.to(blackLine, {
  width: "100%",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".homepage",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
tl.to(".word-owner", {
  y: "100%",
  stagger: 0.1,
  ease: "power3.inOut",
});

tl.to(".line-init", {
  background: "#d1d1d1",
});
let projetstop = gsap.utils.toArray(".projects-part-top");
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-pro-part-top-1",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-pro-part-top-2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-pro-part-top-3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
gsap.set(".img-proj-top, .img-proj-center, .img-proj-end", {
  scale: 1.5,
});
tl2.to(".img-proj-top", {
  y: "220px",
  ease: "linear",
});
tl3.to(".img-proj-center", {
  y: "220px",
  ease: "linear",
});
tl4.to(".img-proj-end", {
  y: "220px",
  ease: "linear",
});
gsap.from(".pragraft-proj-1", {
  opacity: 0,
  ease: "power3.inOut",
});

gsap.from(".pragraft-proj-2", 2, {
  opacity: 0,
  ease: "power3.inOut",
});
gsap.from(".pragraft-proj-3", 2, {
  opacity: 0,
  ease: "power3.inOut",
});
gsap.to(".pragraft-proj-1", 2, {
  x: "0",
  opacity: 1,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".p-pro-part-top-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.from(".pragraft-proj-1-mini", {
  opacity: 0,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".p-pro-part-top-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.to(".pragraft-proj-2", 2, {
  opacity: 1,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".p-pro-part-top-2",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.from(".pragraft-proj-2-mini", {
  opacity: 0,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".p-pro-part-top-2",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.to(".pragraft-proj-3", {
  x: "0",
  opacity: 1,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".p-pro-part-top-3",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.from(".pragraft-proj-3-mini", {
  opacity: 0,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".p-pro-part-top-3",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
