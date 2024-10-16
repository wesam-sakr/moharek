
$(document).ready(function () {

  // loading

  $("body").css('overflow-y', 'auto');
  $('#loading').fadeOut(500);



  // user sub menu 

  $(".top-nav-user").click(function () {
    $(".top-nav-user .sub-menu").toggleClass("d-flex");
  });
  $(".top-nav-user").mouseover(function () {
    $(".top-nav-user .sub-menu").addClass("d-flex");
  });
  $(".top-nav-user").mouseleave(function () {
    $(".top-nav-user .sub-menu").removeClass("d-flex");
  });


  // notification sub menu 

  $(".top-nav-notification").click(function () {
    $(".top-nav-notification .sub-menu").toggleClass("d-flex");
  });
  $(".top-nav-notification").mouseover(function () {
    $(".top-nav-notification .sub-menu").addClass("d-flex");
  });
  $(".top-nav-notification").mouseleave(function () {
    $(".top-nav-notification .sub-menu").removeClass("d-flex");
  });


  // search sub menu 

  $(".top-nav-search .has-menu").click(function () {
    $(".top-nav-search .sub-menu").toggleClass("d-block");
  });


  $(".heart").click(function () {
    $(this).toggleClass("fav");
  })




  // ----- scroll top button ------


  // make nav bar static on scroll 
  var navbar = document.getElementsByTagName("nav");
  var sticky = navbar[0].offsetHeight;
  window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop >= sticky) {
      $(navbar).css("position", "fixed");
    } else {
      $(navbar).css("position", "sticky");
    }
  })

  var btn_top = $('#scroll-top');

  btn_top.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  $(".car_offers .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    responsiveClass: true,
    stagePadding: 30,
    margin: 16,
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  
  $(".car_brand .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    responsiveClass: true,
    stagePadding: 30,
    margin: 16,
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 6
      }
    }
  });

  $(".ads-section .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  });

  var changeSlide = 4; // mobile -1, desktop + 1
  // Resize and refresh page. slider-two slideBy bug remove
  var slide = changeSlide;
  if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
  } else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
  } else {
    var slide = changeSlide;
  }
  $('.one').owlCarousel({
    nav: false,
    items: 1,
    autoplay: 5000,
    rtl: true
  })
  $('.two').owlCarousel({
    nav: false,
    margin: 10,
    rtl: true,
    responsive: {
      0: {
        items: changeSlide - 1,
        slideBy: changeSlide - 1
      },
      600: {
        items: changeSlide,
        slideBy: changeSlide
      },
      1000: {
        items: changeSlide + 1,
        slideBy: changeSlide + 1
      }
    }
  })
  var owl = $('.one');
  owl.owlCarousel();
  owl.on('translated.owl.carousel', function (event) {
    $(".right").removeClass("nonr");
    $(".left").removeClass("nonl");
    if ($('.one .owl-next').is(".disabled")) {
      $(".slider .right").addClass("nonr");
    }
    if ($('.one .owl-prev').is(".disabled")) {
      $(".slider .left").addClass("nonl");
    }
    $('.slider-two .item').removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $('.slider-two .item').eq(c).addClass("active");
    var d = Math.ceil((c + 1) / (slide)) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
  })
  $('.right').click(function () {
    $(".slider .owl-next").trigger('click');
  });
  $('.left').click(function () {
    $(".slider .owl-prev").trigger('click');
  });
  $('.slider-two .item').click(function () {
    var b = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
    $(".slider-two .item").removeClass("active");
    $(this).addClass("active");
  });
  var owl2 = $('.two');
  owl2.owlCarousel();
  owl2.on('translated.owl.carousel', function (event) {
    $(".right-t").removeClass("nonr-t");
    $(".left-t").removeClass("nonl-t");
    if ($('.two .owl-next').is(".disabled")) {
      $(".slider-two .right-t").addClass("nonr-t");
    }
    if ($('.two .owl-prev').is(".disabled")) {
      $(".slider-two .left-t").addClass("nonl-t");
    }
  })
  $('.right-t').click(function () {
    $(".slider-two .owl-prev").trigger('click');
  });
  $('.left-t').click(function () {
    $(".slider-two .owl-next").trigger('click');
  });


});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 31.034544, lng: 31.364159 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;





















// ----- star rate ------
$(function () {
  new WOW().init();
})