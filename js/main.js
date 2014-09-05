$(document).ready(function(){

	// viewport plugin

	$('.img-right').addClass('myHidden').viewportChecker({
		classToAdd: 'animated-2s fadeInRight',
		offset    : 100,
		repeat    : false
    });

    $('.img-left').addClass('myHidden').viewportChecker({
		classToAdd: 'animated-2s fadeInLeft',
		offset    : 100,
		repeat    : false
    });

    $('.trick').viewportChecker({
		classToAdd: 'animated-2s hinge',
		offset    : 300,
		repeat    : false
    });

	// home     

	$('.home').delay(500).animate({
		opacity : 1,
	},1000,function(){
		 $('.home-textbox').delay(500).animate({
	    	opacity : 1,
	    	left : '-=50px'
	    },700);
	});


	// button scroll animation

    $('.scrollto').click(function(){
    	var target = $(this).attr('target');
    	var offset =  70;
    	$('html, body').animate({
    		'scrollTop': $(target).offset().top - offset
    	}, 500);
    });

    // scroll animation

    $(document).on('scroll', onScroll);

    // google map

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
		var offset = 180;
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
	// shortcut to feedack website
	if(message.val() == "請賜給我神奇力量"){
		window.location.href="https://docs.google.com/spreadsheets/d/1nkMiz6bBFCyIJGan9hLNIWXTF7_aNk5IZg82MCFxiaU";
		return;
	}

	if(name.val() == ""){
		warning(name, "請填入姓名");
	}

	if(message.val() == ""){
		warning(message, "請填入內容");
	}

	if(name.val() != "" && message.val() != ""){

		crossDomainPost();
		$('.feedback-alert').animate({
			opacity: 1
		});
		$('.feedback-alert').delay(1000).animate({
			opacity: 0
		}, 1000);

		clear_form(name);
		clear_form(message);
	}
}

function warning(obj,text){
	obj.prop({
		placeholder : text
	});
}
function clear_form(obj){
	obj.prop({
		placeholder : "",
		value : ""
	});
}




//

function crossDomainPost() {
  var url = "https://docs.google.com/forms/d/1eIZN1ucPDnS2vEAjXo6w-OvdR5rFzuyQzAhNFz609l4/formResponse";
  var entry_1 = 'entry_871423001';
  var entry_2 = 'entry_2070016568';
  var name = $( "#form").find("input[id='name']").val();
  var message = $( "#form").find("textarea[id='message']").val();

  // Add the iframe with a unique name
  var iframe = document.createElement("iframe");
  var uniqueString = "CHANGE_THIS_TO_SOME_UNIQUE_STRING";
  document.body.appendChild(iframe);
  iframe.style.display = "none";
  iframe.contentWindow.name = uniqueString;

  // construct a form with hidden inputs, targeting the iframe
  var form = document.createElement("form");
  form.target = uniqueString;
  form.action = url;
  form.method = "POST";

  // repeat for each parameter
  var input = document.createElement("input");
  input.type = "hidden";
  input.name = entry_1;
  input.value = name;
  form.appendChild(input);

  var input = document.createElement("input");
  input.type = "hidden";
  input.name = entry_2;
  input.value = message;
  form.appendChild(input);


  document.body.appendChild(form);
  form.submit();
}
