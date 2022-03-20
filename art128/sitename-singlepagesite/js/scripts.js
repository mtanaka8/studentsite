document.addEventListener('DOMContentLoaded', function() {

    // TOGGLE NAV MOBILE MENU FOR SMALL SCREENS 
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
   menubutton.addEventListener('click',function () {
       if (menunav.getAttribute('data-navastate') === 'open') {
           // if true do this 
           menunav.setAttribute('data-navastate', 'closed');    
       } else {
           //else (if false) do this:
           menunav.setAttribute('data-navstate', 'open');
       };
   });
    
});

  // STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES
  var stickynavlinks = document.querySelectorAll(".sticky nav a");
  var stickyheader = document.querySelector(".sticky");
  var j;
  for (j = 0; j < stickynavlinks.length; j++) {
      stickynavlinks[j].onclick = function () {
          stickyheader.setAttribute('data-navstate', 'closed');
      };
  };

}); 