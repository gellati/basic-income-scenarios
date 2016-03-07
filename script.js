(function() {
    var currentIndex = 0;

    var feelingData = [
	{feeling: "disgust",
	 quote: "I'm strongly against an unconditional basic income.",
	 scenario: "If a basic income becomes a reality far too many people will take advantage of the situation and just lay on the sofa or travel around the world without working and contributing to society. What motivates people is that one can see that work pays off. If everyone will get a basic income without having to do anything people will get lazy.",
	 backgroundColor: "#0000FF",
	 backgroundColorLight: "#b3b3ff",
	 color: "#FFFFFF"
	},
	{feeling: "courage",
	 quote: "With a basic income I would dare to start a company which has been a dream for a long time.",
	 scenario: "An unconditional basic income would encourage people to start new companys and organisations because they would feel economically more safe. It would also reward forms of work that is not labour - the work of care, community work, education for social involvement, and so on.",
	 backgroundColor: "#855500",
	 backgroundColorLight: "#ffdd99",
	 color: "#FFFFFF"
	},	
	{feeling: "love",
	 quote: "People who have a basic income security tend to act with a greater sense of altruism and tolerance",
	 scenario: "With the introduction of an unconditional basic income we will see a society where people care more for eachother. People will have a better possibility to spend time with their loved ones, their children, older parents and family instead of feeling stress and working too much.",
	 backgroundColor: "#008000",
	 backgroundColorLight: "#99ff99",
	 color: "#FFFFFF"
	},
	{
	    feeling: "compassion",
	    quote: "An unconditional basic income would function as a response to income inequality as a structural challenge.",
	    scenario: "If an unconditional basic income was introduced people would once and for all free themselves from the structural challenges of income inequality. People would be free to choose for what cause and how they want to spend their life, intelligence, skills etc. The stigma of being poor would no longer exist.",
	    backgroundColor: "#ff9900",
	    backgroundColorLight: "#ffcc00",
	    color: "#ffffff"
	},

	{feeling: "humour",
	 quote: "An unconditional basic income provides more happiness to the people.",
	 scenario: "A society, in which people relax more and which they can do if they will get an unconditional basic income, is a happier society. People will have a better opportunity to not only spend time at work but also learn i.e. arts and crafts, music, theater and enjoy culture. Different cultural experiences releases tension and provides more happiness among the population.",
	 backgroundColor: "#ffffff",
	 backgroundColorLight: "#ffffff",
	 color: "#000000"
	},
	{feeling: "sadness",
	 quote: "The money should be given to the people who needs them most. Why would people who already can support themselves have the right to an unconditional basic income as well?",
	 scenario: "This idea that people would receive an unconditional basic income even if they have everything they need already, including a good income, doesn´t feel good. We need first and foremost to take care of the people who are at the bottom of society. That is where we should focus in creating more economic equality and reduce poverty.",
	 backgroundColor: "#d9d9d9",
	 backgroundColorLight: "#f2f2f2",
	 color: "#000000"
	},
	{feeling: "wonder",
	 quote:   "I predict with great confidence that a basic income scheme will make a huge difference, lowering child malnutrition, reducing family poverty, raising women's economic status and boosting economic development (Guy Standing)",
	 scenario: "Numerous basic income trials in different parts of the world have already shown the huge impact in communities that the introduction of a basic income could have. Deeple rooted phenomena of poverty or inequality that we almost take for granted are substantially diminished or completely eradicated. Our future scenario is that of completely transformed communities.",
	 backgroundColor: "#ffff00",
	 backgroundColorLight: "#ffff99",
	 color: "#000000"},
	{feeling: "anger",
	 quote: "Why would people just get money for free. I've been working all my life. You get nothing for free!",
	 scenario: "Giving away money like that with no expectation of an effort in return is deeply unfair. If people want something they should work for it and make an effort. I don´t want my taxmoney to be given away for free to lazy people.",
	 backgroundColor: "#ff0000",
	 backgroundColorLight: "#ffb3b3",
	 color: "#FFFFFF"},
	{feeling: "horror",
	 quote:  "Divorce rates go up. And our society will fall apart.",
	 scenario: "Research has shown that divorce rates might go up when an unconditional basic income is introduced. This is definitely not a good development for society or the children who are affected when families break apart. The effects of an unconditional basic income will in the end affect our whole society so that the very foundations fall apart. This is not good.",
	 backgroundColor: "#000000",
	 backgroundColorLight: "#f2f2f2",
	 color: "#FFFFFF"}
    ];

    $(document).ready(function() {
	displayQuote();
	
    function displayQuote(){
	var quoteContainer = document.getElementById("quoteContainer");
//	console.log("num " + num);
//	console.log("dindex " + dindex);
//	console.log("mod " + (dindex % quotes.length));
	console.log("quote " + feelingData[currentIndex].quote);	
	quoteContainer.innerHTML= "<div class=\"quote\">" + feelingData[currentIndex].quote + "</div>";
	quoteContainer.style.backgroundColor=feelingData[currentIndex].backgroundColor;
	quoteContainer.style.color=feelingData[currentIndex].color;

	var scenarioContainer = document.getElementById("scenarioContainer");
	scenarioContainer.innerHTML = feelingData[currentIndex].scenario;
	scenarioContainer.style.backgroundColor=feelingData[currentIndex].backgroundColor;
	scenarioContainer.style.color=feelingData[currentIndex].color;

	var emotionContainer = document.getElementById("emotionContainer");
	emotionContainer.innerHTML=feelingData[currentIndex].feeling;
	emotionContainer.style.backgroundColor=feelingData[currentIndex].backgroundColorLight;

	var textContainer = document.getElementById("textContainer");
	textContainer.style.backgroundColor=feelingData[currentIndex].backgroundColor;




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
	    currentIndex = (currentIndex <= 0) ? feelingData.length - 1 : currentIndex - 1;
//	    currentIndex = (currentIndex - 1) % quotes.length;
	    displayQuote();
	    e.preventDefault();
	});
	
	/* Next button */
	$('.controls .next').click(function(e) {

	    carousel.cycleActive('next');
	    //	    var sindex = $(this).index('li');
	    currentIndex = (currentIndex + 1) % feelingData.length;
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
