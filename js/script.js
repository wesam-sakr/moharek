
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
  var navbar = document.querySelector("nav.navbar");
  var sticky = navbar.offsetHeight;
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
        items: 2
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
    margin: 20,
    rtl: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
});


$("#filter").click(function () {
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
    });
  });

  // Function to clear all filters
  clearAllBtn.addEventListener('click', function () {
    // Uncheck all inputs
    filterInputs.forEach(input => input.checked = false);

    // Remove all selected filters from the list
    while (selectedFiltersList.firstChild) {
      selectedFiltersList.removeChild(selectedFiltersList.firstChild);
    }
  });
}

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
    inputLeft.addEventListener("mouseover", function() {
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function() {
        thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function() {
        thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function() {
        thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function() {
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function() {
        thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function() {
        thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function() {
        thumbRight.classList.remove("active");
    });
}























// ----- star rate ------
$(function () {
  new WOW().init();
})