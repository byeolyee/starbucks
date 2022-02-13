
// header submenu 검색

// const { default: Swiper } = require("swiper");

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '')
})




//header badges 천천히 사라지고 나타나게 하는 애니메이션 

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지 숨기기
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));
//_.throttle(함수, 시간)



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