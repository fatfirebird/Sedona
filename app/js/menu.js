let menuShow = document.querySelector('.button--menu');
let menuClose = document.querySelector('.button--close')

menuShow.addEventListener('click', showMenu);
menuClose.addEventListener('click', showMenu);

function showMenu() {
  navigation = document.getElementsByClassName('nav-item');
  if (navigation[0].style.display == 'none') {
    for (let i = 0; i < navigation.length; i++) {
      navigation[i].style.display = 'block';
    }
  } else
  if (navigation[0].style.display == '' || navigation[0].style.display == 'block') {
    for (let i = 0; i < navigation.length; i++) {
      navigation[i].style.display = 'none';
    }
  }
  logo = document.querySelector('.nav-item--logo');
  logo.style.display = 'block';
};

showMenu();
