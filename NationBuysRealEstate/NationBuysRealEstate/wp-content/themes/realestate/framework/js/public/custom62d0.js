jQuery(window).load(function(){
	jQuery('#dtLoading').fadeOut(2000);
});

jQuery(document).ready(function($){
  "use strict";
    
	$(window).load(function() {
		
		
		var $container = $('.portfolio-container'), $width;
		if( $container.length) {
			
			$width = 20;
	
			$(window).smartresize(function(){
				$container.css({overflow:'hidden'}).isotope({itemSelector : '.column',masonry: { gutterWidth: $width } });
			});
			
			$container.isotope({
			  filter: '*',
			  masonry: { gutterWidth: $width },
			  animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});
			
		}
		
		if($("div.sorting-container").length){
			$("div.sorting-container a").click(function(){
				$width = 20;				
				$("div.sorting-container a").removeClass("active-sort");
				var selector = $(this).attr('data-filter');
				$(this).addClass("active-sort");
				$container.isotope({
					filter: selector,
					masonry: { gutterWidth: $width },
					animationOptions: { duration:750, easing: 'linear',  queue: false }
				});
			return false;	
			});
		}
		//Portfolio isotope End
		
		
		var $gw_blog = 20;
		if ($('section#primary').hasClass('with-left-sidebar') || $('section#primary').hasClass('with-right-sidebar')) {
			$gw_blog = 15;
		}

		//Blog
		if( $(".blog-isotope").length ){
			$(".blog-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutterWidth: 15} });
		}//Blog
		
				
	});
	
	
	var $gw_blog = 20;
  	if ($('section#primary').hasClass('with-left-sidebar') || $('section#primary').hasClass('with-right-sidebar')) {
		$gw_blog = 15;
	}
  
	$(window).smartresize(function(){
		if( $("div.blog-isotope").length ) {
			$("div.blog-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutterWidth: $gw_blog} });
		}
	});

	//Blog
	if( $("div.blog-isotope").length ){
		$("div.blog-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutterWidth: $gw_blog} });
	}//Blog

	
  	//Mega Menu
	function megaMenu() {
		var screenWidth = $(document).width(),
			containerWidth = $(".container").width(),
			containerMinuScreen = (screenWidth - containerWidth)/2;
			
		$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
			var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
			MegaMenuChildContainerWidth = $(this).width();

      if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
					 
         var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
         var marginLeftFromContainer = containerMinuScreen + marginFromLeft + 20;
						 
         if( MegaMenuChildContainerWidth > containerWidth ){
           var MegaMinuContainer        = ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10;                         
           var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
           marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
           $(this).css('left',marginLeftFromContainerVal);
         }
         else {
           marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
           $(this).css('left',marginLeftFromContainer);
         }
       }
		});
	}
	
	megaMenu();
	$(window).smartresize(function(){
		megaMenu();
	});
	
	//Menu Hover Animation...
	$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(function(){
		//mouseover 
		if( $(this).find(".megamenu-child-container").length  ){
			$(this).find(".megamenu-child-container").stop().fadeIn('fast');
		} else {
			$(this).find("> ul.sub-menu").stop().fadeIn('fast');
		}
		
	},function(){
		//mouseout
		if( $(this).find(".megamenu-child-container").length ){
			$(this).find(".megamenu-child-container").stop(true, true).hide();
		} else {
			$(this).find('> ul.sub-menu').stop(true, true).hide(); 
		}
	});
  
  
  //IE - remove height & width 
  if( !jQuery("html").hasClass('csstransforms') ) {
	  jQuery("body").find('img').each(function(){
		  jQuery(this).removeAttr('width');
		  jQuery(this).removeAttr('height');
	  });
  }
  
  if( mytheme_urls.scroll === "enable") {
	  jQuery("html").niceScroll({zindex:99999,cursorborder:"1px solid #424242"});
  }
  
  jQuery().UItoTop({ easingType: 'easeOutQuart' });
  
 
  if( mytheme_urls.stickynav === "enable") {
  	jQuery("#header-wrapper").sticky({ topSpacing: 0 });
  }

  /* Mibile Nav */	
  jQuery('#main-menu > ul').mobileMenu({
    defaultText: 'Navigate to...',
    className: 'mobile-menu',
    subMenuDash: '&ndash;&nbsp;'
  });
  
  
  jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
    animation_speed:'normal',
    theme:'light_square',
    slideshow:3000,
    autoplay_slideshow: false,
    social_tools: false,
    deeplinking:false
  });
  
	//Gallery Blog Slider...
    if( ($(".entry-gallery-post-slider").length) && ( $(".entry-gallery-post-slider li").length > 1 ) ){
     $(".entry-gallery-post-slider").bxSlider({ auto:false, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true });
    }
  
  //Portfolio
  if( (jQuery(".portfolio-slider").length) && (jQuery(".portfolio-slider li").length > 1) ) {
   jQuery('.portfolio-slider').bxSlider({ auto:false, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true });
  }

	//Agents Carousel
	if( $('.dt-sc-agent-carousel').length ) {
		$('.dt-sc-agent-carousel').each(function(){
			var pagger = $(this).parents(".dt-sc-agent-carousel-wrapper").find("div.carousel-arrows"),
			next = pagger.find("a.agents-next"),
			prev = pagger.find("a.agents-prev") ;

			$(this).carouFredSel({
				responsive:true,
				auto:false,
				width:'100%',
				height: '100%',
				scroll:1,
				items:{ 
					width:600,
					height: '100%',
					visible: {min: 1,max: 2} 
				},
				prev:prev,
				next:next
			});
		});
	}

  
  /*Sending Mail*/
  if( jQuery(".contact-form").length ) {
    jQuery(".contact-form").each(function(){
      jQuery(this).submit(function(e){
        var $form = jQuery(this),
            $msg = jQuery(this).prev('div.message'),
            $action = $form.attr('action');
        
        jQuery.post($action,$form.serialize(),function(data){
          $form.fadeOut("fast", function(){$msg.hide().html(data).show('fast');});
        });
        e.preventDefault();
      });
    });
  }

  //Buddha Bar	
  jQuery("div#bbar-open").click(function(e){
    jQuery(this).hide();	
    jQuery("div#bbar-body").slideDown('slow',function(){jQuery("div#bbar-close").show();});
    e.preventDefault();
  });

  jQuery("div#bbar-close").click(function(e){
    jQuery("div#bbar-close").hide();
    jQuery("div#bbar-body").slideUp('slow');
    jQuery("div#bbar-open").slideDown();
    e.preventDefault();
  });//Buddha Bar End
  
  //Woo
  jQuery(".quantity input[type=number]").each(function(){
	var number = jQuery(this),
	newNum = jQuery(jQuery('<div />').append(number.clone(true)).html().replace('number','text')).insertAfter(number);
	number.remove();
  });//Woo
   
  //Scroll to top
  jQuery("a.scrollTop").each(function(){
    jQuery(this).click(function(e){
      jQuery("html, body").animate({ scrollTop: 0 }, 600);
      e.preventDefault();
    });
  });//Scroll to top end   
   
   
	//Property Slider
	$(".porperty-slider").each(function(){
		if( $(this).find("li").length > 1 ){
			$(this).bxSlider({ auto:false, video:true, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true });
		}
	});//Property Slider

	//Property Slider in Single Property
	if( $(".property-gallery").find("li").length > 1 ) {
		$(".property-gallery").bxSlider({ auto:false, video:true, useCSS:false, pagerCustom: '#bx-pager', autoHover:true, adaptiveHeight:true });
	}//Property Slider in Single Property
   
    $('.wp-video').css('width', '100%');
    $("div.dt-video-wrap").fitVids();
	
	if($("div#single-gmap").length ) {

		var $title = $("div#single-gmap").data("title");

		var $lat = $("div#single-gmap").data("lat");
			$lat = ( $.trim($lat).length > 0  ) ? $lat :  "-37.80544394934272";

		var $lng = $("div#single-gmap").data("lng");	
			$lng = ( $.trim($lng).length > 0 ) ? $lng : "144.964599609375";

		var myLatlng = new google.maps.LatLng($lat,$lng);
		var mapOptions = {
			zoom: 8,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById('single-gmap'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title : $title
		});

  		var infowindow = new google.maps.InfoWindow({
      		content: $title+"<br>"+$("div#single-gmap").data("address")
  		});

	  google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
  	  });
	}
	
	
	if( $("form#property-enquiry").length ) {
		$("form#property-enquiry").submit(function(event){
			event.preventDefault();

			var $this = $(this);
			var $action = $this.attr('action');

			$.post($action,{
				txtfname : $("[name=txtfname]").val(),
				txtlname : $("[name=txtlname]").val(),
				txtemail : $("[name=txtemail]").val(),
				phone : $("[name=phone]").val(),
				message : $("[name=message]").val(),
				property_link : $("[name=property_link]").val(),
				admin_emailid : $("[name=admin_emailid]").val(),
				agents : $("[name=txtagents]").val(),
				txtproperty: $("[name=txtproperty]").val()
			},function(data){
				$this.find("#message").html(data);
			});
		});
	}
	
	
	$("select").each(function(){
		if($(this).css('display') != 'none') {
			$(this).wrap( '<div class="selection-box"></div>' );
		}
	});
	
	
});