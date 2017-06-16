
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

$(".experience-link").click(function(){
  $("body, html").stop()
  $("body, html").animate({ scrollTop: $(".experience").offset().top - 40}, "slow");
});

  $('.skills-link').click(function() {
    $('html, body').animate({ scrollTop: $(".skills").offset().top }, "slow");
  });

  $('.contact-link').click(function() {
    $('html, body').animate({ scrollTop: $(".contact").offset().top }, "slow");
  });
});
