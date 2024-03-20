document.addEventListener("DOMContentLoaded", function() {
    // Shopify Bento Card Hover Border Gradient
    document.querySelectorAll(".ie-bento_card").forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            card.querySelector(".ie-bento_ss-wrapper-4-border").classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", function() {
            card.querySelector(".ie-bento_ss-wrapper-4-border").classList.remove("is-hovered");
        });
    });

    // Customization Bento Card Color
    document.querySelectorAll('.ie-bento_c-color-button').forEach(function(button) {
        button.addEventListener("click", function() {
            var colorClass = Array.from(button.classList).find(cls => cls.startsWith('is-'));
            document.querySelectorAll('.ie-bento_c-chat-bubble').forEach(function(bubble) {
                bubble.classList.remove(...bubble.classList);
                bubble.classList.add('ie-bento_c-chat-bubble', colorClass);
            });
            button.classList.add('is-active');
            document.querySelectorAll('.ie-bento_c-color-button.is-active').forEach(function(activeButton) {
                if (activeButton !== button) {
                    activeButton.classList.remove('is-active');
                }
            });
        });
    });

    // Customization Bento Card TOV
    document.querySelectorAll(".ie-bento_c-tov-button").forEach(function(button) {
        button.addEventListener("click", function() {
            var textClass = ".ie-bento_c-chat-text." + button.classList[1];
            var textElement = document.querySelector(textClass);
            document.querySelectorAll('.ie-bento_c-chat-text').forEach(function(el) {
                el.style.display = 'none';
            });
            textElement.style.display = 'block';
            button.classList.add('is-active');
            document.querySelectorAll('.ie-bento_c-tov-button.is-active').forEach(function(activeButton) {
                if (activeButton !== button) {
                    activeButton.classList.remove('is-active');
                }
            });
        });
    });

    // 4 Cards Row Customization card hover
    document.querySelectorAll('.x4cards_card.is-conv').forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            card.querySelectorAll('.x4cards_conv-number-wrapper, .x4cards_conv-number-text, .x4cards_conv-bars-image').forEach(function(element) {
                element.classList.add('is-active');
            });
        });

        card.addEventListener("mouseleave", function() {
            card.querySelectorAll('.x4cards_conv-number-wrapper, .x4cards_conv-number-text, .x4cards_conv-bars-image').forEach(function(element) {
                element.classList.remove('is-active');
            });
        });
    });
});

// Swiper slider
$(".slider-main_component").each(function(index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "0%",
    rewind: false,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // mobile portrait
      1: {
        slidesPerView: 1,
        spaceBetween: "0%"
      },
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "0%"
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: "0%"
      },
      // desktop
      992: {
        slidesPerView: 1,
        spaceBetween: "0%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });
});


// MARQUEE POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // marquee component
  $("[tr-marquee-element='component']").each(function (index) {
    let componentEl = $(this),
      panelEl = componentEl.find("[tr-marquee-element='panel']"),
      triggerHoverEl = componentEl.find("[tr-marquee-element='triggerhover']"),
      triggerClickEl = componentEl.find("[tr-marquee-element='triggerclick']");
    let speedSetting = attr(100, componentEl.attr("tr-marquee-speed")),
      verticalSetting = attr(false, componentEl.attr("tr-marquee-vertical")),
      reverseSetting = attr(false, componentEl.attr("tr-marquee-reverse")),
      scrollDirectionSetting = attr(false, componentEl.attr("tr-marquee-scrolldirection")),
      scrollScrubSetting = attr(false, componentEl.attr("tr-marquee-scrollscrub")),
      moveDistanceSetting = -100,
      timeScaleSetting = 1,
      pausedStateSetting = false;
    if (reverseSetting) moveDistanceSetting = 100;
    let marqueeTimeline = gsap.timeline({ repeat: -1, onReverseComplete: () => marqueeTimeline.progress(1) });
    if (verticalSetting) {
      speedSetting = panelEl.first().height() / speedSetting;
      marqueeTimeline.fromTo(panelEl, { yPercent: 0 }, { yPercent: moveDistanceSetting, ease: "none", duration: speedSetting });
    } else {
      speedSetting = panelEl.first().width() / speedSetting;
      marqueeTimeline.fromTo(panelEl, { xPercent: 0 }, { xPercent: moveDistanceSetting, ease: "none", duration: speedSetting });
    }
    let scrubObject = { value: 1 };
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (!pausedStateSetting) {
          if (scrollDirectionSetting && timeScaleSetting !== self.direction) {
            timeScaleSetting = self.direction;
            marqueeTimeline.timeScale(self.direction);
          }
          if (scrollScrubSetting) {
            let v = self.getVelocity() * 0.006;
            v = gsap.utils.clamp(-60, 60, v);
            let scrubTimeline = gsap.timeline({ onUpdate: () => marqueeTimeline.timeScale(scrubObject.value) });
            scrubTimeline.fromTo(scrubObject, { value: v }, { value: timeScaleSetting, duration: 0.5 });
          }
        }
      }
    });
    function pauseMarquee(isPausing) {
      pausedStateSetting = isPausing;
      let pauseObject = { value: 1 };
      let pauseTimeline = gsap.timeline({ onUpdate: () => marqueeTimeline.timeScale(pauseObject.value) });
      if (isPausing) {
        pauseTimeline.fromTo(pauseObject, { value: timeScaleSetting }, { value: 0, duration: 0.5 });
        triggerClickEl.addClass("is-paused");
      } else {
        pauseTimeline.fromTo(pauseObject, { value: 0 }, { value: timeScaleSetting, duration: 0.5 });
        triggerClickEl.removeClass("is-paused");
      }
    }
    if (window.matchMedia("(pointer: fine)").matches) {
      triggerHoverEl.on("mouseenter", () => pauseMarquee(true));
      triggerHoverEl.on("mouseleave", () => pauseMarquee(false));
    }
    triggerClickEl.on("click", function () {
      !$(this).hasClass("is-paused") ? pauseMarquee(true) : pauseMarquee(false);
    });
  });
});
