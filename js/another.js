
gsap.registerPlugin(ScrollTrigger);


// $(function(){
//   gsap.from(".circlebg", {
//     width: "0px", // 최종 너비
//     height: "0px", // 최종 높이
//     ease: "power1.out", // 부드러운 애니메이션 효과
//   }),
//   gsap.to(".circlebg", {
//     scrollTrigger: {
//       trigger: ".circlebg", // 애니메이션 시작 기준 요소
//       start: "top 90%", // 뷰포트에서 애니메이션 시작 위치 (트리거의 top이 뷰포트 80% 지점에 닿을 때)
//       end: "+=300", // 애니메이션 끝나는 위치
//       scrub: true, // 스크롤에 따라 애니메이션 동기화
//     },
//     width: "3000px", // 최종 너비
//     height: "3000px", // 최종 높이
//     duration: 10, // 애니메이션 지속 시간
//     ease: "power1.out", // 부드러운 애니메이션 효과
//     top: "40%",
//   });
// });

// $(function(){
//   gsap.from(".circlebg", {
//     width: "0px", // 최종 너비
//     height: "0px", // 최종 높이
//     ease: "power1.out", // 부드러운 애니메이션 효과
//   }),
//   gsap.to(".circlebg", {
//     scrollTrigger: {
//       trigger: ".circlebg", // 애니메이션 시작 기준 요소
//       start: "top 90%", // 뷰포트에서 애니메이션 시작 위치 (트리거의 top이 뷰포트 80% 지점에 닿을 때)
//       end: "+=300", // 애니메이션 끝나는 위치
//       scrub: true, // 스크롤에 따라 애니메이션 동기화
//     },
//     width: "3000px", // 최종 너비
//     height: "3000px", // 최종 높이
//     duration: 10, // 애니메이션 지속 시간
//     ease: "power1.out", // 부드러운 애니메이션 효과
//     top: "40%",
//   });
// });


const circletype = new CircleType(
  document.getElementById("rotated1")
).radius(100);
$(window).scroll(function(){
  var offset = $(window).scrollTop();
  offset = offset*0.4;

  $(".circular-text1").css({
      "transform" : "rotate(" + offset + "deg)"
  })
});

const circletype2 = new CircleType(
  document.getElementById("rotated2")
).radius(100);
$(window).scroll(function(){
  var offset = $(window).scrollTop();
  offset = offset*0.2;

  $(".circular-text2").css({
      "transform" : "rotate(" + offset + "deg)"
  })
});

const targets = gsap.utils.toArray(".split");
        
targets.forEach(target => {
  let SplitClient = new SplitType(target, {type: "lines, words, chars"}); //줄, 단어, 문자 단위로 분할
  let lines = SplitClient.lines;
  let words = SplitClient.words;
  let chars = SplitClient.chars;
 
  gsap.from(chars, {
    yPercent: 100, // 문자가 아래에서 위로
    autoAlpha: 0, // 점차 나타나게
    duration: 1, // 애니메이션 1초동안
    ease: "circ.out", // 곡선 형태로 부드럽게 조정
    stagger: {
      amount: 1,
      from : "random"
    },
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      end: "+=800",
      markers: false
    }
  });
});

