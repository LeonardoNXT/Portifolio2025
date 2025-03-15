let lenis; // Declara a variável globalmente

document.addEventListener("DOMContentLoaded", () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    smoothTouch: true,
    lerp: 0.05,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.stop();
  document.body.classList.add("no-scroll");

  const conteinerAbout = document.querySelectorAll(".block-test-div");
  conteinerAbout.forEach((item) => {
    for (let i = 0; i < 240; i++) {
      const div = document.createElement("div");
      div.classList.add("block-about-top-test");
      item.appendChild(div);
    }
  });
});

let togglemenu = false;
let sidemenu = gsap.utils.toArray(".menu-side");
gsap.set(".word6", {
  y: "100%",
});
function toggleMenu() {
  videomenu = document.querySelector(".video-menu");
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
      onComplete: () => {
        videomenu.pause();
      },
    });
    gsap.to(".word6", 1.5, {
      y: "100%",
      stagger: 0.1,
      ease: "power3.inOut",
    });
  } else {
    document.body.classList.add("no-scroll");
    lenis.stop();
    videomenu.play();
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
  x: "-10%",
});
gsap.to(".center-letter", 4, {
  "--opacity": 1,
});
gsap.from(".content-l-center", 7, {
  opacity: 0,
  x: "100%",
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
console.clear();

const circleElement = document.querySelector(".circle");
const imgElement = document.querySelector(".img-test");
const imgElement2 = document.querySelector(".img-test-2");

const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };
const img = { x: 0, y: 0 };
const img2 = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
  if (window.innerWidth < 900) {
    return; // Impede a animação se a largura da janela for menor que 900px
  }
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  img.x += (mouse.x - img.x) * speed;
  img.y += (mouse.y - img.y) * speed;
  img2.x += (mouse.x - img2.x) * speed;
  img2.y += (mouse.y - img2.y) * speed;

  const imgTransform = `translate(${img.x}px, ${img.y}px)`;
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
  const imgTransform2 = `translate(${img2.x}px, ${img2.y}px)`;
  const selectTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;

  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );

  const scaleValue = (mouseVelocity / 150) * 0.5;

  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
  imgElement.style.transform = imgTransform;
  imgElement2.style.transform = imgTransform2;

  window.requestAnimationFrame(tick);
};

tick();
gsap.set(".img-test-2, .img-test-1", {
  scale: 1.5,
});

let menutugle = document.querySelector(".menu-toggle");
let imgContent = document.querySelector(".img-sec-img");
let ImgContent2 = document.querySelector(".img-sec-img-2");

menutugle.addEventListener("mouseenter", () => {
  const circle = document.querySelector(".circle");
  circle.style.setProperty("--circle-size", "100px");
  circle.style.background = "#fff";
});
menutugle.addEventListener("mouseleave", () => {
  const circle = document.querySelector(".circle");
  circle.style.setProperty("--circle-size", "60px");
  circle.style.background = "transparent";
});
imgContent.addEventListener("mouseenter", () => {
  const circle = document.querySelector(".circle");
  circle.style.setProperty("--circle-size", "100px");
  circle.style.background = "#fff";
  imgElement.style.width = "10vw";
  imgElement.style.height = "10vw";
});
imgContent.addEventListener("mouseleave", () => {
  const circle = document.querySelector(".circle");
  circle.style.setProperty("--circle-size", "60px");
  circle.style.background = "transparent";
  imgElement.style.width = "0vw";
  imgElement.style.height = "0vw";
});
ImgContent2.addEventListener("mouseenter", () => {
  const circle = document.querySelector(".circle");
  circle.style.setProperty("--circle-size", "100px");
  circle.style.background = "#fff";
  imgElement2.style.width = "15vw";
  imgElement2.style.height = "8vw";
  imgElement2.play();
});
ImgContent2.addEventListener("mouseleave", () => {
  const circle = document.querySelector(".circle");
  circle.style.setProperty("--circle-size", "60px");
  circle.style.background = "transparent";
  imgElement2.style.width = "0vw";
  imgElement2.style.height = "0vw";
  imgElement2.pause();
  imgElement2.currentTime = 0;
});
gsap.to(".content-bottom-about-resumed", {
  top: "0%",
  scrollTrigger: {
    trigger: ".bottom-about-resumed",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});

const paragraph2 = document.querySelector(".text-top-r-a");
const newDiv2 = document.createElement("div");
newDiv2.className = paragraph2.className;
const text2 = paragraph2.textContent;
const characters2 = text2.split("");

characters2.forEach((char) => {
  const charDiv = document.createElement("div");
  charDiv.className = "word2 word1";
  charDiv.textContent = char;
  newDiv2.appendChild(charDiv);
});

paragraph2.replaceWith(newDiv2);

gsap.set(".word1", {
  y: "100%",
  rotate: "45deg",
});
gsap.to(".word1", {
  y: "0%",
  rotate: "0deg",
  stagger: 0.09,
  scrollTrigger: {
    trigger: ".top-about-resumed",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});

const paragraph = document.querySelector(".text-bottom-r-a");
const newDiv = document.createElement("div");
newDiv.className = paragraph.className;
const text = paragraph.textContent;
const characters = text.split("");

characters.forEach((char) => {
  const charDiv = document.createElement("div");
  charDiv.className = "word2 word3";
  charDiv.textContent = char;
  newDiv.appendChild(charDiv);
});

paragraph.replaceWith(newDiv);

gsap.set(".word3", {
  y: "100%",
  rotate: "45deg",
});
gsap.to(".word3", {
  y: "0%",
  rotate: "0deg",
  stagger: 0.09,
  scrollTrigger: {
    trigger: ".bottom-about-resumed",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.set(".text-center-r-a, .l-c-p-1", {
  opacity: 0,
});
gsap.to(".text-center-r-a, .l-c-p-1", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".c-a-r-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.set(".text-center-r-a-2, .l-c-p-2", {
  opacity: 0,
});
gsap.to(".text-center-r-a-2, .l-c-p-2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".center-about-resumed-2",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});
