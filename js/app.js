$(window).on('load', function () { // Google's "async defer" makes this delay necessary.

  function viewModel() {
    var newArr = [];
    $.each(window.markers, function(index) {
      newArr.push(window.markers[index].title);
    });
    this.newArray = newArr;
    console.log(newArr)

    function myFunction() {
      //Toggles dropdown menu.
      document.getElementById("myDropdown").classList.toggle("show");
      //Toggles the hamburger animation.
      var hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
      }

    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    } // Filters the display of list items.

  }
  ko.applyBindings(new viewModel());
});
