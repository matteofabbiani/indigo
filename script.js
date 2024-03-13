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











