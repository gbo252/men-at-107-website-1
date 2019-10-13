"use strict";

// Product Square handlebars section
const templateElement = document.getElementById('productSquareHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('productsPageMain').innerHTML = compiledHtml;

// Product Info handlebars section
const templateElement2 = document.getElementById('productInfoHB');
const templateSource2 = templateElement2.innerHTML;
const template2 = Handlebars.compile(templateSource2);
const compiledHtml2 = template2(context);
document.getElementById('overlay2').innerHTML = compiledHtml2;

// Global variable containing number of product sections
const productNo = context.products.length;

// Global variable containing overlay element
const overlayBG = document.getElementById("overlay");

// Function for when close button is clicked
function clickClose() {
  for (let i = 0; i < productNo; i++) {
    infoArr[i].style.display = "none";
  }
  overlayBG.style.visibility = "hidden";
  overlayBG.style.background = "rgba(0, 0, 0, 0)";
}

// Global Arrays that are filled below with 'push'
let infoArr = [];
let clickSquare = [];
let squareArr = [];

// Function used in for loop for centering info box
const centerScreen = (i) => {
  if (matchMedia) {
    const winSize = window.matchMedia("(min-height: " + infoArr[i].offsetHeight + "px)");
    winSize.addListener(WidthChange);
    WidthChange(winSize);
  }
  function WidthChange(winSize) {
    if (winSize.matches) {
      infoArr[i].style.top = "50%";
      infoArr[i].style.marginTop = "-" + ((infoArr[i].offsetHeight) / 2) + "px";
    } else {
      infoArr[i].style.top = "0px";
      infoArr[i].style.marginTop = "0px";
    }
  }
}

// For loop, containing all functionality for product squares
for (let i = 0; i < productNo; i++) {
  const info = document.querySelectorAll('.productInfo');
  infoArr.push(info[i]);
  clickSquare.push(function () {
    infoArr[i].style.display = "block";
    overlayBG.style.visibility = "visible";
    overlayBG.style.background = "rgba(0, 0, 0, 0.7)";
    infoArr[i].style.marginLeft = "-" + ((infoArr[i].offsetWidth) / 2) + "px";
    window.onresize = resize;
    function resize() {
      infoArr[i].style.marginLeft = "-" + ((infoArr[i].offsetWidth) / 2) + "px";
      centerScreen(i);
    }
    centerScreen(i);
  })
  const square = document.querySelectorAll('.productSquare');
  squareArr.push(square[i]);
  squareArr[i].onclick = clickSquare[i];
  const close = document.querySelectorAll('.closeButton');
  close[i].onclick = clickClose;
}
