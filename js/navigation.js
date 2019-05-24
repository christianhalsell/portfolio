var CH = CH || {};

CH.navigation = (function() {
	"use strict";

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
			navigation();
		}
	}
})();

CH.navigation.init();
