

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

  $('.name').fadeIn(3000);
  $('.landing-text').fadeIn(3000);
  $('#me').fadeIn(3000);


  document.addEventListener('scroll', function() {
    if(window.scrollY > 1150) {
      $('.effects').fadeIn(2000);
    }

  });

  // Get the modal
  var modal = document.getElementById('myModal');
  var modal2 = document.getElementById('myModal2');
  var modal3 = document.getElementById('myModal3');
  var modal4 = document.getElementById('myModal4');
  var modal5 = document.getElementById('myModal5');


  // Get the button that opens the modal
  var trigger1 = document.getElementById("trigger1");
  var trigger2 = document.getElementById("trigger2");
  var trigger3 = document.getElementById("trigger3");
  var trigger4 = document.getElementById("trigger4");
  var trigger5 = document.getElementById("trigger5");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  var span3 = document.getElementsByClassName("close")[2];
  var span4 = document.getElementsByClassName("close")[3];
  var span5 = document.getElementsByClassName("close")[4];



  // When the user clicks on the button, open the modal
  trigger1.onclick = function() {
      modal.style.display = "block";
  }
  trigger2.onclick = function() {
      modal2.style.display = "block";
  }
  trigger3.onclick = function() {
      modal3.style.display = "block";
  }
  trigger4.onclick = function() {
      modal4.style.display = "block";
  }
  trigger5.onclick = function() {
      modal5.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  span2.onclick = function() {
      modal2.style.display = "none";
  }
  span3.onclick = function() {
      modal3.style.display = "none";
  }
  span4.onclick = function() {
      modal4.style.display = "none";
  }
  span5.onclick = function() {
      modal5.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      } else if (event.target == modal2) {
        modal2.style.display = "none";
      } else if (event.target == modal3) {
        modal3.style.display = "none";
      } else if (event.target == modal4) {
        modal4.style.display = "none";
      } else if (event.target == modal5) {
        modal5.style.display = "none";
      } 
  }


});
