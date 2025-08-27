gsap.from(".section-title",{
    y:-150,
    duration:2,
    delay:1,
    stagger:1,
    opacity:0.8,
}) 


const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out"
  });
});
