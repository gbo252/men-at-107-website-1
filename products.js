"use strict";

//babel conversion used

// context object, containing the products array of each individual product object
var context = {
	products: [
		{
			squareName: "Messenger Bags,<br/>Cross-Body Bags<br/>& Rucksacks",
			infoName: "Messenger Bags, Cross-Body Bags & Rucksacks",
			squarePic: "Bag-Rucksack.jpg",
			squareAlt: "Man with leather rucksack on back",
			infoPic1: "Bag-Rucksack.jpg",
			infoAlt1: "Man with leather rucksack on back",
			infoPic2: "Bag-Messenger.jpg",
			infoAlt2: "Man holding messenger bag on shoulder",
			infoPic3: "Bag-CrossBody.jpg",
			infoAlt3: "Cross-Body bag lying on table",
			infoText:
				"We have a great selection of bags in various leathers, colours and prices in canvas and leather combinations. Whether you are looking for something to take to work or just to ‘throw on your back’ for holidays, we have it covered. We also offer protection sprays and creams made in France to care for your purchases, ensuring they still look great in years to come."
		},
		{
			squareName: "Barbour<br/>Accessories",
			infoName: "Barbour Accessories",
			squarePic: "Barbour-Scarf.jpg",
			squareAlt: "Man with tartan Barbour scarf",
			infoPic1: "Barbour-Accs.jpg",
			infoAlt1: "Barbour bag, scarf and two hats",
			infoPic2: "Barbour-Scarf.jpg",
			infoAlt2: "Man with tartan Barbour scarf",
			infoPic3: "Barbour-Tartan.jpg",
			infoAlt3: "Barbour accessories",
			infoText:
				"Come and discover how many accessories the British brand Barbour has to offer. The Barbour story began in 1894 and remains true to its core values today, offering beautiful function and well priced stylish accessories. These include scarves, gloves, hats, backpacks, laptop and cross-body bags, wallets and card holders, belts, handkerchiefs, hip and thermos flasks, travel mugs, umbrellas and shoe cleaning sets."
		},
		{
			squareName: "Leather<br/>Jackets",
			infoName: "Leather Jackets",
			squarePic: "Jackets-Rack.jpg",
			squareAlt: "Leather jackets on clothes rack",
			infoPic1: "Jackets-Rack.jpg",
			infoAlt1: "Leather jackets on clothes rack",
			infoPic2: "Jackets-Plant.jpg",
			infoAlt2: "Black leather jacket hanging in front of plant",
			infoText:
				"Soft leather jackets are now available at Men @ 107. Colours include black, brown, navy and cognac leathers. Our men’s leather jackets are ideal as a jacket or short coat for smart to casual outings. With so much potential wear, our jackets are designed with durability and style in mind. Fit and functionality are crafted into every leather jacket and are available in sizes small, medium, large, extra large and XXL."
		},
		{
			squareName: "Briefcases,<br/>Holdalls<br/>& Suit-Packs",
			infoName: "Briefcases, Holdalls & Suit-Packs",
			squarePic: "Cases-Holdall.jpg",
			squareAlt: "Black leather holdall",
			infoPic1: "Cases-Holdall.jpg",
			infoAlt1: "Black leather holdall",
			infoPic2: "Cases-SuitPack.jpg",
			infoAlt2: "Two leather suit-packs",
			infoPic3: "Cases-Briefcase.jpg",
			infoAlt3: "Man holding leather briefcase",
			infoText:
				"Whether you work in the city or the suburbs, our briefcase selection is perfect for every eventuality. Our leather holdalls are produced to the highest quality whilst the canvas and leather combo is a sure winner for a younger and more casual feel. Suit-Packs are available on wheels and in a beautiful soft leather for an overnight visit, making this is a fantastic ‘forever’ gift."
		},
		{
			squareName: "Card Holders<br/>& Wallets",
			infoName: "Card Holders & Wallets",
			squarePic: "Wallets-Secrid.jpg",
			squareAlt: "Three leather Secrid card holders",
			infoPic1: "Wallets-Secrid.jpg",
			infoAlt1: "Three leather Secrid card holders",
			infoPic2: "Wallets-Cards.jpg",
			infoAlt2: "Various leather and harris tweed card holders",
			infoPic3: "Wallets-Wallet.jpg",
			infoAlt3: "Brown leather wallet",
			infoText:
				"We offer a large range of card holders and wallets in many leathers, colours and prices. Our vast selection enables us to cater to your specific needs and the majority of these are RFID blocking for your protection. We have also introduced Secrid card and money holders, as a new era of technology calls for a new type of wallet. Secrid, made in Holland, protects your cards alongside your privacy and includes a mechanism to display all your cards at the touch of a button."
		},
		{
			squareName: "Key Holders,<br/>Key Cases<br/>& Coin Purses",
			infoName: "Key Holders, Key Cases & Coin Purses",
			squarePic: "KeyCoin-Orbitkey.jpg",
			squareAlt: "Orbitkey key holders",
			infoPic1: "KeyCoin-Orbitkey.jpg",
			infoAlt1: "Orbitkey key holders",
			infoPic2: "KeyCoin-RingsCases.jpg",
			infoAlt2: "Colourful leather key case with 2 key rings",
			infoPic3: "KeyCoin-Coin.jpg",
			infoAlt3: "Two leather coin purses",
			infoText:
				"Key rings made by Artisan craftsman and a selection of leather key cases and coin purses avoid the frustration we all have with noisy pockets and cluttered bags. A modern alternative to the key case is Orbitkey, offering a clever new solution for looking after your keys which is pocket friendly. This silent stack holds between 2-7 keys, or Orbitkey accessories such as the USB drive, in a slim leather or rubber casing."
		},
		{
			squareName: "Travel Wallets<br/>& Washbags",
			infoName: "Travel Wallets & Washbags",
			squarePic: "Travel-Wallets.jpg",
			squareAlt: "Travel wallet and two leather passport covers",
			infoPic1: "Travel-Wallets.jpg",
			infoAlt1: "Travel wallet and two leather passport covers",
			infoPic2: "Travel-Washbags.jpg",
			infoAlt2: "Two leather washbags",
			infoText:
				"Leather passport holders and travel wallets are designed to ease your journey. They have many pockets for cards, tickets and boarding passes so you have everything in one place. Washbags in canvas or leather make great gifts and hold all the essential items you need to take away with you."
		},
		{
			squareName: "Phone, Tablet<br/>& Laptop Cases",
			infoName: "Phone, Tablet & Laptop Cases",
			squarePic: "Cases-Tablet.jpg",
			squareAlt: "Two leather tablet cases",
			infoPic1: "Cases-Tablet.jpg",
			infoAlt1: "Two leather tablet cases",
			infoPic2: "Cases-Laptop.jpg",
			infoAlt2: "Leather laptop case with laptop",
			infoPic3: "Cases-Phone.jpg",
			infoAlt3: "Two phone cases, harris tweed and leather",
			infoText:
				"Classic leather laptop cases with zipped compartments to hold your documents and computer accessories and tablet covers are available in a beautiful coloured leather pouch and phone covers in leather and Harris Tweed."
		},
		{
			squareName: "Scarves, Gloves<br/>& Hats",
			infoName: "Scarves, Gloves & Hats",
			squarePic: "Winter-Gloves.jpg",
			squareAlt: "Man with smart navy gloves on",
			infoPic1: "Winter-Gloves.jpg",
			infoAlt1: "Man with smart navy gloves on",
			infoPic2: "Winter-Scarf.jpg",
			infoAlt2: "Man with a blue striped scarf around his neck",
			infoPic3: "Winter-Hat.jpg",
			infoAlt3: "Blue hat",
			infoText:
				"Our scarf ranges include stripes, dots and checks in unusual colour combinations and materials. They feel exceptionally soft and many are double-sided, creating both unusual and versatile combinations to wear with many outfits. Gloves are made from soft leather, suedes and fabrics in black, brown, tan and navy, all available in four sizes. Caps are made in Harris Tweed and a selection of other fabrics, in multiple colours and sizes. We also have beanies and caps in various colours, together with some great ‘headwear’ including 100% wool felt trilby and pork pie hats and a large variety of caps in an assortment of materials and colours."
		},
		{
			squareName: "Socks",
			infoName: "Socks",
			squarePic: "Underwear-Socks.jpg",
			squareAlt: "Grey socks with colourful stripes",
			infoPic1: "Underwear-Socks.jpg",
			infoAlt1: "Grey socks with colourful stripes",
			infoPic2: "Underwear-Socks2.jpg",
			infoAlt2: "Colourful and patterned socks",
			infoText:
				"There is an extensive range of bamboo socks, which can also be purchased in themed gift boxes of four and coloured plain bamboo socks from Swollen Panda and Pringle. In other ranges we offer fancy cotton-mix socks with snazzy designs from Mr.D of London and a selection of colours and patterns from Billybelt, France."
		},
		{
			squareName: "Ties, Bow-Ties,<br/>Hankies & Belts",
			infoName: "Ties, Bow-Ties, Hankies & Belts",
			squarePic: "ClothingAcc-Belts.jpg",
			squareAlt: "Three brown leather belts",
			infoPic1: "ClothingAcc-Belts.jpg",
			infoAlt1: "Three brown leather belts",
			infoPic2: "ClothingAcc-Ties.jpg",
			infoAlt2:
				"Bow-Tie and tie, next to cocktail shaker and glass of whisky",
			infoPic3: "ClothingAcc-Hanky.jpg",
			infoAlt3: "Blue silk hanky",
			infoText:
				"Silk ties and bow-ties are designed in a variety of colourful patterns, whilst our pocket silk hankies range from stripes and paisley, to images of Italy, perfect to jazz up your suit. Our belt selection encompasses both city and weekend wear. Belts are made in a variety of leather or suede colours and our Argentinian inspired belts are handstitched using artisan craftmanship. We also offer a large colour selection of woven elastic trimmed leather belts in plain, two toned and mottled colour combos."
		},
		{
			squareName: "Clocks<br/>& Lights",
			infoName: "Clocks & Lights",
			squarePic: "Clocks-Brick.jpg",
			squareAlt: "Wooden brick clocks",
			infoPic1: "Clocks-Octagon.jpg",
			infoAlt1: "Octagon table light",
			infoPic2: "Clocks-Brick.jpg",
			infoAlt2: "Wooden brick clocks",
			infoPic3: "Clocks-Book.jpg",
			infoAlt3: "Bedside book light",
			infoText:
				"The Smart Book Light, when opened fully to 360 degrees transfers from a laser cut wooden book to a convenient bedside light. The Octagon Light has four light settings and the unique Octagon base allows movement at many angles. It is available in a selection of colours and finishes. Flip Click and Cube Click Clocks display the time, date and temperature and are available in many wood finishes. All our clocks and lights are USB chargeable."
		},
		{
			squareName: "Bar Gifts<br/>& Hip Flasks",
			infoName: "Bar Gifts & Hip Flasks",
			squarePic: "Bar-Jigger.jpg",
			squareAlt: "Bar tool - double jigger",
			infoPic1: "Bar-Cocktail.jpg",
			infoAlt1: "Cocktail shaker",
			infoPic2: "Bar-Hip.jpg",
			infoAlt2: "Hip Flask in leather case",
			infoPic3: "Bar-Jigger.jpg",
			infoAlt3: "Bar tool - double jigger",
			infoText:
				"Whether you use a cocktail shaker, a double jigger to measure up your cocktail or an aerator and pourer when serving your wine, we have them all, along with a selection of hip flasks and specialist corkscrews. Cocktail shakers and double jiggers are available in copper, gun-metal and silver colours. Hip flasks come in a variety of sizes and finishes, including Harris Tweed, leather-covered or metal finishes."
		},
		{
			squareName: "Grooming<br/>Products",
			infoName: "Grooming Products",
			squarePic: "Grooming-Oil.jpg",
			squareAlt: "Three small bottles of beard oil",
			infoPic1: "Grooming-Oil.jpg",
			infoAlt1: "Three small bottles of beard oil",
			infoPic2: "Grooming-Nail.jpg",
			infoAlt2: "Ted baker nail scissor set",
			infoText:
				"Our beard oil is handcrafted in London and uses 100% natural ingredients. There are three essences to nourish, hydrate and condition your beard. Eastern Spice, Orchard Haze and Citrus Blend have argan and olive oils which are packed with nutrients that care for both your beard and skin. Ted Baker grooming products include manicure sets, shaving and skincare products and colognes, authentically crafted to recreate the master barber experience at home."
		},
		{
			squareName: "Game Sets",
			infoName: "Game Sets",
			squarePic: "Games-Chess.jpg",
			squareAlt: "Leather chess board and case",
			infoPic1: "Games-Chess.jpg",
			infoAlt1: "Leather chess board and case",
			infoPic2: "Games-Backgammon.jpg",
			infoAlt2: "Leather backgammon set",
			infoText:
				"Hand-made game sets, in exquisite quality leather cases. The chess metal pieces are beautifully engineered whilst the backgammon board is hand-cut and sewn with wooden counters and dice. Both crafted in antique tan leather."
		},
		{
			squareName: "Pens, Tools<br/>& Gadgets",
			infoName: "Pens, Tools & Gadgets",
			squarePic: "Tools-GiftBoxes.jpg",
			squareAlt:
				"Four gift tool boxes, including bicycle puncture repair kit",
			infoPic1: "Tools-GiftBoxes.jpg",
			infoAlt1:
				"Four gift tool boxes, including bicycle puncture repair kit",
			infoPic2: "Tools-Pens.jpg",
			infoAlt2: "Pen set - two pens in a box",
			infoText:
				"A selection of new bold designs from Gentlemen’s Hardware tools and gadgets collection. These include various multi-tool kits, pen knives, key holders with flashlights, survival kits and a bicycle multi-tool kit, gifts for men in all walks of life. Our Swiss-made ball point and roller ball pens are all solid brass using the highest quality plating. These come boxed in pairs or can be sold singularly."
		},
		{
			squareName: "Ethical<br/>Products",
			infoName: "Ethical Products",
			squarePic: "Ethical-Wallets.jpg",
			squareAlt: "Four ethical wallets made from tyre inner tubing",
			infoPic1: "Ethical-Wallets.jpg",
			infoAlt1: "Four ethical wallets made from tyre inner tubing",
			infoPic2: "Ethical-Belt.jpg",
			infoAlt2: "Ethical belt made from recycled tyres",
			infoText:
				"An ethical range of wallets and belts using repurposed and recycled materials. These products have been upcycled using tyre inner tubing, a great leather alternative."
		},
		{
			squareName: "Greeting Cards",
			infoName: "Greeting Cards",
			squarePic: "Cards-Sq.jpg",
			squareAlt: "Men's greeting cards",
			infoPic1: "Cards.jpg",
			infoAlt1: "Four men's greeting cards on table",
			infoText:
				"To complete that special gift buying experience, we offer a selection of greeting cards specifically for men, for all occasions."
		},
		{
			squareName: "Gift<br/>Vouchers",
			infoName: "Gift Vouchers",
			squarePic: "GiftCards-Sq.jpg",
			squareAlt: "Gift card",
			infoPic1: "GiftCards.jpg",
			infoAlt1: "Gift card",
			infoText:
				"Can’t decide on that special gift? Buy a Men @ 107 gift voucher."
		}
	]
};

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
};

var _loop = function _loop(i) {
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
	};

	close[i].onclick = function() {
		info[i].style.display = "none";
		overlayBG.style.visibility = "hidden";
		overlayBG.style.background = "rgba(0, 0, 0, 0)";
	};
};

for (var i = 0; i < context.products.length; i++) {
	_loop(i);
}
