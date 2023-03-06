var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



gsap.from(".img1 img", {
    delay: 0.4,
    // opacity: 0,
    duration: 1,
    y: 180
})
gsap.from(".img2 img", {
    delay: 0.4,
    // opacity: 0,
    duration: 1,
    x: 180
})
gsap.from(".img3 img", {
    delay: 0.4,
    // opacity: 0,
    duration: 1,
    x: -180
})
gsap.from(".pg2-txt,.pg2-txt1,.pg2-txt2", {
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".pg2-txt",
        scroller: "body",
        start: "top 80%",
        // markers: true

    }
})
gsap.from(".pg3-img1,.pg3-img2,.pg3-img3,.pg3-txt,.pg3-txt1", {
    opacity: 0,
    y: 60,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".pg3-img1,.pg3-img2,.pg3-img3,.pg3-txt,.pg3-txt1",
        scroller: "body",
        start: "top 70%"

    }

})
gsap.from(".pg4-txt,.pg4-txt1", {
    opacity: 0,
    y: 60,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".pg4-txt,.pg4-txt1",
        scroller: "body",
        start: "top 70%"
    }
})
gsap.from(".pg5-box1,.pg5-box2,.pg6-txt", {
    opacity: 0,
    y: 60,

    scrollTrigger: {
        trigger: ".pg5-box1,pg5-box2,.pg6-txt",
        scroller: "body",
        start: "top 70%"
    }
})
gsap.from(".pg8-txt1,", {
    opacity: 0,
    y: 60,
    scrollTrigger: {
        trigger: ".pg8-txt1",
        scroller: "body",
        start: "top 70%"
    }
})