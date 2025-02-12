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
wave.to('.h-wave_img-wrapper .h-wave__image-parent',{ y:0 })
wave.to('.h-wave__image-parent img:nth-child(9)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(8)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(7)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(6)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(5)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(4)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(3)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(2)',{ opacity:0 })
wave.to('.h-wave__image-parent img:nth-child(1)',{ opacity:0 });




// h-action gsap
const links = document.querySelectorAll('.h-action__img-wrapper .action__img-link');
const texts = document.querySelectorAll('.h-action__text');
const texts01 = document.querySelectorAll('.h-action__text.two');
const texts02 = document.querySelectorAll('.h-action__text.three');


gsap.set(texts01,{autoAlpha:0});
gsap.set(texts02,{autoAlpha:0});
const ac1 = gsap.timeline({
    scrollTrigger:{
        trigger:links[0],
        start:"100% 50%",
        end: "100% 50%",
        scrub:1,
    }
});

ac1.to(texts,{
    yPercent:-100
})
ac1.to(texts01,{
    autoAlpha:1
},"<")

const ac2 = gsap.timeline({
    scrollTrigger:{
        trigger:links[1],
        start:"100% 50%",
        end: "100% 50%",
        scrub:1,
    }
});
ac2.to(texts,{
    yPercent:-200
})

ac2.to(texts02,{
    autoAlpha:1
},"<");



const images = document.querySelectorAll('.action__img-link');
const sticky = document.querySelector('.h-action__sticky-wrapper .h-action__sticky');
images.forEach(img => {
    const actionMask = img.querySelector('.h-action__card-mask'); // 호버한 이미지의 마스크만 선택
    img.addEventListener('mouseenter', () => {
        gsap.to(sticky, { width: "40%", duration: 1, ease: "power2.in" }); // 너비 증가
        gsap.to(actionMask,{opacity:.5});
    });

    img.addEventListener('mouseleave', () => {
        gsap.to(sticky, { width: "100%", duration: 1, ease: "power2.in" }); // 원래 크기로 복귀
        gsap.to(actionMask,{opacity:0});

    });
});
