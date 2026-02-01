document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");

  // 1. 헤더 이벤트
  header.addEventListener("mouseenter", () => header.classList.add("on"));
  header.addEventListener("mouseleave", () => header.classList.remove("on"));

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. 탭 기능 통합 함수
  function setupTabs(btnSelector, contentSelector) {
    const buttons = document.querySelectorAll(btnSelector);
    const contents = document.querySelectorAll(contentSelector);

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab");
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        contents.forEach((content) => {
          content.classList.toggle("active", content.id === tabId);
        });
      });
    });
  }
  const btnMenu = document.querySelector(".btn-menu");
  if (btnMenu) {
    btnMenu.addEventListener("click", function (e) {
      e.preventDefault();
      header.classList.toggle("mobile-open");

      const icon = this.querySelector("i");
      if (header.classList.contains("mobile-open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
        document.body.style.overflow = "hidden";
      } else {
        icon.classList.replace("fa-xmark", "fa-bars");
        document.body.style.overflow = "";
      }
    });
  }

  setupTabs(".tab-btn1", ".tab-content1");
  setupTabs(".tab-btn2", ".tab-content2");

  // 3. Swiper 설정 및 게이지 컨트롤
  const progressBar = document.querySelector(".progress-bar .bar");
  const playBtn = document.querySelector(".btn-play");
  const pauseBtn = document.querySelector(".btn-pause");

  // updateProgress 함수를 위로 올리고, 매개변수로 swiper 객체를 받도록 수정
  function updateProgress(swiperInstance) {
    // 인자로 받은 swiperInstance가 없으면 함수 종료
    if (!swiperInstance || !swiperInstance.autoplay.running) return;

    // 강제 리플로우(Reflow)를 이용한 애니메이션 초기화
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    void progressBar.offsetWidth; // 이 코드가 핵심입니다.

    // 애니메이션 실행
    progressBar.style.transition = "width 5000ms linear";
    progressBar.style.width = "100%";
  }

  const mainSwiper = new Swiper(".main-slider", {
    loop: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: { nextEl: ".btn-next", prevEl: ".btn-prev" },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        document.querySelector(".total").innerText =
          totalSlides < 10 ? "0" + totalSlides : totalSlides;
        // init 시점에는 this가 곧 swiper 인스턴스입니다.
        updateProgress(this);
      },
      slideChangeTransitionStart: function () {
        // 슬라이드 이동 시작 즉시 게이지 정지 및 초기화
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";

        // 현재 페이지 번호 업데이트
        let current = this.realIndex + 1;
        document.querySelector(".current").innerText =
          current < 10 ? "0" + current : current;
      },
      slideChangeTransitionEnd: function () {
        // 전환 완료 후 재생
        updateProgress(this);
      },
    },
  });

  // 재생/일시정지 제어
  playBtn.addEventListener("click", () => {
    mainSwiper.autoplay.start();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    updateProgress(mainSwiper);
  });

  pauseBtn.addEventListener("click", () => {
    mainSwiper.autoplay.stop();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
  });
});

//4. 힐링 여행 섹션
const healingSwiper = new Swiper(".healing-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  lazy: true, // 이미지 지연 로딩 활성화
  preloadImages: false,
  watchSlidesProgress: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".healing-slider .swiper-button-next",
    prevEl: ".healing-slider .swiper-button-prev",
  },
  pagination: {
    el: ".healing-slider .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
});

//5. 트렌드 여행
const tBar = document.querySelector(".trend-progressbar .bar");

// 에러 방지를 위해 함수를 먼저 정의하거나 변수에 할당합니다.
const updateGage = (swiper) => {
  if (!tBar) return; // 게이지 바가 없으면 리턴

  // loop: true일 때 실제 슬라이드 개수를 정확히 가져오기
  const total = swiper.slides.filter(
    (s) => !s.classList.contains("swiper-slide-duplicate"),
  ).length;

  // 현재 인덱스 비율 계산 (realIndex 사용)
  const progress = ((swiper.realIndex + 1) / total) * 100;
  tBar.style.width = progress + "%";
};

const trendSwiper = new Swiper(".trend-slider", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: ".trend-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".trend-travel .btn-next",
    prevEl: ".trend-travel .btn-prev",
  },
  on: {
    init: function () {
      updateGage(this);
    },
    slideChange: function () {
      updateGage(this);
    },
  },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 15 },
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 },
  },
});

//5. 이벤트 여행
const eBar = document.querySelector(".event-progressbar .bar");

// 에러 방지를 위해 함수를 먼저 정의하거나 변수에 할당합니다.
const updateNewGage = (swiper) => {
  if (!eBar) return; // 게이지 바가 없으면 리턴

  // loop: true일 때 실제 슬라이드 개수를 정확히 가져오기
  const total = swiper.slides.filter(
    (s) => !s.classList.contains("swiper-slide-duplicate"),
  ).length;

  // 현재 인덱스 비율 계산 (realIndex 사용)
  const progress = ((swiper.realIndex + 1) / total) * 100;
  eBar.style.width = progress + "%";
};

const eventSwiper = new Swiper(".event-slider", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: ".event-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".event-travel .btn-next",
    prevEl: ".event-travel .btn-prev",
  },
  on: {
    init: function () {
      updateNewGage(this);
    },
    slideChange: function () {
      updateNewGage(this);
    },
  },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 15 },
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 },
  },
});
