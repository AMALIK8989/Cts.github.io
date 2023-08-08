$(document).ready(function() {
    // Add your jQuery code here
    // This code will be executed once the document is ready
  
    // Example: Smooth scrolling to section
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });
  
    // Example: Toggle navbar on mobile
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').slideToggle();
    });
  });