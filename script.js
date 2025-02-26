const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let circle = document.querySelector('.mini-circle')
function circleMove() {
    window.addEventListener("mousemove", (dets)=>{
        // console.log(dets.clientX, dets.clientY);
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)` 
    })
}
circleMove()

function animation(){
    const tl = gsap.timeline();
tl.from('#nav', {
    y: -10,
    duration: 1,
    opacity: 0,
    ease: Expo.easeInOut,
})
tl.to('.boundingElem', {
   y: 0,
   duration: 1.5,
   delay: -1,
   stagger: .2,
   ease: Expo.easeInOut,
})
tl.from('#heroFooter', {
    y: -10,
    opacity: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut,
})
}
animation()


