const menu = document.getElementById('menu')

window.onscroll = function() {changeMenuOnScroll()};

function changeMenuOnScroll() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    menu.classList.add('changeColor')
  } else if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150){
    menu.classList.remove('changeColor')
  }
}
