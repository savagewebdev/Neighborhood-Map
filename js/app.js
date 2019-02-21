$(function() {

  function viewModel() {
    // this.myFetch = function() {
    //   for (let place of places) {
    //   fetch('https://api.yelp.com/v3/graphql', {
    //       headers: {
    //         "Content-Type" : "application/graphql",
    //         "Authorization" : 'Bearer wgy6PMFp-MWG2EUJz40Le2W7p0JagF_9q8lpGxmSqq2_xzGmUErWyg7zKTe5NicC5HAFuQB06b2opPXJkO2OK2oZAWDDMSdrS2I_nmpixKLJO_xQc6Dvw3OtWnVoXHYx'
    //       },
    //       method: "POST",
    //       data: `
    //       {
    //         business(id: "${place}") {
    //           name
    //           coordinates {
    //             latitude
    //             longitude
    //           }
    //           location {
    //             formatted_address
    //           }
    //           photos
    //           rating
    //         }
    //       }`
    //   })
    //
    //   .then(response => response.JSON()) // Take the response parameter data from the API and return its value to JSON format.
    //   .then(dataConverter) // or articles
    //   .catch('Yelp!'); // Request error function...
    // }
  // };

    this.myMenu = function() {
      //Toggles dropdown menu.
      document.getElementById("myDropdown").classList.toggle("show");
      //Toggles the hamburger animation.
      var hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
      })
    };

    this.myFilter = function() { // Filters the display of list items.
      var input, filter, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase(); // var filter is the input text to be matched against txtValue array items.
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a"); // Select all 'a' elements.
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText; // txtValue is either the value of textContent or innerText during the loop.
        if (txtValue.toUpperCase().indexOf(filter) > -1) { // If there are more than -1 matches whilst being typed...
          a[i].style.display = "";
// it will be displayed.
        } else {
          a[i].style.display = "none";
        }
      }
    return true;
    }
  }

  ko.options.deferUpdates = false;
  ko.applyBindings(new viewModel());
});
