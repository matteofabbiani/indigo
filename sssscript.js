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


// GSAP and ScrollTrigger Libraries
import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js';
import ScrollTrigger from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js';

// Marquee Power-Up
window.addEventListener("DOMContentLoaded", function() {
    // Attribute value checker
    function attr(defaultVal, attrVal) {
        const defaultValType = typeof defaultVal;
        if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
        if (attrVal === "true" && defaultValType === "boolean") return true;
        if (attrVal === "false" && defaultValType === "boolean") return false;
        if (isNaN(attrVal) && defaultValType === "string") return attrVal;
        if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
        return defaultVal;
    }

    // Marquee component
    document.querySelectorAll("[tr-marquee-element='component']").forEach(function(componentEl) {
        let panelEl = componentEl.querySelector("[tr-marquee-element='panel']");
        let triggerHoverEl = componentEl.querySelector("[tr-marquee-element='triggerhover']");
        let triggerClickEl = componentEl.querySelector("[tr-marquee-element='triggerclick']");
        
        let speedSetting = attr(100, componentEl.getAttribute("tr-marquee-speed"));
        let verticalSetting = attr(false, componentEl.getAttribute("tr-marquee-vertical"));
        let reverseSetting = attr(false, componentEl.getAttribute("tr-marquee-reverse"));
        let scrollDirectionSetting = attr(false, componentEl.getAttribute("tr-marquee-scrolldirection"));
        let scrollScrubSetting = attr(false, componentEl.getAttribute("tr-marquee-scrollscrub"));
        let moveDistanceSetting = reverseSetting ? 100 : -100;
        let timeScaleSetting = 1;
        let pausedStateSetting = false;
        
        let marqueeTimeline = gsap.timeline({ repeat: -1, onReverseComplete: function() { marqueeTimeline.progress(1); } });
        
        if (verticalSetting) {
            speedSetting = panelEl.clientHeight / speedSetting;
            marqueeTimeline.fromTo(panelEl, { yPercent: 0 }, { yPercent: moveDistanceSetting, ease: "none", duration: speedSetting });
        } else {
            speedSetting = panelEl.clientWidth / speedSetting;
            marqueeTimeline.fromTo(panelEl, { xPercent: 0 }, { xPercent: moveDistanceSetting, ease: "none", duration: speedSetting });
        }
        
        let scrubObject = { value: 1 };
        
        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: function(self) {
                if (!pausedStateSetting) {
                    if (scrollDirectionSetting && timeScaleSetting !== self.direction) {
                        timeScaleSetting = self.direction;
                        marqueeTimeline.timeScale(self.direction);
                    }
                    
                    if (scrollScrubSetting) {
                        let v = self.getVelocity() * 0.006;
                        v = gsap.utils.clamp(-60, 60, v);
                        let scrubTimeline = gsap.timeline({ onUpdate: function() { marqueeTimeline.timeScale(scrubObject.value); } });
                        scrubTimeline.fromTo(scrubObject, { value: v }, { value: timeScaleSetting, duration: 0.5 });
                    }
                }
            }
        });
        
        function pauseMarquee(isPausing) {
            pausedStateSetting = isPausing;
            let pauseObject = { value: 1 };
            let pauseTimeline = gsap.timeline({ onUpdate: function() { marqueeTimeline.timeScale(pauseObject.value); } });
            
            if (isPausing) {
                pauseTimeline.fromTo(pauseObject, { value: timeScaleSetting }, { value: 0, duration: 0.5 });
                triggerClickEl.classList.add("is-paused");
            } else {
                pauseTimeline.fromTo(pauseObject, { value: 0 }, { value: timeScaleSetting, duration: 0.5 });
                triggerClickEl.classList.remove("is-paused");
            }
        }
        
        if (window.matchMedia("(pointer: fine)").matches) {
            triggerHoverEl.addEventListener("mouseenter", function() { pauseMarquee(true); });
            triggerHoverEl.addEventListener("mouseleave", function() { pauseMarquee(false); });
        }
        
        triggerClickEl.addEventListener("click", function() {
            if (!triggerClickEl.classList.contains("is-paused")) {
                pauseMarquee(true);
            } else {
                pauseMarquee(false);
            }
        });
    });
});
