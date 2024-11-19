document.addEventListener('DOMContentLoaded', (Event)=>{
    gsap.registerPlugin(MotionPathPlugin);
    gsap.to("#img-1 ", {
        duration: 25, 
        repeat: -1,
        ease: "none",
        motionPath:{
            start:0,
            end: 1.1,
          path: "#path_1",
          align: "#path_1",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
    });
    gsap.to("#img-2", {
        duration: 25, 
        repeat: -1,
        ease: "none",
        motionPath:{
          start:0.1,
          end: 1.2,
          path: "#path_1",
          align: "#path_1",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
    });
    gsap.to("#img-3", {
        duration: 25, 
        repeat: -1,
        ease: "none",
        motionPath:{
            start:0.25,
            end: 1.3,
          path: "#path_1",
          align: "#path_1",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
    });
    gsap.to("#img-4", {
        duration: 25, 
        repeat: -1,
        ease: "none",
        motionPath:{
            start:0.45,
            end: 1.5,
          path: "#path_1",
          align: "#path_1",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
    });
    gsap.to("#img-5", {
        duration: 25, 
        repeat: -1,
        ease: "none",
        motionPath:{
            start:0.65,
            end: 1.7,
          path: "#path_1",
          align: "#path_1",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
    });
    gsap.to("#img-6", {
        duration: 25, 
        repeat: -1,
        ease: "none",
        motionPath:{
            start:0.85,
            end: 1.9,
          path: "#path_1",
          align: "#path_1",
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
    });
})
document.addEventListener('DOMContentLoaded', (event) =>{
    gsap.registerPlugin(ScrollTrigger);
    

const t1 = gsap.timeline({default: {ease: "power4.out", duration: 1 }})

gsap.set("#rainbow svg", {
    autoAlpha: 1
})
gsap.set("#rainbow",{
    xPercent: -12
})
gsap.to('#rainbow svg', {
    scale: 1.1,
    duration: 4
})

gsap.from('#sun_circle', {
    duration: 2,
    yPercent: -10,
})


gsap.to('#shaking_square', {
    scrollTrigger: {
        trigger: "#shaking_square",
        toggleActions: "restart none none none ",
        start: "center center",
        //scrubs: true,
        //markers: true,
    },
    xPercent: 775,
    rotation: 360,
    duration: 3
  
})
gsap.to('#shaking_square', {
   delay:3,
    x: '3px',
    ease: "sine.out",
    duration: 0.2, 
    repeat: -1, 
    yoyo: true, 
  
})
gsap.to('#cubes', {
    scrollTrigger: {
        trigger: "#shaking_square",
        toggleActions: "restart none none none ",
        start: "top center",
        //markers: true,
    },
    xPercent: -486,
    rotation: 360,
    duration: 4
})

gsap.to('#cubes', {
     delay:3,
     y: '15px',
     ease: "sine.in",
     duration: 2, 
     repeat: -1, 
     yoyo: true, 
   
})
gsap.to('#new_box', {
    
    x: '3px',
    ease: "power4.out",
    duration: 0.9, 
    repeat: -1, 
    yoyo: true, 
  
})
gsap.to('#popular', {
    scrollTrigger: {
        trigger: "#popular",
        toggleActions: "restart none none none ",
        start: "top center",
        //markers: true,
    },
    YPercent: -486,
    y: '2px',
    ease: "sine.in",
    duration: 0.3, 
    repeat: -1, 
    yoyo: true, 
  
})
gsap.to('#spring', {
    scrollTrigger: {
        trigger: "#spring",
        toggleActions: "restart none none none ",
        start: "top center",
        //markers: true,
    },
    xPercent: 300,
    rotation: 360,
    duration: 4
})

gsap.to('#spring', {
     delay:3,
     y: '15px',
     ease: "sine.in",
     duration: 2, 
     repeat: -1, 
     yoyo: true, 
   
})

t1
.from('#rainbow svg path', {
    yPercent: -200,
    stagger: 0.03,
    skewY: 40,
    skewX: 20,
    scaleY: 0.9,
    opacity: 0,
    repeat: -1,
    repeatDelay:0.5
})
.from('#rainbow_second svg path', {
    yPercent: -200,
    stagger: 0.03,
    skewY: 40,
    skewX: 20,
    scaleY: 0.9,
    opacity: 0,
    repeat: -1,
    repeatDelay:0.5
})
.from('#rainbow_three svg path', {
    yPercent: -200,
    stagger: 0.03,
    skewY: 40,
    skewX: 20,
    scaleY: 0.9,
    opacity: 0,
    repeat: -1,
    repeatDelay:0.5
})
// gsap.to("#path-1", { 
//     rotation: 360,
//     ease: "sine.out",
//     duration: 10, 
//     repeat: -1, 
//     yoyo: true, 
//   });
gsap.to("#screen_05", { 
    y: '20px',
    ease: "sine.out",
    duration: 2, 
    repeat: -1, 
    yoyo: true, 
});
  gsap.to("#screen_06", { 
    y: '25px',
    ease: "sine.out",
    duration: 2, 
    repeat: -1, 
    yoyo: true,
});




})






  

