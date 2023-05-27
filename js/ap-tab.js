// Function to change the active tab
function changeTab(tabIndex) {
  // Hide all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Deactivate all buttons
  var buttons = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Show the selected tab
  tabs[tabIndex].style.display = "block";

  // Activate the selected button
  buttons[tabIndex].classList.add("active");
}

// Show the first tab by default
changeTab(0);
