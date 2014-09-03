$(document).ready(function(){

	var zoneControllers = {
		"zone-beginning" : "zone-beginning",
		"zone-2f" : "zone-2f",
		"zone-3f" : "zone-3f",
		"zone-4f" : "zone-4f"
	}

	$.each(zoneControllers,function(index, controller){
		console.log(index+":"+controller);
	});


	//button scroll animation
    $('.scrollto').click(function(){
    	var target = $(this).attr('target');
    	var offset =  65;
    	console.log($(target).offset().top);
    	$('html, body').animate({
    		'scrollTop': $(target).offset().top - offset
    	}, 500);
    });

    //scroll animation
    $(document).on('scroll', onScroll);
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('#header-bar li').each(function(){
		var offset = 120;
		var target = $(this).find('a').attr('target');
		if ( scrollPos + offset > $(target).position().top && 
			 scrollPos + offset < $(target).position().top + $(target).height() ){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	});
}

