(function(doc) {
  'use strict';

  let btnNavDesktop = doc.querySelector('.cart__counter-desktop');
  let btnNavMobile = doc.querySelector('.cart__counter-mobile');
  let btnNavClose = doc.querySelector('.navigation-desktop__close-btn');


  let mainDishes = doc.querySelector('.main')
  let navDesktop = doc.querySelector('.navigation-desktop');
  let navMobile = doc.querySelector('.navigation-mobile');

  let open = function( main, navigation ) {
    if(navigation.classList.contains("active")) {
      navigation.classList.remove("active");
      main.style.opacity = "1";
    }
    else {
      navigation.classList.add("active");
      main.style.opacity = "0.5";
    }
  }

  let close = function( main, navigation) {
    navigation.classList.remove("active");
    main.style.opacity = "1";
}

  btnNavDesktop.addEventListener('click', function() { open( mainDishes, navDesktop) });
  btnNavClose.addEventListener('click', function() {close( mainDishes, navDesktop)})
  btnNavMobile.addEventListener('click', function() { open( mainDishes, navMobile) });

})(document);