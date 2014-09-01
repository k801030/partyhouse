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
})

