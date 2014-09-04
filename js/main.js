$(document).ready(function(){
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

    //google map
    google.maps.event.addDomListener(window, 'load', initialize);

    // form check
    $('#form .form-control').keypress(function(){
		var val = $(this).val();
		if(val != ""){
			$(this).prop({
				placeholder : ""
			})
		}
	});


	$('#submit').click(function(){
		var name = $('#form #name');
		var message = $('#form #message');
		checkValid(name,message);
	});
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


// ====== Google Map ====== //

function initialize() {
	var targetLatLng = new google.maps.LatLng(24.98658,121.51778);

	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		center                : new google.maps.LatLng(25.000815, 121.528525),
		zoom                  : 14,
		mapTypeId             : google.maps.MapTypeId.ROADMAP,

		
		disableDoubleClickZoom: false,
		keyboardShortcuts     : false,
		draggable             : false,
		zoomControl           : false,
		mapTypeControl        :false,
		overviewMapControl    :false,
		panControl            :false,
		rotateControl         :false,
		scaleControl          :false,
		scrollwheel           :false,
		streetViewControl     :false
	}
	var map = new google.maps.Map(map_canvas, map_options);

	var marker = new google.maps.Marker({
		position: targetLatLng,
		map: map,
		title: "開趴囉!",
	});
	marker.setMap(map);

	var styles = [
		{
			stylers: [
				
				{ saturation: -20 }
			]
		}
	];

	map.setOptions({styles: styles});
}


// form


function checkValid(name, message){
	if(name.val() == ""){
		warning(name, "請填入姓名");
	}

	if(message.val() == ""){
		warning(message, "請填入內容");
	}

	if(name.val() != "" && message.val() != ""){
		var name = $( "#form").find("input[id='name']").val();
		var message = $( "#form").find("input[id='message']").val();
		var url = "http://www.csie.ntu.edu.tw/~b99902079/partyhouse/message.php";
		$.ajax({
			type: 'POST',
			url: url,
			crossDomain: true,
			data: { name : name, message : message},
			dataType: 'json',
			success:function(){
				console.log("s");
			},
			error: function(){
				console.log("e");
			}
		});
	}
}

function warning(obj,text){
	obj.prop({
		placeholder : text
	});
}


