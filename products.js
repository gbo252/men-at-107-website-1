var templateElement = document.getElementById("productSquareHB");
var templateSource = templateElement.innerHTML;
var template = Handlebars.compile(templateSource);
var compiledHtml = template(context);
document.getElementById("productsPageMain").innerHTML = compiledHtml;

var templateElement2 = document.getElementById("productInfoHB");
var templateSource2 = templateElement2.innerHTML;
var template2 = Handlebars.compile(templateSource2);
var compiledHtml2 = template2(context);
document.getElementById("overlay2").innerHTML = compiledHtml2;

var overlayBG = document.getElementById("overlay");
var info = document.querySelectorAll(".productInfo");
var square = document.querySelectorAll(".productSquare");
var close = document.querySelectorAll(".closeButton");

function centerScreen(i) {
	if (matchMedia) {
		var winSize = window.matchMedia(
			"(min-height: " + info[i].offsetHeight + "px)"
		);
		winSize.addListener(WidthChange);
		WidthChange(winSize);
	}

	function WidthChange(winSize) {
		if (winSize.matches) {
			info[i].style.top = "50%";
			info[i].style.marginTop = "-" + info[i].offsetHeight / 2 + "px";
		} else {
			info[i].style.top = "0px";
			info[i].style.marginTop = "0px";
		}
	}
}

var _loop = function _loop(i) {
	function closeInfo() {
		info[i].style.display = "none";
		overlayBG.style.visibility = "hidden";
		overlayBG.style.background = "rgba(0, 0, 0, 0)";
		document.removeEventListener("click", clickOutside);
	}

	function clickOutside(e) {
		if (!info[i].contains(e.target) && !square[i].contains(e.target)) {
			closeInfo();
		}
	}

	square[i].onclick = function() {
		info[i].style.display = "block";
		overlayBG.style.visibility = "visible";
		overlayBG.style.background = "rgba(0, 0, 0, 0.7)";
		info[i].style.marginLeft = "-" + info[i].offsetWidth / 2 + "px";
		window.onresize = function() {
			info[i].style.marginLeft = "-" + info[i].offsetWidth / 2 + "px";
			centerScreen(i);
		};
		centerScreen(i);
		document.addEventListener("click", clickOutside);
	};

	close[i].onclick = closeInfo;
};

for (var i = 0; i < context.products.length; i++) {
	_loop(i);
}
