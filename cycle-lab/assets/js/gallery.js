$(document).ready(function() {
    // Photo Gallery
    $('.gallery').cycle({
      fx: 'fade' // Choose your transition type (e.g., fade, scrollUp, shuffle, etc.)
    });
  
    // Quote Rotator
    $('.quotes').cycle({
      fx: 'fade', 
      speed: 2500, 
      timeout: 5000
    });
  
    // News Ticker
    $('ul.ticker').cycle({
      fx: 'scrollHorz', 
      speed: 2500, 
      timeout: 5000
    });

    
  });
  