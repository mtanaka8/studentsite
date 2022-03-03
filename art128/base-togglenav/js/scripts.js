document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU 
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
   menubutton.addEventListener('click',function () {
       if (menunav.getAttribute('data-navastate') === 'open') {
           // if true do this
           menunav.setAttribute('data-navastate', 'closed');    
       } else {
           // else (if false) do this:
           menunav.setAttribute('data-navstate', 'open');
       };
   });
    
});