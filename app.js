const topnav = document.getElementById('myTopnav')

window.onscroll = function() {changeMenuOnScroll()};

function changeMenuOnScroll() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    topnav.classList.add('changeColor')
  } else if (document.body.scrollTop < 150 & window.screen.availWidth > 600 || document.documentElement.scrollTop < 150 & window.screen.availWidth > 600){
    topnav.classList.remove('changeColor')
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

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" || x.className === "topnav changeColor") {
    x.classList.add('responsive')
  } else {
    x.classList.remove('responsive')
  }
}

function resize(){
  if(window.screen.availWidth < 600){
    topnav.classList.add('changeColor')
  }
}

// if(window.screen.availWidth < 600){
//   console.log('less')
// } else {
//   console.log('more')
// }
