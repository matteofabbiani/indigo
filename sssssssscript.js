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
    spaceBetween: "-2px",
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
        spaceBetween: "-2px"
      },
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "-2px"
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: "-2px"
      },
      // desktop
      992: {
        slidesPerView: 1,
        spaceBetween: "-2px"
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

