function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

init()
let cursor = document.querySelector(".cursor")
document.querySelector(".main").addEventListener("mousemove",function(gets){
    gsap.to(cursor,{
        left : gets.x,
        top : gets.y
    })
})
document.querySelector(".main").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale : 1,
        opacity : 1,
        
    })
})
document.querySelector(".main").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale : 0,
        opacity : 0
    })
})
document.querySelector(".form-container").addEventListener("mouseenter",function(){
  cursor.style.display="none"
})
document.querySelector(".form-container").addEventListener("mouseleave",function(){
  cursor.style.display="block"
})
var tl = gsap.timeline()

tl.from("#loader .lv ul li",{
  x:200,
  rotate:360,
  duration:0.5,
  opacity:0,
  stagger:1
})
tl.from("#loader .branch p",{
  y:100,
  duration:0.5,
  delay:0.5,
  opacity:0,
  stagger:1
})
tl.to("#loader .lv",{
  y:100,
  opacity:0
})
tl.to("#loader .branch p",{
  x:200,
  duration:0.5,
  delay:0.5,
  opacity:0,
  
})
tl.to("#loader",{
  y:-1000,
  opacity:0,
  duration:2,
  display:"none"
  // duration:0.5
})
tl.from(".page1",{
  y:-100,
  opacity:0,
  duration:1
})
tl.from(".page1 video",{
  y:-100,
  opacity:0,
  duration:1
})
tl.to(".page2",{
  backgroundColor:"black",
  color:"white",
  duration:1,
   scrollTrigger:{
     trigger:".page1",
     scroller:".main",
     start:"top 50%",
     end:"top 30%",
    //  markers:true,
     scrub:2
   }
 })
 tl.from(".page2 .heading",{
   scale:0,
   duration:0.6,
   scrollTrigger:{
     trigger:".page1",
     scroller:".main",
     start:"top 70%",
     end:"top 60%",
     // markers:true,
     scrub:2
   }
 })
 tl.to(".au11 img",{
   x:50,
   duration:1,
   scrollTrigger:{
     trigger:".page1",
     scroller:".main",
     start:"top 50%",
     end:"top 30%",
     // markers:true,
     scrub:2
   }
   
 })
 tl.to(".au12",{
   x:-10,
   duration:1,
   scrollTrigger:{
     trigger:".page1",
     scroller:".main",
     start:"top 50%",
     end:"top 30%",
     // markers:true,
     scrub:2
   }
   
 })
 tl.to(".page2 .p2container .p2b2 .au21",{
   x:10,
   duration:1,
   scrollTrigger:{
     trigger:".page1",
     scroller:".main",
     start:"top 25%",
     end:"top 0%",
     // markers:true,
     scrub:2
   }
 })
 tl.to(".page2 .p2container .p2b2 .au22 img",{
   x:-10,
   duration:1,
   scrollTrigger:{
     trigger:".page1",
     scroller:".main",
     start:"top 25%",
     end:"top 0%",
    //  markers:true,
     scrub:2
   }
 })
tl.from(".page3 .p3up h1",{
  x:-1000,
  y:1000,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:".main",
    start:"top 10%",
    end:"top 0%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page3 .p3up h2",{
  x:1000,
  y:1000,
  duration:1,
  scrollTrigger:{
    trigger:".page2",
    scroller:".main",
    start:"top 10%",
    end:"top 0%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page4 h1",{
  x:500,
  duration:1,
  opacity :0,
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    start:"top 20%",
    end:"top 10%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page4 .container",{
  x:-500,
  duration:1,
  opacity :0,
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    start:"top 30%",
    end:"top 20%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page5 h1",{
  scale:0,
  duration:0.5,
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    start:"top 30%",
    end:"top 20%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page8 .footer p",{
  x:1000,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".page7",
    scroller:".main",
    start:"top 60%",
    end:"top 40%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page8 .footer a",{
  x:-1000,
  delay:1,
  opacity:0,
  duration:3,
  stagger:1,
  scrollTrigger:{
    trigger:".page7",
    scroller:".main",
    start:"top 40%",
    end:"top 20%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page8 .footer .footer-img img",{
  y:-1000,
  delay:1,
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:".page7",
    scroller:".main",
    start:"top 20%",
    end:"top 0%",
    // markers:true,
    scrub:2
  }
})
tl.from(".page8 .footer .contactus",{
  y:1000,
  delay:1,
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:".page7",
    scroller:".main",
    start:"top 0%",
    end:"top -20%",
    // markers:true,
    scrub:2
  }
})
