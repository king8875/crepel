//lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
lenis.raf(time * 600); 
});
gsap.ticker.lagSmoothing(0);


// h-hero gsap
const hero = gsap.timeline({
    scrollTrigger:{
        trigger: $('.h-hero__sticky-wrapper'),
        start:"0% 0%",
        end: "50% 0%",
        scrub:1,
    }
});
hero.to('.cloud-right_img',{ y:-50 })
hero.to('.cloud-left_img',{ y:100 },"<");

const hero1 = gsap.timeline({
    scrollTrigger:{
        trigger: $('.h-hero__about-wrapper'),
        start:"50% 50%",
        end: "100% 50%",
        scrub:1,
    }
});
hero1.to('.h-hero__about-mask',{ opacity:0.7 });


// h-wave gsap
gsap.set('.h-wave_img-wrapper .h-wave__image-parent',{
    y:50
});
const wave = gsap.timeline({
    scrollTrigger:{
        trigger:$('.h-wave_img-wrapper'),
        start:"20% 50%",
        end:"100% 50%",
        scrub:1,
    },
});
wave.to('.h-wave_img-wrapper .h-wave__image-parent',{
    y:0
})
wave.to('.h-wave__image-parent img:nth-child(9)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(8)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(7)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(6)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(5)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(4)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(3)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(2)',{
    opacity:0
})
wave.to('.h-wave__image-parent img:nth-child(1)',{
    opacity:0
});