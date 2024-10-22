
$(document).ready(function () {

  // loading
  $("body").css('overflow-y', 'auto');
  $('#loading').fadeOut(500);

  // add fav
  $(".heart").click(function () {
    $(this).toggleClass("fav");
  })

  function stickySidebar(mainBlk, sidebarWrapper, sidebarBlk) {

    var main = $(mainBlk); //Our sticky block will scroll next to this one
    
    var stickyWrapper = $(sidebarWrapper); // General position relative wrapper for main and sticky block
    var stickyWrapperWidth = $(sidebarWrapper).width(); 

    var stickyBlk = $(sidebarBlk); // Our sticky block
    stickyBlk.width(stickyWrapperWidth)

    var startPos = stickyBlk.offset().top; // Starting position where the block should stick

    var finishPos = main.height() - stickyBlk.innerHeight(); // Starting position where the block should stick
    stickyWrapper.height(main.height()); 
    // Set height of sticky wrapper equal to the height of main block that we are scrolling next to

    $(window).scroll(function(){ 
      var currentScrollPos = $(document).scrollTop();  // Get current position of scroll
      console.log(currentScrollPos)
      if ((currentScrollPos > startPos) && (currentScrollPos <= finishPos)) { // Check if current scroll position is in range of main block height, add class stuck
        stickyBlk.removeClass('bottom');
        stickyBlk.addClass('stuck');
        console.log('if');
      }
      else if (currentScrollPos > finishPos) {
        stickyBlk.removeClass('stuck');
        stickyBlk.addClass('bottom');
        console.log('else if');
      }  
      // if block current scroll is further, add class bottom
      else {
        stickyBlk.removeClass('stuck');
        stickyBlk.removeClass('bottom');
        console.log('else');
      } // in other cases do nothing
    });

  };
  $(window).on('load', function() {
    stickySidebar ('.stick-next-to', '.sticky-wrapper', '.sticky');
  })




  // make nav bar static on scroll 
  var navbar = document.querySelector("nav.navbar");
  var sticky = navbar.offsetHeight;
  window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop >= sticky) {
      $(navbar).css("position", "fixed");
    } else {
      $(navbar).css("position", "sticky");
    }
  })

  // carousels
  $(".car_offers .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    responsiveClass: true,
    stagePadding: 30,
    margin: 16,
    rtl: true,
    responsive: {
      0: {
        items: 2,
        stagePadding: 12
      },
      768: {
        items: 3
      },
      992: {
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
        items: 2
      },
      578: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 6
      }
    }
  });
  $(".ads-section .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    responsiveClass: true,
    stagePadding: 30,
    margin: 16,
    rtl: true,
    responsive: {
      0: {
        items: 2,
        stagePadding: 12
      },
      768: {
        items: 3
      },
      992: {
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
    nav: true,
    navText: [`<i class="fa-solid fa-chevron-right"></i>`, `<i class="fa-solid fa-chevron-left"></i>`],
    items: 1,
    margin: 3,
    autoplay: 5000,
    rtl: true
  })
  $('.two').owlCarousel({
    nav: false,
    margin: 4,
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
    // $(".right").removeClass("nonr");
    // $(".left").removeClass("nonl");
    // if ($('.one .owl-next').is(".disabled")) {
    //   $(".slider .right").addClass("nonr");
    // }
    // if ($('.one .owl-prev').is(".disabled")) {
    //   $(".slider .left").addClass("nonl");
    // }
    $('.slider-two .item').removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $('.slider-two .item').eq(c).addClass("active");
    var d = Math.ceil((c + 1) / (slide)) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
  })
  // $('.right').click(function () {
  //   $(".slider .owl-next").trigger('click');
  // });
  // $('.left').click(function () {
  //   $(".slider .owl-prev").trigger('click');
  // });
  $('.slider-two .item').click(function () {
    var stickyOffset = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(stickyOffset).trigger('click');
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



  // === start filter page === //
  $("#filter").click(function () {
    console.log('filteeeeer')
    $(".filter").toggleClass("filter-toggle");
  });
  $(".filter-header .btn-close").click(function () {
    $(".filter").toggleClass("filter-toggle");
  });
  // Add event listeners to filter options
  const selectedFiltersList = document.getElementById('selected-filters-list');
  const filterInputs = document.querySelectorAll('.car_filter .form-check-input');
  const clearAllBtn = document.getElementById('clear-all-filters');
  if (filterInputs.length > 0) {
    filterInputs.forEach(input => {
      input.addEventListener('change', function () {
        const label = this.nextElementSibling.textContent.trim();
        if (this.checked) {
          // Add selected filter if it's not already added
          let existingFilter = selectedFiltersList.querySelector(`[data-filter="${this.id}"]`);
          if (!existingFilter) {
            const li = document.createElement('li');
            li.textContent = label;
            li.setAttribute('data-filter', this.id);

            // For radio buttons, associate the filter with the radio group
            if (this.type === 'radio') {
              const groupName = this.name;
              const previousSelection = selectedFiltersList.querySelector(`[data-group="${groupName}"]`);
              if (previousSelection) {
                selectedFiltersList.removeChild(previousSelection);
              }
              li.setAttribute('data-group', this.name);
            }

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-filter-btn';
            removeBtn.innerHTML = '<i class="fas fa-times"></i>'; // Using Font Awesome icon
            removeBtn.onclick = function () {
              document.getElementById(li.getAttribute('data-filter')).checked = false;
              selectedFiltersList.removeChild(li);
            };

            li.appendChild(removeBtn);
            selectedFiltersList.appendChild(li);
          }
        } else {
          // Remove unselected filter
          const itemToRemove = selectedFiltersList.querySelector(`[data-filter="${this.id}"]`);
          if (itemToRemove) {
            selectedFiltersList.removeChild(itemToRemove);
          }
        }

        if (selectedFiltersList.children.length > 0) {
          selectedFiltersList.style.display = 'flex'
        }
        else {
          console.log('empty')
          selectedFiltersList.style.display = 'none'
        }
      });
    });

    // Function to clear all filters
    clearAllBtn.addEventListener('click', function () {
      selectedFiltersList.style.display = 'none'
      // Uncheck all inputs
      filterInputs.forEach(input => input.checked = false);

      // Remove all selected filters from the list
      while (selectedFiltersList.firstChild) {
        selectedFiltersList.removeChild(selectedFiltersList.firstChild);
      }
    });
  }
  if (selectedFiltersList.children.length > 0) {
    selectedFiltersList.style.display = 'flex'
  }
  else {
    console.log('empty')
    selectedFiltersList.style.display = 'none'
  }
  // price from .. to ..
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");
  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");
  var priceFrom = document.querySelector(".price-from");
  var priceTo = document.querySelector(".price-to");
  if (inputLeft !== null) {
    function setLeftValue() {
      var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

      _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";

      // Calculate price based on range value
      var price = parseInt(inputLeft.value) * 3; // Adjust this formula based on your requirements
      priceFrom.textContent = price + " ج.م";
    }
    setLeftValue();

    function setRightValue() {
      var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

      _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbRight.style.right = (100 - percent) + "%";
      range.style.right = (100 - percent) + "%";

      // Calculate price based on range value
      var price = parseInt(inputRight.value) * 3; // Adjust this formula based on your requirements
      priceTo.textContent = price + "  ج.م";
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    // Add event listeners for thumb hover and active states
    // These listeners are not directly related to updating the price
    inputLeft.addEventListener("mouseover", function () {
      thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
      thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
      thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
      thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function () {
      thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
      thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
      thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
      thumbRight.classList.remove("active");
    });
  }
  // === end filter page === //







});

$(function () {
  new WOW().init();
})