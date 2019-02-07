const menu = document.getElementById('menu')

window.onscroll = function() {changeMenuOnScroll()};

function changeMenuOnScroll() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    menu.classList.add('changeColor')
  } else if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150){
    menu.classList.remove('changeColor')
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
