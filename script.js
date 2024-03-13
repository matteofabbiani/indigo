<!-- Shopify Bento Card Hover Border Gradient -->
<script>
    $(document).ready(function() {
        $(".ie-bento_card").hover(
            function() {
                $(this).find(".ie-bento_ss-wrapper-4-border").addClass("is-hovered");
            },
            function() {
                $(this).find(".ie-bento_ss-wrapper-4-border").removeClass("is-hovered");
            }
        );
    });
</script>







<!-- Customization Bento Card Color -->
<script>
$(document).ready(function(){
  $('.ie-bento_c-color-button').click(function(){
    var colorClass = $(this).attr('class').split(' ').filter(function(cls) {
      return cls.startsWith('is-');
    }).join(' ');
    $('.ie-bento_c-chat-bubble').removeClass().addClass('ie-bento_c-chat-bubble ' + colorClass);
  });
});


$(document).ready(function(){
  $('.ie-bento_c-color-button').click(function(){
    $(this).addClass('is-active').siblings('.ie-bento_c-color-button').removeClass('is-active');
  });
});
</script>




<!-- Customization Bento Card TOV -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with class 'ie-bento_c-tov-button'
  const buttons = document.querySelectorAll(".ie-bento_c-tov-button");

  // Loop through each button
  buttons.forEach(function(button) {
    // Add click event listener to each button
    button.addEventListener("click", function() {
      // Get the corresponding text element
      const textClass = ".ie-bento_c-chat-text." + button.classList[1];
      const textElement = document.querySelector(textClass);

      // Hide all text elements
      document.querySelectorAll('.ie-bento_c-chat-text').forEach(function(el) {
        el.style.display = 'none';
      });

      // Display the clicked text element
      textElement.style.display = 'block';
    });
  });
});


$(document).ready(function(){
  $('.ie-bento_c-tov-button').click(function(){
    $(this).addClass('is-active').siblings('.ie-bento_c-tov-button').removeClass('is-active');
  });
});
</script>






<!-- 4 Cards Row Customization card hover -->
<script>
    $(document).ready(function(){
        $('.x4cards_card.is-conv').hover(
            function(){
                $(this).find('.x4cards_conv-number-wrapper, .x4cards_conv-number-text, .x4cards_conv-bars-image').addClass('is-active');
            },
            function(){
                $(this).find('.x4cards_conv-number-wrapper, .x4cards_conv-number-text, .x4cards_conv-bars-image').removeClass('is-active');
            }
        );
    });
</script>












<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
<script>
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
</script>
