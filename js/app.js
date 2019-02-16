$(window).on('load', function () { // Google's "async defer" makes this delay necessary.

  function viewModel() {
    var newArr = [];
    $.each(window.markers, function(index) {
      newArr.push(window.markers[index].title);
    });
    this.newArray = newArr;
    console.log(newArr)
  }
  ko.applyBindings(new viewModel());
});
