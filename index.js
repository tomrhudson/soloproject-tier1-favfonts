//jshint esversion:6

const originalSampleText = "Almost before we knew it, we had left the ground.";

function hamburgerNavBarIcon() {

  // Top Navigation Bar Function
  var navBarTop = document.getElementById("nav-bar-top");

  if (navBarTop.className === "nav-bar") {
    navBarTop.className += " responsive";
  } else {
    navBarTop.className == "nav-bar";
  };
}

function changeColor(colorChosen) {
  if (colorChosen == "white") {
    document.documentElement.style.setProperty("--mode-color-background", "white");
    document.documentElement.style.setProperty("--mode-color-foreground", "black");
  } else {
    document.documentElement.style.setProperty("--mode-color-background", "black");
    document.documentElement.style.setProperty("--mode-color-foreground", "white");
  };
}

function gridLayout() {
  var fontCards = document.querySelectorAll(".font-card");
  var currentCounter = 0;

  for (currentCounter; currentCounter < fontCards.length; currentCounter++) {
    fontCards[currentCounter].style.width = "471px";
  };
}

function listLayout() {
  var fontCards = document.querySelectorAll(".font-card");
  var currentCounter = 0;

  for (currentCounter; currentCounter < fontCards.length; currentCounter++) {
    fontCards[currentCounter].style.width = "100%";
  };
}

function resetFontCards() {
  var currentCounter = 0;
  var fontCards = document.querySelectorAll(".font-card");
  var fontNames = document.querySelectorAll("h2");

  for (currentCounter; currentCounter < fontNames.length; currentCounter++) {
      fontCards[currentCounter].style.display = "block";
  };
}

function searchFonts() {

  var currentCounter = 0;
  var fontCards = document.querySelectorAll(".font-card");
  var fontNames = document.querySelectorAll("h2");
  var searchFont = document.getElementById("search-fonts").value.trim();
  var searchString;
  var fontName;

  searchFont = searchFont.toLowerCase();

  if (searchFont =="") {
    resetFontCards();
  };

  for (currentCounter; currentCounter < fontNames.length; currentCounter++) {
    fontName = fontNames[currentCounter].textContent.toLowerCase();
    searchString = fontName.search(searchFont);

    // no match found, hide blocks that do not have a match
    if (searchString == -1) {
      fontCards[currentCounter].style.display = "none";
    } else {
      fontCards[currentCounter].style.display = "block";
    }
  };
}

function changeFontSize() {
  var fontCards = document.querySelectorAll(".font-card-sample > p");
  var selectedFontSize = document.getElementById("font-size").value;
  var currentCounter = 0;

  for (currentCounter; currentCounter < fontCards.length; currentCounter++) {
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
  document.getElementById("font-size").value = "32px";
  document.getElementById("sample-text").value = originalSampleText;
  document.getElementById("search-fonts").value = "Search fonts";

  //call functions that reset font cards based on reset values
  changeFontSize();
  resetFontCards();
  changeColor("white");
  gridLayout();
  changeSampleText();
}
