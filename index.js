//lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
lenis.raf(time * 600); 
});
gsap.ticker.lagSmoothing(0);



const hero = gsap.timeline({
    scrollTrigger:{
        trigger: $('.h-hero__sticky-wrapper'),
        start:"0% 0%",
        end: "50% 0%",
        scrub:1,
    }
});
hero.to('.cloud-right_img',{
    y:-50
})
hero.to('.cloud-left_img',{
    y:100
},"<");


const hero1 = gsap.timeline({
    scrollTrigger:{
        trigger: $('.h-hero__about-wrapper'),
        start:"50% 50%",
        end: "100% 50%",
        scrub:1,
        markers:1,

    }
});
hero1.to('.h-hero__about-mask',{
    opacity:0.7
})