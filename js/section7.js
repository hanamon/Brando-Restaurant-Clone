$(function(){ //section7.js
	section7Obj.init();
}); 

var section7Obj = {
	init: function(){
		section7Obj.shefBtnEvent();
	},
	shefBtnEvent: function(){
		$('.shefBtn').on({
			mouseenter: function(){
				$(this).prev().stop().animate({opacity:1, bottom:'5%'}, 500);
				$(this).prev().prev().css({opacity:0.5, transform:'scale(1.1)', filter:'blur(2.5px)', transition:'all 0.5s'});
			},
			focusin: function(){
				$(this).prev().stop().animate({opacity:1, bottom:'5%'}, 500);
				$(this).prev().prev().css({opacity:0.5, transform:'scale(1.1)', filter:'blur(2.5px)', transition:'all 0.5s'});
			},
			mouseleave: function(){
				$(this).prev().stop().animate({opacity:0, bottom:'-35%'}, 500);
				$(this).prev().prev().css({opacity:1, transform:'scale(1)', filter:'blur(0)', transition:'all 0.5s'});
			},
			focusout: function(){
				$(this).prev().stop().animate({opacity:0, bottom:'-35%'}, 500);
				$(this).prev().prev().css({opacity:1, transform:'scale(1)', filter:'blur(0)', transition:'all 0.5s'});
			}
		});
	}
};

/*-----------------------------------------------------------------------------------------------------*/
//section7.js