jQuery(document).ready(function() {
	
	"use strict";
	
	//TWEET CAROUFREDSEL...
	if(jQuery('#dt-sc-tweets_container .dt-sc-tweet_list').size()) {
		jQuery('#dt-sc-tweets_container .dt-sc-tweet_list').carouFredSel({
			width: 'auto',
			height: 'auto',
			scroll: {
				items: 1,
				duration: 600
			},
			direction: 'up',
			prev: '.dt-sc-tweet-nav .dt-sc-prev',
			next: '.dt-sc-tweet-nav .dt-sc-next',
			items: {
				height: 'auto',
				visible: {
					min: 1,
					max: 1
				}
			}
		});
	}
	
	//TABS...
	if(jQuery('ul.dt-sc-tabs-frame').length > 0) {
		jQuery('ul.dt-sc-tabs-frame').tabs('> .dt-sc-tabs-frame-content');
	}

	if(jQuery('ul.dt-sc-tabs-vertical-frame').length > 0) {
		jQuery('ul.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content');
	}

	 /*Toggle shortcode*/
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	jQuery('.dt-sc-toggle-frame-set').each(function(){
		var $this = jQuery(this),
		$toggle = $this.find('.dt-sc-toggle-accordion');
		$toggle.click(function(){
			if( jQuery(this).next().is(':hidden') ) {
				$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
				jQuery(this).toggleClass('active').next().slideDown();
			}
		return false;
	});
	//Activate First Item always
	$this.find('.dt-sc-toggle-accordion:first').addClass("active");
	$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});/* Toggle Shortcode end*/ 

	//Donut Chart...
	jQuery('.donutChart').each(function(){
		jQuery(this).one('inview', function (event, visible) {
			if(visible === true) {
				var bgcolor, fgcolor = "";
				
				if(jQuery(this).attr('data-bgcolor') !== "") bgcolor = jQuery(this).attr('data-bgcolor'); else bgcolor = '#f5f5f5';
				if(jQuery(this).attr('data-fgcolor') !== "") fgcolor = jQuery(this).attr('data-fgcolor'); else fgcolor = '#E74D3C';
				
				jQuery(this).donutchart({'size': 140, 'donutwidth': 10, 'fgColor': fgcolor, 'bgColor': bgcolor, 'textsize': 45 });
				jQuery(this).donutchart('animate');
			}
		}); 
	});

	  //Scroll to top
	  jQuery("a.scrollTop").each(function(){
		jQuery(this).click(function(e){
		  jQuery("html, body").animate({ scrollTop: 0 }, 600);
		  e.preventDefault();
		});
	  });//Scroll to top end

  //Skillset
  animateSkillBars();
  jQuery(window).scroll(function(){ animateSkillBars(); });
  function animateSkillBars(){
    var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
    jQuery('.dt-sc-progress'+applyViewPort).each(function(){
      var progressBar = jQuery(this),
          progressValue = progressBar.find('.bar').attr('data-value');
      
      if (!progressBar.hasClass('animated')) {
        progressBar.addClass('animated');
        progressBar.find('.bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.bar-text').fadeIn(400); });
      }
    });
  }

  /*Tooltip*/
  if(jQuery(".dt-sc-tooltip-bottom").length){
    jQuery(".dt-sc-tooltip-bottom").each(function(){	jQuery(this).tipTip({maxWidth: "auto"}); });
  }
  
  if(jQuery(".dt-sc-tooltip-top").length){
    jQuery(".dt-sc-tooltip-top").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
  }
  
  if(jQuery(".dt-sc-tooltip-left").length){
    jQuery(".dt-sc-tooltip-left").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
  }
  
  if(jQuery(".dt-sc-tooltip-right").length){
    jQuery(".dt-sc-tooltip-right").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
  }
  /*Tooltip End*/


	//TESTIMONIAL QUOTE...
	if(jQuery('.dt-sc-quotes-wrapper').size()) {
		jQuery('.dt-sc-quotes-wrapper').quovolver({
			children        : 'li',
			transitionSpeed : 300,
			autoPlay        : true,
			equalHeight     : true,
			navPosition     : 'below',
			navNum			: true
		});
	}


  /*Partner Carousel*/
  if(jQuery(".dt-sc-partner-carousel-wrapper").length) {
    jQuery(".dt-sc-partner-carousel-wrapper ul.dt-sc-partner-carousel").each(function(){
      var $item = jQuery(this),
          $max  = $item.data("max"),
          $min  = $item.data("min"),
          $width = $item.data("item-width"),
          $scroll = $item.data("scroll"),
          $prev = $item.next('div.carousel-arrows').find('a.partner-prev-arrow'),
          $next = $item.next('div.carousel-arrows').find('a.partner-next-arrow');
      
      $item.carouFredSel({
        responsive: true,
        auto: false,
        width: '100%',
        prev: $prev,
        next: $next,
        height: 'auto',
        scroll: $scroll,
        items: { width: $width,visible: { min: $min, max:$max}  }
      });
    });
  }

  /*Portfolio Carousel*/
  if(jQuery(".portfolio-carousel-wrapper").length) {
    jQuery(".portfolio-carousel-wrapper ul.portfolio-carousel").each(function(){
      var $item = jQuery(this),
          $max  = 3,
          $min  = 1,
          $width = 300,
          $scroll = 1,
          $prev = $item.next('div.carousel-arrows').find('a.portfolio-prev-arrow'),
          $next = $item.next('div.carousel-arrows').find('a.portfolio-next-arrow');
      
      $item.carouFredSel({
        responsive: true,
        auto: false,
        width: '100%',
        prev: $prev,
        next: $next,
        height: 345,
        scroll: $scroll,
        items: { width: $width,visible: { min: $min, max:$max}  }
      });
    });
  }
  
  /*Properties Carousel*/
  if(jQuery(".dt-sc-properties-carousel-wrapper").length) {
    jQuery(".dt-sc-properties-carousel-wrapper ul.dt-sc-properties-carousel").each(function(){
      var $item = jQuery(this),
          $max  = $item.data("column"),
          $min  = 1,
          $width = 340,
          $scroll = 1,
          $prev = $item.next('div.carousel-arrows').find('a.properties-prev-arrow'),
          $next = $item.next('div.carousel-arrows').find('a.properties-next-arrow'),
		  $pc_height;
      
	  if($max == 2) $pc_height = 570;
	  else if($max == 3) $pc_height = 510;
	  else if($max == 4) $pc_height = 508;
	  
      $item.carouFredSel({
        responsive: true,
        auto: false,
        width: '100%',
        prev: $prev,
        next: $next,
        height: $pc_height,
        scroll: $scroll,
        items: { width: $width, visible: { min: $min, max:$max}  }
      });
    });
  }
  

	jQuery("ul.dt-sc-ads-carousel").each(function(){
		var $height = jQuery(this).data("height");
		jQuery('.dt-sc-ads-carousel').cycle({
			fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
			speed: 1000,
			fit: 1, 
			height: $height,
			width: '100%'
		});
	});

	//Donut Chart...
	jQuery('.donutChart').each(function(){
		jQuery(this).one('inview', function (event, visible) {
			if(visible === true) {
				var bgcolor, fgcolor = "";
				
				if(jQuery(this).attr('data-bgcolor') !== "") bgcolor = jQuery(this).attr('data-bgcolor'); else bgcolor = '#f5f5f5';
				if(jQuery(this).attr('data-fgcolor') !== "") fgcolor = jQuery(this).attr('data-fgcolor'); else fgcolor = '#E74D3C';
				
				jQuery(this).donutchart({'size': 140, 'donutwidth': 10, 'fgColor': fgcolor, 'bgColor': bgcolor, 'textsize': 45 });
				jQuery(this).donutchart('animate');
			}
		}); 
	});
	

	/* Gallery Lightbox */
	if(jQuery().colorbox) {
		jQuery("a#dt-gallery-item").colorbox({inline:true, rel:'#dt-gallery-item', preloading: true, arrowKey: true, loop: true});
	}


});

jQuery(window).load(function() {

   if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
	 jQuery(".dt-sc-fullwidth-video-section").each(function(){
		jQuery(this).find(".dt-sc-mobile-image-container").show();
		jQuery(this).find(".dt-sc-video").remove();
	 });
   }
  
	var $gw_gallery = 20;
  	if (jQuery('section#primary').hasClass('with-left-sidebar') || jQuery('section#primary').hasClass('with-right-sidebar')) {
		$gw_gallery = 15;
	}
  
	jQuery(window).smartresize(function(){
		if(jQuery$(".dt-sc-gallery-isotope").length ) {
			jQuery(".dt-sc-gallery-isotope").isotope({itemSelector : '.dt-sc-gallery-item',transformsEnabled:false,masonry: { gutterWidth: $gw_gallery} });
		}
	});
  
	//Gallery
	if( jQuery(".dt-sc-gallery-isotope").length ){
		jQuery(".dt-sc-gallery-isotope").isotope({itemSelector : '.dt-sc-gallery-item',transformsEnabled:false,masonry: {gutterWidth: $gw_gallery} });
	}//Gallery
  
});