$(function(){ //section1.js
	section1OBJ.init();
});

var winW = winH = imgH = marT = 0;

var section1OBJ = {
	init: function(){
		section1OBJ.setTimeoutEvent();
		section1OBJ.winResizeEvent();
	},
	setTimeoutEvent: function(){
		setTimeout(section1OBJ.windowResizeEvent, 100);
	},
	winResizeEvent: function(){
		$(window).resize(function(){
			section1OBJ.windowResizeEvent();
		});
	},
	windowResizeEvent: function(){
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		imgH = $('#section1>div>h2').innerHeight();
		
		$('#section1').css({ height: winH });
	}
};
/*------------------------------------------------------------------*/
//section1.js