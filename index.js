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



// h-spon gsap

const sponItem = $('.h-spon-item');

sponItem.on('mouseenter', function(){
    const sponImg = $(this).find('.spon_img'); // 호버한 요소 내의 .spon_img 선택

    gsap.to(sponImg, { 
        scale: 1, 
        duration: 0.5, 
        ease: "steps(5)", 
        snap: { 
            scale: [0,0.3, 0.5,0.7, 1],
        } 
    });
    gsap.to(sponImg, { 
        duration: 0.5, 
        ease: "steps(5)", 
        keyframes: [
            { rotate: 20 },  
            { rotate: 0 },  
            { rotate: -20 },  
            { rotate: 0 }, 
            { rotate: 0 }  
        ]
    });
});
sponItem.on('mouseleave', function(){
    const sponImg = $(this).find('.spon_img'); 

    gsap.to(sponImg, { 
        scale: 0, 
        duration: 0.5, 
        ease: "steps(5)", 
        snap: { scale: [1,0.7,0.5,0.3,0] }
    });
});


// cursor js
const cursor = $('.footer__cursor-parent');
gsap.set('.footer__cursor-parent', { scale: 0, xPercent: -50, yPercent: -50 });
const cursorvis = gsap.to('.footer__cursor-parent',{
    scrollTrigger:{
        trigger:'.ft__cursor-wrapper',
        start:"0% 50%",
        end:"100% 50%",
        scrub:1,
        onEnter: () => gsap.to('.footer__cursor-parent', { scale: 1, duration: 0.3 }), // 나타남
        onLeave: () => gsap.to('.footer__cursor-parent', { scale: 0, duration: 0.3 }), // 사라짐
        onEnterBack: () => gsap.to('.footer__cursor-parent', { scale: 1, duration: 0.3 }), // 다시 나타남
        onLeaveBack: () => gsap.to('.footer__cursor-parent', { scale: 0, duration: 0.3 }) // 다시 사라짐

    },
});



$(document).on('mousemove', function(e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // 부드러운 이동
        ease: "power2.out"
    });
});