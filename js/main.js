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


	//scroll animation
    $('.scrollto').click(function(){
    	var target = $(this).attr('href');
    	var offset =  60;
    	console.log($(target).offset().top);
    	$('html, body').animate({
    		'scrollTop': $(target).offset().top - offset
    	}, 500);
    });

})

