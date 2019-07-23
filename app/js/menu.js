var menuShow  = document.querySelector('.button--menu');
var menuClose = document.querySelector('.button--close');

menuShow.addEventListener('click', showMenu);
menuClose.addEventListener('click', showMenu);

function showMenu() {
  navigation = document.getElementsByClassName('nav-item');
  if (navigation[0].style.display == 'none') {
    for (var i = 0; i < navigation.length; i++) {
      navigation[i].style.display = 'block';
    }
  } else
  if (navigation[0].style.display == '' || navigation[0].style.display == 'block') {
    for (var i = 0; i < navigation.length; i++) {
      navigation[i].style.display = 'none';
    }
  }
  logo = document.querySelector('.nav-item--logo');
  logo.style.display = 'block';
};

function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() < 768) {
  showMenu();
}
