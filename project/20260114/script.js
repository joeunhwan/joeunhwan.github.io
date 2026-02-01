/* script.js 전체 수정 */
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
CustomEase.create("hop", "0.85, 0, 0.15, 1");

const counterProgress = document.querySelector(".section1-counter h1");
const counter = { value: 0 };

document.addEventListener("DOMContentLoaded", () => {
  const isTop = window.scrollY < 50;

  if (isTop) {
    // 1. 최상단인 경우: 기존 로딩 애니메이션 진행
    window.scrollTo(0, 0);
    document.body.classList.add("no-scroll");

    let split = SplitText.create(".section1-header h1", {
      type: "words",
      mask: "words",
      wordsClass: "word",
    });

    const counterT1 = gsap.timeline({ delay: 0.5 });
    const overlayTextT1 = gsap.timeline({ delay: 0.75 });
    const revealT1 = gsap.timeline({ delay: 0.5 });

    counterT1.to(counter, {
      value: 100,
      duration: 5,
      ease: "power2.out",
      onUpdate: () => {
        counterProgress.textContent = Math.floor(counter.value);
      },
    });

    overlayTextT1
      .to(".section1-overlay-text", { y: "0", duration: 0.75, ease: "hop" })
      .to(".section1-overlay-text", {
        y: "-6rem",
        duration: 0.75,
        ease: "hop",
        delay: 0.75,
      })
      .to(".section1-overlay-text", {
        y: "-12rem",
        duration: 0.75,
        ease: "hop",
        delay: 0.75,
      })
      .to(".section1-overlay-text", {
        y: "-18rem",
        duration: 0.75,
        ease: "hop",
        delay: 1,
      });

    revealT1
      .to(".img", { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "hop" })
      .to(".section1-imgs", {
        gap: "0.75vw",
        duration: 1,
        delay: 0.5,
        ease: "hop",
      })
      .to(".img", { scale: 1, duration: 1, ease: "hop" }, "<")
      .to(".img:not(.main-img)", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "hop",
      })
      .to(".main-img", { scale: 2, duration: 1, ease: "hop" })
      .to(".section1-overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "hop",
      })
      .to(
        ".section1-header h1 .word",
        { y: "0", duration: 0.75, stagger: 0.1, ease: "power3.out" },
        "-=0.5",
      )
      .add(() => {
        document.body.classList.remove("no-scroll");
      });
  } else {
    // 2. 이미 내려가 있는 경우: 로딩 생략 및 상태 강제 설정
    document.body.classList.remove("no-scroll");

    gsap.set(".section1-overlay", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    });
    gsap.set(".section1-header h1 .word", { y: "0" });

    // [수정] 메인 이미지가 보이도록 opacity와 위치를 잡습니다
    gsap.set(".main-img", {
      opacity: 1,
      y: 0,
      scale: 2,
    });

    gsap.set(".img:not(.main-img)", {
      opacity: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    });
  }

  // ScrollTrigger 애니메이션 (항상 실행)
  gsap.to(".section2-container", {
    scrollTrigger: {
      trigger: ".section2",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
    x: "0%",
    ease: "none",
  });

  gsap.to(".section2-content", {
    scrollTrigger: {
      trigger: ".section2",
      start: "top center",
      end: "top top",
      scrub: true,
    },
    opacity: 1,
  });
});

// 네비게이션 클릭 시 부드러운 스크롤 이동
document.querySelectorAll(".nav-items a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const targetId = href.split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 1. ScrollTrigger가 적용된 섹션인지 확인
      const trigger = ScrollTrigger.getAll().find(
        (st) =>
          st.vars.trigger === `#${targetId}` || st.trigger === targetElement,
      );

      if (trigger && targetId === "third") {
        // Section 3처럼 pin이 걸린 경우, 해당 trigger의 시작 지점으로 이동
        window.scrollTo({
          top: trigger.start,
          behavior: "smooth",
        });
      } else {
        // 일반 섹션 이동
        const offsetTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// 섹션 사이 텍스트
gsap.to(".scroll-row.left .scroll-text", {
  scrollTrigger: {
    trigger: ".section-scroll",
    start: "top bottom", // 섹션이 화면 아래에 걸릴 때 시작
    end: "bottom top", // 섹션이 화면 위로 나갈 때 종료
    scrub: 1, // 스크롤 속도에 부드럽게 반응 (숫자가 클수록 부드러움)
  },
  x: "-30%", // 왼쪽으로 이동
  ease: "none",
});

// 오른쪽으로 흐르는 텍스트
gsap.to(".scroll-row.right .scroll-text", {
  scrollTrigger: {
    trigger: ".section-scroll",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
  x: "30%", // 오른쪽으로 이동
  ease: "none",
});

//섹션3
gsap.to(".project-wrapper", {
  scrollTrigger: {
    trigger: ".section3",
    start: "top top", // 섹션 상단이 화면 상단에 닿을 때 시작
    end: "+=2000", // 스크롤을 2000px 내리는 동안 애니메이션 진행
    scrub: 1,
    pin: true, // 섹션을 화면에 고정
    anticipatePin: 1,
  },
  // wrapper 전체를 왼쪽으로 미는데, 카드 뭉치 너비만큼 이동
  x: () =>
    -(
      document.querySelector(".project-wrapper").scrollWidth - window.innerWidth
    ),
  ease: "none",
});

//섹션4
const cursor = document.createElement("div");
cursor.className = "custom-cursor";
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

// 프로젝트 카드에 호버 시 커서 변화
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    cursor.innerText = "VIEW";
  });
  card.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursor.innerText = "";
  });
});

//푸터 텍스트 애니메이션
gsap.from(".footer-title h2", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 80%", // 푸터가 80% 정도 보일 때 시작
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
});

//네비게이션 색상 변경
const nav = document.querySelector("nav");
const darkSections = [".section2", ".section4"];

darkSections.forEach((sectionSelector) => {
  ScrollTrigger.create({
    trigger: sectionSelector,
    start: "top 10%", // 섹션 상단이 화면 상단에 10% 정도 도달했을 때
    end: "bottom 10%", // 섹션 하단이 화면 상단 10%를 지날 때
    onEnter: () => nav.classList.add("inverted"), // 섹션 진입 시 흰색으로
    onEnterBack: () => nav.classList.add("inverted"), // 아래에서 위로 다시 진입 시 흰색으로
    onLeave: () => nav.classList.remove("inverted"), // 섹션을 완전히 벗어나면 검은색으로
    onLeaveBack: () => nav.classList.remove("inverted"), // 위로 올라가서 섹션을 벗어나면 검은색으로
  });
});

ScrollTrigger.create({
  trigger: ".section4",
  start: "top top",
  end: "bottom bottom",
  pin: false /* 마지막 섹션은 고정(pin)하지 않는 것이 더 안정적입니다 */,
  pinSpacing: false,
  onEnter: () => {
    // 푸터에 도달했을 때 스크롤이 더 나가지 않도록 보정
    window.scrollTo(0, document.body.scrollHeight);
  },
});

// 모든 ScrollTrigger 연산 후 새로고침 (레이아웃 틀어짐 방지)
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
