(function() {


    
    $(document).ready(function() {
	
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
	    e.preventDefault();
	});
	
	/* Next button */
	$('.controls .next').click(function(e) {
	    carousel.cycleActive('next');
	    e.preventDefault();
	});
	
	/* Manaully click an item anywhere in the carousel */
	$('.carousel .item').click(function(e) {
	    var index = $(this).index('li');
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
