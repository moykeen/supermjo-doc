
jQuery(document).ready(function() {
	
	/*
	    Wow
	*/
    //new WOW().init();
	
	/*
	    Slider
	*/
	$('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        prevText: "",
        nextText: ""
    });
	
	/*
	    Slider 2
	*/
    /*
	$('.slider-2-container').backstretch([
	  "assets/img/slider/5.jpg"
	, "assets/img/slider/6.jpg"
	, "assets/img/slider/7.jpg"
	], {duration: 3000, fade: 750});
	*/
	/*
	    Image popup (home latest work)
	*/

    /*
	$('.view-work').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'The image could not be loaded.',
			titleSrc: function(item) {
				return item.el.parent('.work-bottom').siblings('img').attr('alt');
			}
		},
		callbacks: {
			elementParse: function(item) {
				item.src = item.el.attr('href');
			}
		}
	});
	
*/

   
	
});

/*
jQuery(window).load(function() {
	
	
	$('.portfolio-masonry').masonry({
		columnWidth: '.portfolio-box', 
		itemSelector: '.portfolio-box',
		transitionDuration: '0.5s'
	});
	
	$('.portfolio-filters a').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')) {
	    	$('.portfolio-filters a').removeClass('active');
	    	var clicked_filter = $(this).attr('class').replace('filter-', '');
	    	$(this).addClass('active');
	    	if(clicked_filter != 'all') {
	    		$('.portfolio-box:not(.' + clicked_filter + ')').css('display', 'none');
	    		$('.portfolio-box:not(.' + clicked_filter + ')').removeClass('portfolio-box');
	    		$('.' + clicked_filter).addClass('portfolio-box');
	    		$('.' + clicked_filter).css('display', 'block');
	    		$('.portfolio-masonry').masonry();
	    	}
	    	else {
	    		$('.portfolio-masonry > div').addClass('portfolio-box');
	    		$('.portfolio-masonry > div').css('display', 'block');
	    		$('.portfolio-masonry').masonry();
	    	}
		}
	});
	
	$(window).on('resize', function(){ $('.portfolio-masonry').masonry(); });
	
	// image popup	
	$('.portfolio-box img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'The image could not be loaded.',
			titleSrc: function(item) {
				return item.el.siblings('.portfolio-box-text').find('h3').text();
			}
		},
		callbacks: {
			elementParse: function(item) {				
				if(item.el.hasClass('portfolio-video')) {
					item.type = 'iframe';
					item.src = item.el.data('portfolio-video');
				}
				else {
					item.type = 'image';
					item.src = item.el.attr('src');
				}
			}
		}
	});
	
});
*/
