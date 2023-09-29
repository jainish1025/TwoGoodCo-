function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}
init();

function navbarAnimation(){
  gsap.from("#nav #logo svg", {
    transform: "translateY(-120%)",
    scrollTrigger: {
      trigger: "#page-1",
      scroller: "#main",
      // markers: true,
      start: "top 0",
      end: "top -5%",
      scrub: 2,
    },
  });

  gsap.to("#nav #nav-items-1", {
    transform: "translateY(-100px)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page-1",
      scroller: "#main",
      // markers: true,
      start: "top 0",
      end: "top -5%",
      scrub: 2,
    },
  });
}

navbarAnimation();

var crsr = document.querySelector(".cursor");

function cursor() {
  window.addEventListener("mousemove", function (dets) {
    crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}
cursor();

function VideocontAnimation() {
  var videocont = document.querySelector("#video-container");
  var platbtn = document.querySelector("#play");

  videocont.addEventListener("mousemove", function (dets) {
    gsap.to(platbtn, {
      left: dets.clientX - 70,
      top: dets.clientY - 90,
    });
  });

  videocont.addEventListener("mouseenter", function () {
    gsap.to(platbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videocont.addEventListener("mouseleave", function () {
    gsap.to(platbtn, {
      scale: 0,
      opacity: 0,
    });
  });
}
VideocontAnimation();

function page1Animation() {
  gsap.from(
    "#page-1 h1",
    {
      y: 90,
      stagger: 0.2,
      opacity: 0,
      duration: 1,
      ease: "power3.easeInOut",
    },
    "em"
  );

  gsap.from(
    "#page-1 #video-container",
    {
      scale: 0.8,
      stagger: 0.2,
      opacity: 0,
      duration: 0.3,
    },
    "em"
  );
}
page1Animation();

function page3Animation() {
  var children = document.querySelectorAll(".child");

  children.forEach(function (child) {
    child.addEventListener("mouseenter", function () {
      crsr.style.width = "9vw";
      crsr.style.height = "9vw";
    });

    child.addEventListener("mouseleave", function () {
      crsr.style.width = "1.4vw";
      crsr.style.height = "1.4vw";
    });
  });
}
page3Animation();

// gsap.from("#page1 #box", {
//   y: -200,
//   scale: 0,
//   duration: 1,
//   delay: 0.5,
//   rotate: 180,
// });

// gsap.from("#page3 #box", {
//   y: -200,
//   scale: 0,
//   duration: 1,
//   delay: 0.5,
//   rotate: 180,
//   scrollTrigger:{
//     trigger: "#page3 #box",
//     scroller: "#main",
//     markers: true,
//     start: "top 70%",
//     end: "top 30%",
//     scrub: 2,
//   }
// });
