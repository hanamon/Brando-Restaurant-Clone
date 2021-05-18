$(function(){ //section6.js

	section6Obj.init();
}); 

var section6Obj = {
	init: function(){
		section6Obj.bigBoxBtnEvent();
	},
	bigBoxBtnEvent: function(){
		$('.bigBoxBtn').on({
			mouseenter: function(){
				$(this).next().find('.section6-ani').stop().animate({marginTop:0,    opacity:1},500);
			},
			mouseleave: function(){
				$(this).next().find('.section6-ani').stop().animate({marginTop:-400, opacity:0},500);
			},
			focusin: function(){
				$(this).next().find('.section6-ani').stop().animate({marginTop:0,    opacity:1},500);
			},
			focusout: function(){
				$(this).next().find('.section6-ani').stop().animate({marginTop:-400, opacity:0},500);
			}
		});
	}
};

/*-------------------------------------------------------------------------------------------------------*/
//section6.js













































