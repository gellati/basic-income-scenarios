(function() {
    var currentIndex = 0;

    var feelingData = [
	{feeling: "disgust",
	 quote: "I'm strongly against!",
	 backgroundColor: "#0000FF",
	 backgroundColorLight: "#b3b3ff",
	 color: "#FFFFFF"
	},
	{feeling: "courage",
	 quote: "BI would encourage and reward forms of work that is not labour - the work of care, community work, education for social involvement, and so on",
	 backgroundColor: "#855500",
	 backgroundColorLight: "#ffdd99",
	 color: "#FFFFFF"
	},
	{feeling: "love",
	 quote: "People who have a basic income security tend to act with a greater sense of altruism and tolerance",
	 backgroundColor: "#008000",
	 backgroundColorLight: "#99ff99",
	 color: "#FFFFFF"
	},
	{feeling: "humour",
	 quote: "Even the animals will experience a basic income",
	 backgroundColor: "#ffffff",
	 backgroundColorLight: "#ffffff",
	 color: "#000000"
	},
	{feeling: "sadness",
	 quote: "BI: a response to income inequality as a structural challenge of Guy Standing",
	 backgroundColor: "#d9d9d9",
	 backgroundColorLight: "#f2f2f2",
	 color: "#000000"
	},
	{feeling: "wonder",
	 quote:   "I predict with great confidence that a basic income scheme will make a huge difference, lowering child malnutrition, reducing family poverty, raising women's economic status and boosting economic development",
	 backgroundColor: "#ffff00",
	 backgroundColorLight: "#ffff99",
	 color: "#000000"},
	{feeling: "anger",
	 quote: "Why would people just get money for free. I've been working all my life. You get nothing for free!",
	 backgroundColor: "#ff0000",
	 backgroundColorLight: "#ffb3b3",
	 color: "#FFFFFF"},
	{feeling: "horror",
	 quote:  "Divorce rates go up",
	 backgroundColor: "#000000",
	 backgroundColorLight: "#f2f2f2",
	 color: "#FFFFFF"},
    ];

    var backgroundColors = ["#0000FF","#855500", "#008000","#FFFFFF", "#d9d9d9", "#FFFF00", "#FF0000", "#000000"];
    var backgroundColorsLight = ["#b3b3ff", "#ffffff", "#99ff99", "#FFFFFF", "#F2F2F2", "#ffff99" , "#ffb3b3" , "#f2f2f2"]
    var textColors = ["#000000", "#000000", ];


    
//    var feelings = ["disgust", "courage", "love", "humour", "sorrow", "wonder", "anger", "horror"];    
    
    var quotes = ["I'm strongly against!",
		  "BI would encourage and reward forms of work that is not labour - the work of care, community work, education for social involvement, and so on",
		  "People who have a basic income security tend to act with a greater sense of altruism and tolerance",
		  "Even the animals will experience a basic income",
		  "BI: a response to income inequality as a structural challenge of Guy Standing",
		  "I predict with great confidence that a basic income scheme will make a huge difference, lowering child malnutrition, reducing family poverty, raising women's economic status and boosting economic development",
		  "Why would people just get money for free. I've been working all my life. You get nothing for free!",
		  "Divorce rates go up"
		 ];
    


    
    
    $(document).ready(function() {
	displayQuote();
	
    function displayQuote(){
	var quoteContainer = document.getElementById("quoteContainer");
//	console.log("num " + num);
//	console.log("dindex " + dindex);
//	console.log("mod " + (dindex % quotes.length));
	console.log("quote " + feelingData[currentIndex].quote);	
	quoteContainer.innerHTML=feelingData[currentIndex].quote;
	quoteContainer.style.backgroundColor=feelingData[currentIndex].backgroundColor;
	quoteContainer.style.color=feelingData[currentIndex].color;

	var emotionContainer = document.getElementById("emotionContainer");
	emotionContainer.innerHTML=feelingData[currentIndex].feeling;
	emotionContainer.style.backgroundColor=feelingData[currentIndex].backgroundColorLight;




	//	dindex = dindex + num;
    }
	
	var options = {
	    ovalWidth: 400,
	    ovalHeight: 50,
	    offsetX: 100,
	    offsetY: 325,
	    angle: 0,
	    activeItem: 0,
	    duration: 350,
	    className: 'item'
	}
	
	var carousel = $('.carousel').CircularCarousel(options);
	
	/* Fires when an item is about to start it's activate animation */
	carousel.on('itemBeforeActive', function(e, item) {
	    $(item).css('box-shadow', '0 0 20px blue');
	});
	
	/* Fires after an item finishes it's activate animation */
	carousel.on('itemActive', function(e, item) {
	    $(item).css('box-shadow', '0 0 20px green');
	});
	
	/* Fires when an active item starts it's de-activate animation */
	carousel.on('itemBeforeDeactivate', function(e, item) {
	    $(item).css('box-shadow', '0 0 20px yellow');
	})
	
	/* Fires after an active item has finished it's de-activate animation */
	carousel.on('itemAfterDeactivate', function(e, item) {
	    $(item).css('box-shadow', '');
	})

	
	/* Previous button */
	$('.controls .previous').click(function(e) {

	    carousel.cycleActive('previous');
	    currentIndex = (currentIndex <= 0) ? quotes.length - 1 : currentIndex - 1;
//	    currentIndex = (currentIndex - 1) % quotes.length;
	    displayQuote();
	    e.preventDefault();
	});
	
	/* Next button */
	$('.controls .next').click(function(e) {

	    carousel.cycleActive('next');
	    //	    var sindex = $(this).index('li');
	    currentIndex = (currentIndex + 1) % quotes.length;
	    displayQuote();
	    e.preventDefault();
	});
	
	/* Manaully click an item anywhere in the carousel */
	$('.carousel .item').click(function(e) {
	    var index = $(this).index('li');
	    currentIndex = index;
	    displayQuote();
	    carousel.cycleActiveTo(index);
	    e.preventDefault();
	});

	
    });


    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
	var p = document.createElement("div");
	p.innerHTML = labnolThumb(v[n].dataset.id);
	p.onclick = labnolIframe;
	v[n].appendChild(p);
    }

    function labnolThumb(id) {
	return '<img class="youtube-thumb" src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
    }
    
    function labnolIframe() {
	var iframe = document.createElement("iframe");
	iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("id", "youtube-iframe");
	this.parentNode.replaceChild(iframe, this);
    }

    Gifffer();





    
})();
