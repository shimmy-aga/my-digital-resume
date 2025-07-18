$(document).ready(function() {
    $(window).resize();
})



// ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
// Change Header On Scroll  // ------------------------ // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // 



$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
if ((st > lastScrollTop) && (lastScrollTop>150)) {
       // downscroll code
    $('.header').addClass('active');
   } if((st < lastScrollTop) && (lastScrollTop<150)) {
      // upscroll code
    $('.header').removeClass('active');
   }
       lastScrollTop = st;
    });
});



// ------------------------------ // ------------------------ // 
//                                // ------------------------ // 
// ------------------------------ // ------------------------ // ------------------------ // 
// Show Active Section in navbar  // ------------------------ // ------------------------ // 
// ------------------------------ // ------------------------ // ------------------------ // 
//                                // ------------------------ // 
// ------------------------------ // ------------------------ // 



$(function() {
    $(window).scroll(function() {
        var heightOfBanner = $('.banner').height() 
        var heightOfIntroduction = $('#introduction').height() 
        var heightOfPortfolio = $('#portfolio').height()
        var heightOfSkills = $('#skills').height() 
        var heightOfCertifications = $('#certifications').height() 


        var introductionNav = $('.navbar-desktop a[href="#introduction"]')
        var portfolioNav = $('.navbar-desktop a[href="#portfolio"]')
        var skillsNav = $('.navbar-desktop a[href="#skills"]')
        var connectNav = $('.navbar-desktop a[href="#connect"]')

        if ($(window).scrollTop() >= heightOfBanner && $(window).scrollTop() <= heightOfBanner + heightOfIntroduction) {

            introductionNav.addClass('active')

            skillsNav.removeClass('active')
            connectNav.removeClass('active')
            portfolioNav.removeClass('active')
        
        }

        else if ($(window).scrollTop() >= heightOfBanner + heightOfIntroduction && $(window).scrollTop() <= heightOfBanner + heightOfIntroduction + heightOfPortfolio) {
        
            portfolioNav.addClass('active')

            introductionNav.removeClass('active')
            connectNav.removeClass('active')
            skillsNav.removeClass('active')
        
        }

        else if ($(window).scrollTop() >= heightOfBanner + heightOfIntroduction + heightOfPortfolio && $(window).scrollTop() <= heightOfBanner + heightOfIntroduction + heightOfPortfolio + heightOfSkills + heightOfCertifications) {
        
            skillsNav.addClass('active')

            introductionNav.removeClass('active')
            connectNav.removeClass('active')
            portfolioNav.removeClass('active')
        
        }

        else if ($(window).scrollTop() >= heightOfBanner + heightOfIntroduction + heightOfPortfolio + heightOfSkills + heightOfCertifications) {
        
            connectNav.addClass('active')

            introductionNav.removeClass('active')
            skillsNav.removeClass('active')
            portfolioNav.removeClass('active')
        
        }

        else {
            introductionNav.removeClass('active')
            skillsNav.removeClass('active')
            connectNav.removeClass('active')
            portfolioNav.removeClass('active')
        }

    })
});



// ------------------------------ // ------------------------ // 
//                                // ------------------------ // 
// ------------------------------ // ------------------------ // ------------------------ // 
// Show Active Section on mobile  // ------------------------ // ------------------------ // 
// ------------------------------ // ------------------------ // ------------------------ // 
//                                // ------------------------ // 
// ------------------------------ // ------------------------ // 



$(function() {
    $(window).scroll(function() {
        var heightOfBanner = $('.banner').height()
        var heightOfIntroduction = $('#introduction').height()
        var heightOfPortfolio = $('#portfolio').height()
        var heightOfSkills = $('#skills').height()
        var heightOfCertifications = $('#certifications').height() 
        

        var introductionNav = $('.mobile-header a[href="#introduction"]')
        var skillsNav = $('.mobile-header a[href="#skills"]')
        var connectNav = $('.mobile-header a[href="#connect"]')

        if ($(window).scrollTop() >= heightOfBanner && $(window).scrollTop() <= heightOfBanner + heightOfIntroduction + heightOfPortfolio) {

            introductionNav.addClass('active')

            skillsNav.removeClass('active')
            connectNav.removeClass('active')
        
        }
        else if ($(window).scrollTop() >= heightOfBanner + heightOfIntroduction + heightOfPortfolio && $(window).scrollTop() <= heightOfBanner + heightOfIntroduction + heightOfPortfolio + heightOfSkills) {
        
            skillsNav.addClass('active')

            introductionNav.removeClass('active')
            connectNav.removeClass('active')
        
        }

        else if ($(window).scrollTop() >= heightOfBanner + heightOfIntroduction + heightOfPortfolio + heightOfSkills + heightOfCertifications) {
        
            connectNav.addClass('active')

            introductionNav.removeClass('active')
            skillsNav.removeClass('active')
        
        }

        else {
            introductionNav.removeClass('active')
            skillsNav.removeClass('active')
            connectNav.removeClass('active')
        }

    })
});







function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
  }
  
  if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
  
        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;
  
          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
}



// -------------------------- // ------------------------ // 
//                            // ------------------------ // 
// -------------------------- // ------------------------ // ------------------------ // 
// Glider Carousel / Slider   // ------------------------ // ------------------------ // 
// -------------------------- // ------------------------ // ------------------------ // 
//                            // ------------------------ // 
// -------------------------- // ------------------------ // 



////////////////////////////////////////////////////
// Slider Next //                         //      //
////////////////////////////////////////////////////   


$(function() {

    $('.slider').addClass('slide-1');
    
    $('.slider-next').on('click', function() {
        if ($('.slider').hasClass('slide-1')) {
            $('.slider').removeClass('slide-1');
            $('.slider').addClass('slide-2');
        } else if ($('.slider').hasClass('slide-2')) {
            $('.slider').removeClass('slide-2');
            $('.slider').addClass('slide-3');
        } else if ($('.slider').hasClass('slide-3')) {
            $('.slider').removeClass('slide-3');
            $('.slider').addClass('slide-4');
        } else {
            $('.slider').removeClass('slide-4');
            $('.slider').addClass('slide-1');
        }
    });
});


////////////////////////////////////////////////////
// Slider Prev //                         //      //
////////////////////////////////////////////////////   


$(function() {

    $('.slider').addClass('slide-1');
    
    $('.slider-prev').on('click', function() {
        if ($('.slider').hasClass('slide-4')) {
            $('.slider').removeClass('slide-4');
            $('.slider').addClass('slide-3');
        } else if ($('.slider').hasClass('slide-3')) {
            $('.slider').removeClass('slide-3');
            $('.slider').addClass('slide-2');
        } else if ($('.slider').hasClass('slide-2')) {
            $('.slider').removeClass('slide-2');
            $('.slider').addClass('slide-1');
        } else {
            $('.slider').removeClass('slide-1');
            $('.slider').addClass('slide-4');
        }
    });
});




var sticky_offset;
$(document).ready(function() {

    var original_position_offset = $('.portrait-image').offset();
    sticky_offset = original_position_offset.top;
    $('.portrait-image').css('position', 'absolute');


});

$(window).scroll(function () {
    var sticky_height = $('.portrait-image').outerHeight();
    var where_scroll = $(window).scrollTop() + $(window).height();
    var window_height = $(window).height();
    var heightOfBanner = $('.banner').height() 
    var heightOfIntroduction = $('#introduction').height() 


    if(where_scroll > window_height + heightOfBanner + (0.15 * heightOfBanner)) {
        $('.portrait-image').css('position', 'fixed');
        $('.portrait-image').css('bottom', 'unset');
        $('.portrait-image').css('top', '10%');
    }

    if(where_scroll > window_height + heightOfIntroduction + (1.1 * sticky_height) && $(window).width() > 1325) {
        $('.portrait-image').css('position', 'absolute');
        $('.portrait-image').css('top', 'unset');
        $('.portrait-image').css('bottom', '10%');
    } 

    if(where_scroll > window_height + heightOfIntroduction + (1.75 * sticky_height) && $(window).width() < 1325) {
        $('.portrait-image').css('position', 'absolute');
        $('.portrait-image').css('top', 'unset');
        $('.portrait-image').css('bottom', '10%');
    } 
    
    if(where_scroll < window_height + heightOfBanner + (0.15 * heightOfBanner)) {
        $('.portrait-image').css('position', 'absolute');
        $('.portrait-image').css('bottom', 'unset');
        $('.portrait-image').css('top', '10%');
    }

});