$(function() {
  const newArray = []

  initMap().then(function(value) {
    // $.each(window.markers, function(index) {
    newArray.push(value);
  });

console.log(newArray)
//   var viewModel = {
//var timeoutI

//     })
// };
//
// ko.applyBindings(viewModel);
// console.log(newArray);
});
