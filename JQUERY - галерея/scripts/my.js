(function($) {	$('.slider_nav').css('display', 'block');	$('.slider').css('overflow', 'hidden');	var sliderUL = $('div.slider').children('ul'),		imgs = sliderUL.find('img'),		imgW = imgs[0].width,		imgH = imgs[0].height,		imgsL = imgs.length,		cur = 0,		totImgW = imgW * imgsL;	$('.slider_nav').show().find('button').on('click', function() {		var dir = $(this).data('dir'),			loc = imgW;		(dir === 'next') ? ++cur : --cur;		if (cur === -1) {			cur = imgsL - 1;			loc = totImgW - imgW;			dir = 'next';		}		else if (cur === imgsL) {			cur = 0;			loc = 0;		}		transition(sliderUL, loc, dir);	});	function transition(container, loc, dir) {		if (loc !== 0) {			var unit = (dir === 'next') ? "-=" : '+=';		}		container.animate({			'margin-left': unit ? (unit + loc) : loc		});		};})(jQuery);