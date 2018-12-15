$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(window).scrollTop() > 232) { 
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    $("#nav ul li a[href^='#']").on('click', function(e) {
        console.log('click');
        // prevent default anchor click behavior
        e.preventDefault();
     
        // store hash
        var hash = this.hash;
     
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){
     
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
          });
     
     });
});

