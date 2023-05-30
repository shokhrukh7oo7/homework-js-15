var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

modalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

