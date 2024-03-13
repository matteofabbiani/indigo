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
