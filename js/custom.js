var CH = CH || {};

CH.customScripts = (function() {
	"use strict";

	var $document = $(document);
	var $window = $(window);

	var expandButton = function() {
		var $mobileNavButton = $('#mobileNavButton'),
			$accordion = $('#accordion'),
			$navA = $('nav a');

	    // make the hamburger menu work
	    $mobileNavButton.on('click.expandNav', function() {
	    	if ($accordion.is(':hidden')) {
	            $accordion.slideDown();
	        } else {
	            $accordion.slideUp();
	        }
	    });

	    // make expandable nav retract on click
	    $navA.on('click', function() {
	    	if ($mobileNavButton.is(':visible')) {
	    		$accordion.slideUp();
	    	}
	    });

	    // bring back nav if it's hidden, and viewport is wider than mobile
	    $window.resize(function() {
		    if ($accordion.is(":hidden")) {
		    	$accordion.removeAttr('style');
		    }
	    });
	};

	var disableForm = function() {
		var $informationRequestForm = $('#informationRequestForm');

		$informationRequestForm.submit(function(e) {
			e.preventDefault();
			alert("Send form is disabled");
		});
	};

	var panelHeight = function() {
		var $height = $(window).height();

		var resizeHeight = function() {
			if ($window.width() > 768 - 18) { // -18 for scrollbar
				$('.banner').css({'height' : $height});
			} else {
				$('.banner').removeAttr('style');
			}
		};

		$document.ready(resizeHeight);
		$window.resize(resizeHeight);
	};

	var navigation = function() {
		$('ul.nav a').add('.logo a').on('click', function(e) {
			e.preventDefault();
			var $anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1250,'easeInOutExpo');
		});
	};

	return {
		init: function() {
			expandButton();
			panelHeight();
			//disableForm();
			navigation();
		}
	}
})();

CH.customScripts.init();
