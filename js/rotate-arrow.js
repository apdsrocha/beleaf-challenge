(function(doc){
  let containerMobile = doc.querySelector('.cart__chevron');
  let chevronMobile = doc.querySelector('.cart__chevron-img');
  let containerDesktop = doc.querySelector('.cart__counter-desktop');
  let chevronDesktop = doc.querySelector('.cart__chevron-img-desktop');
  let open = false;


  let addRotation = function( icon ) {
    if(open){
      icon.className = 'arrow-down';  
    } else{
      icon.className = 'arrow-down open';
    }
    open = !open;
  }

  containerMobile.addEventListener('click', function(){ addRotation( chevronMobile )});
  containerDesktop.addEventListener('click', function(){ addRotation( chevronDesktop )});

})(document);