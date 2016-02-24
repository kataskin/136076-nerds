var button = document.querySelector(".contacts .btn");
var popup = document.querySelector(".transparent-background");
var cross = popup.querySelector(".cross");

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("transparent-background-show");
});

cross.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("transparent-background-show");
});
