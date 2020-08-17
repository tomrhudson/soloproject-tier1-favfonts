//jshint esversion:6

function hamburgerNavBarIcon() {

  // Top Navigation Bar Function
  var x = document.getElementById("topNavBar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  };
}
