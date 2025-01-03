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

//////////////////////////////////////////////////////////////////////

//Lenis 스크롤 부드럽게 하는 효과
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////////////////////////////////////////////////////////////////////

// VISUAL 섹션
setTimeout(function(){
    const boxes = document.querySelectorAll('.video-deco');

    // 애니메이션 실행 함수
    function animateWidth(element, duration) {
    let start = null; // 애니메이션 시작 시간
    const initialWidth = 0; // 시작 너비 0%
    const targetWidth = 100; // 목표 너비 100%
    let minusWidth = 100;

    // 애니메이션 프레임 실행 함수
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1); // 진행률 계산 (0~1)
        const currentWidth = initialWidth + progress * (targetWidth - initialWidth);
        element.style.width = currentWidth + "%"; // 현재 너비 적용

        if (progress < 1) {
        requestAnimationFrame(step); // 다음 프레임 요청
        }
    }

    requestAnimationFrame(step); // 애니메이션 시작
    }

    // 모든 요소에 애니메이션 실행
        boxes.forEach((box) => {
        animateWidth(box, 1000); // 2초 동안 애니메이션 실행
    });
}, 3000);

setTimeout(function(){
    const boxes2 = document.querySelectorAll('.h1-bg');

    // 애니메이션 실행 함수
    function animateWidth2(element, duration) {
        let start = null; // 애니메이션 시작 시간
        const initialWidth = 100; // 시작 너비 100%
        const targetWidth = 0; // 목표 너비 0%

    // 애니메이션 프레임 실행 함수
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1); // 진행률 계산 (0~1)
        const currentWidth = initialWidth - progress * (initialWidth - targetWidth);
        element.style.width = currentWidth + "%"; // 현재 너비 적용

        if (progress < 1) {
        requestAnimationFrame(step); // 다음 프레임 요청
        }
    }

    requestAnimationFrame(step); // 애니메이션 시작
    }

    // 모든 요소에 애니메이션 실행
        boxes2.forEach((box) => {
        animateWidth2(box, 1000); // 2초 동안 애니메이션 실행
    });
}, 3000);

//////////////////////////////////////////////////////////////////////

// WORK 섹션
const workEl = document.querySelector('.work-des .work-item');
const workImgEl = workEl.querySelector('.item-img img')
let observer1 = new IntersectionObserver((e)=>{
    e.forEach((imgbox)=>{
        if(imgbox.isIntersecting){
            imgbox.target.style.opacity = 1;
            imgbox.target.style.transform = `rotate(`+ 0 +`deg)`;
        }else{
            imgbox.target.style.opacity = 0;
            imgbox.target.style.transform = `rotate(`+ 8 +`deg)`;
        }
    })
})

let woItem = document.querySelectorAll('.work-item img');

observer1.observe(woItem[0])
observer1.observe(woItem[1])
observer1.observe(woItem[2])
observer1.observe(woItem[3])
observer1.observe(woItem[4])

// //캐러셀 플러그인

// //step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// // let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 1000;
// // let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// // let runNextAuto = setTimeout(() => {
// //     next.click();
// // }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     // clearTimeout(runNextAuto);
//     // runNextAuto = setTimeout(() => {
//     //     next.click();
//     // }, timeAutoNext)
// }

//////////////////////////////////////////////////////////////////////

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

//////////////////////////////////////////////////////////////////////

// CONTACT 섹션
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact-wrap-hidden .contact-box',
        start: 'top 60%',
        end: '+=500',
        scrub: 1,
        // markers: true // 마커 표시 (디버깅용)
    }
});

// 타임라인에 애니메이션 추가
tl.from(".contact-wrap-hidden .contact-box .contact-form", {
    rotateX: 50,      // rotateX에 단위를 추가하지 않아도 GSAP가 자동으로 deg로 처리
    rotateY: -40,
    width: "50%",     // width에 단위를 추가 (예: px 또는 %)
    opacity: 0      // opacity는 숫자만으로도 OK
}).to(".contact-wrap-hidden .contact-box .contact-form", {
    rotateX: 0,
    rotateY: 0,
    width: "100%",    // 원래 크기로 복원
    opacity: 1
});



