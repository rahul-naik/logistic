
$(function(){
   
    // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
   
   $('.nav li a').on('click',function(e){
       e.preventDefault();
       var thisHref = $(this).attr('data-href') ;
       $('html,body').animate({
            scrollTop: $("#"+thisHref).offset().top},
            'slow'); 
       });
    
   $back_to_top.on('click',function(){
       $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
    });  
    
   

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
    
});