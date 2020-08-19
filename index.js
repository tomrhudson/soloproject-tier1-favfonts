//jshint esversion:6

const originalSampleText = "Almost before we knew it, we had left the ground.";

function hamburgerNavBarIcon() {

  // Top Navigation Bar Function
  var navBarTop = document.getElementById("nav-bar-top");

  if (navBarTop.className === "nav-bar") {
    navBarTop.className += " responsive";
  } else {
    navBarTop.className = "nav-bar";
  };
}

function changeColor() {

}

function changeFontCardLayout() {

}

function changeFontSize() {
  var fontCards = document.querySelectorAll(".font-card-sample > p");
  var selectedFontSize = document.getElementById("font-size").value;
  var currentCounter = 0;

  // console.log("FUNCTION: change font size");
  // console.log("# of font cards: " + fontCards.length);
  // console.log("selected font size: " + selectedFontSize);

  for (currentCounter; currentCounter < fontCards.length; currentCounter++) {
    // console.log("loop count: " + currentCounter);
    // console.log("current font size: " + fontCards[counter].style.fontSize);
    fontCards[currentCounter].style.fontSize = selectedFontSize;
  };
}

function changeSampleText(event) {
  var currentCounter = 0;
  var fontCards = document.querySelectorAll(".font-card-sample > p");
  var userSampleText = document.getElementById("sample-text").value.trim();

  // if sample text is empty, then reset the value back to the originalSampleText

  if (userSampleText !== "") {
    for (currentCounter; currentCounter < fontCards.length; currentCounter++) {
      fontCards[currentCounter].innerHTML = userSampleText;
    };
  } else {
    userSampleText = originalSampleText;
    for (currentCounter; currentCounter < fontCards.length; currentCounter++) {
      fontCards[currentCounter].innerHTML = userSampleText;
    };
  };
}

function resetAll() {
  // reset values back to page launch values
  document.getElementById("font-size").value = "20px";
  document.getElementById("sample-text").value = originalSampleText;
  document.getElementById("search-fonts").value = "Search fonts";

  //call functions that reset font cards based on reset values
  changeFontSize();
  changeColor();
  changeFontCardLayout();
  changeSampleText();
}
