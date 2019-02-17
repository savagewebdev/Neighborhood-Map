$(function(){  //$(window).on('load', function () { // Google's "async defer" makes this delay necessary.

// var newArr = [];
// $.each(window.markers, function(index) {
//   newArr.push(window.markers[index].title);
// });

  function viewModel() {
    this.myMenu = function() {
      //Toggles dropdown menu.
      document.getElementById("myDropdown").classList.toggle("show");
      //Toggles the hamburger animation.
      var hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
      })
    }

    this.myFilter = function() { // Filters the display of list items.
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase(); // var filter is the input text to be matched against txtValue array items.
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a"); // Select all 'a' elements.
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText; // txtValue is either the value of textContent or innerText during the loop.
        if (txtValue.toUpperCase().indexOf(filter) > -1) { // If there are more than -1 matches whilst being typed...
          a[i].style.display = ""; // it will be displayed.
        } else {
          a[i].style.display = "none";
        }
      }
    return true;
    }

    this.myYelp = function() {

    }
  };

  ko.options.deferUpdates = true;
  ko.applyBindings(new viewModel());

});
