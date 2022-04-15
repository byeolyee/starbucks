
//header badges 천천히 사라지고 나타나게 하는 애니메이션 + scroll top
const badgeEl = document.querySelector('header .badges');
const scrollTop = document.querySelector('#to-the-top');

window.addEventListener('scroll', _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지 숨기기
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
        //top 버튼 보이기
        gsap.to(scrollTop, .5, {
            x: 0
        })
    } else {
        //배지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        })
        //top 버튼 숨기기
        gsap.to(scrollTop, .5, {
            x: 100
        });
    }
}, 300));
//_.throttle(함수, 시간)

scrollTop.addEventListener('click', () => {
    gsap.to(window, .7, {
        scrollTo: 0,
    })
})

//visual 이미지 순차적으로 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});


//NOTICE slide 기능 구현
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
}); //js생성자


//PROMOTION slide 구현
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 3000
    },
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자 
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion;
    console.log(isHidePromotion)
    if (isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //보임 처리
        promotionEl.classList.remove('hide');
    }
})

//YOUTUBE 영상 floating 이미지 
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObj(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay),
    });
}

floatingObj('.floating1', 1, 15);
floatingObj('.floating2', 0.5, 15);
floatingObj('.floating3', 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여지는 여부를 감시할 요소를 지정
            triggerHook: .8,

        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
    //Scene 특정 요소를 감시하는 옵션을 지정

})

//AWARDS slide
new Swiper('.awards .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000
    },
    loop: true,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

//FOOTER 해당연도 기입
const el = document.querySelector('.this-year');
const date = new Date();
const year = date.getFullYear();
el.textContent = year;
