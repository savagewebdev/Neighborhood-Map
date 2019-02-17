(function data() {
  const stashStorage = JSON.parse(localStorage.locations);
  locations.push(stashStorage);
  localStorage.clear();
}());
