$(function(){ //section11.js
	section11Obj.init();
}); 

var section11Obj = {
	init: function(){
		section11Obj.imgHeightFn();
		section11Obj.setTimeoutEvent();
		section11Obj.resizeEvent();
	},
	setTimeoutEvent: function(){
		setTimeout( section11Obj.imgHeightFn, 100 );
	},
	resizeEvent: function(){
		$(window).resize(function(){
			section11Obj.imgHeightFn();
		});
	},
	imgHeightFn: function(){
		var imgH = 0;
		imgH = $('.section11-left-gallery-wrap>div>a>img').innerHeight();
		$('.section11-right-text-wrap>div').css({height:imgH});
		$('.section11-right-text-wrap>div>span>a').css({fontSize:imgH*0.064864865});	   
	}
};

/*-------------------------------------------------------------------------------------------------*/
//section11.js