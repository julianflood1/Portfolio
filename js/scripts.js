
    // Parralax Scrolling
    $(document).ready(function() {

  var boxes = $('[data-scroll-speed]'),
  $window = $(window);
  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'translateY(' + val + 'px)');
    });
  });

  $(".experience-link").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $(".experience-target").offset().top -40}, "slow");
  });
  $(".skills-link").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $(".skills-target").offset().top - 40}, "slow");
  });
  $(".contact-link").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $(".contact-target").offset().top - 40}, "slow");
  });
  $("#back-to-top").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $(".container").offset().top - 40}, "slow");
  });

  $('.name').fadeIn(2000);
  $('.landing-text').fadeIn(2000);




});
