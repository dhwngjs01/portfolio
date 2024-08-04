const handleSlideMove = (slideNumber) => {
  if ($(".navbar-collapse").hasClass("show")) {
    $(".navbar-toggler").click();
  }

  swiper.slideTo(slideNumber);
};

const navColorChange = (currentSlide) => {
  $("ul.navbar-nav li a").removeClass("active");

  if (currentSlide == 0) {
    $("#nav").removeClass("navbar-scroll");
  } else {
    $("#nav").addClass("navbar-scroll");
    $("ul.navbar-nav li")
      .eq(currentSlide - 1)
      .children("a")
      .addClass("active");
  }
};

const swiper = new Swiper(".swiper-container", {
  speed: 800,
  direction: "vertical",
  mousewheel: true,
  keyboard: true,
  mouseclick: true,
  slidesPerView: "auto",
  on: {
    touchMove: function () {
      if (this.realIndex == 0) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }
    },
    scroll: function () {
      if (this.realIndex == 0) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }
    },
    slideChange: function () {
      currentSlide = this.activeIndex;
      navColorChange(currentSlide);
    },
  },
});

swiper.on("slideChangeTransitionEnd", function () {
  var acs = document.querySelectorAll(".swiper-slide-active")[0];
  var hasVerticalScrollbar = acs.scrollHeight > acs.clientHeight;

  if (hasVerticalScrollbar) {
    var scrollHeight = acs.scrollHeight;
    var slideSize = acs.swiperSlideSize;
    var scrollDifferenceTop = scrollHeight - slideSize;

    acs.addEventListener("wheel", findScrollDirectionOtherBrowsers);

    function findScrollDirectionOtherBrowsers(event) {
      var scrollTop = acs.scrollTop;
      scrollHeight = acs.scrollHeight;
      slideSize = acs.swiperSlideSize;
      var scrollDifference = scrollHeight - (scrollTop + slideSize);
      var delta;

      if (event.wheelDelta) {
        delta = event.wheelDelta;
      } else {
        delta = -1 * event.deltaY;
      }

      if (delta < 0) {
        if (scrollDifference < 1) {
          swiper.mousewheel.enable();
        } else {
          swiper.mousewheel.disable();
        }
      } else if (delta > 0) {
        if (scrollDifference == scrollDifferenceTop) {
          swiper.mousewheel.enable();
        } else {
          swiper.mousewheel.disable();
        }
      }
    }
  } else {
    swiper.mousewheel.enable();
  }
});
