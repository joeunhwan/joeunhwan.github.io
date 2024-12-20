//배지 스크롤 페이드
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll',_.throttle(
    function(){
        if(window.scrollY > 500){
            //badgeEl.style.display = 'none';
            //gsap.to(요소, 지속시간, 옵션);
            gsap.to(badgeEl, .4, {
                opacity : 0,
                display : 'none'
            })
            //스크롤탑 보이기
            gsap.to(toTopEl, .2, {
                x : 0
            });
        }else{
            //badgeEl.style.display = 'block';
            gsap.to(badgeEl, .4, {
                opacity : 1,
                display : 'block'
            })
            //스크롤탑 숨기기
            gsap.to(toTopEl, .2, {
                x : 100
            });
        }
    }, 300 ));


toTopEl.addEventListener('click',function(){
    gsap.to(window, .7, {
        scrollTo : 0
    });
});


// 비주얼 섹션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    // gsap.to(애니매이션 적용 요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7s
       opacity: 1 
    });
});

// 프로모션 활성화/비활성화
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromition = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromition = !isHidePromition;
    if(isHidePromition){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});


// 공지사항 스와이프
new Swiper('.notice-line .swiper',{
    direction : 'vertical',
    autoplay : true,
    loop: true
})

// 프로모션 스와이프
new Swiper('.promotion .swiper',{
    autoplay : {
        delay: 5000
    },
    loop : true,
    slidesPerView : 3,
    spaceBetween : 10,
    centeredSlides : true,
    pagination : {
        el : '.promotion .swiper-pagination',
        clickable : true
    },
    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    },
})

//어워드 스와이프

new Swiper('.awards .swiper',{
    autoplay : true,
    loop: true,
    spaceBetween : 30,
    slidesPerView : 5,
    navigation : {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next'
    },
})

// 반복애니메이션
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y : size,
        repeat : -1,
        yoyo : true,
        ease : 'power1.inOut',
        delay : random(0, delay),
    });
}



floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);




//스크롤매직
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement : spyEl, //보여짐에 여부를 감시할 요소
        triggerHook : .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});