$(function(){ //section8.js
	section8Obj.init();
}); 

var section8Obj = {
	init: function(){
		section8Obj.atagEvent();
	},
	atagEvent: function(){
		$('.section8-Atag').on({
			mouseenter: function(){
				$(this).prev().find('img').css({transform:'scale(1.1)',transition:'all 0.3s'});
			},			
			mouseleave: function(){
				$(this).prev().find('img').css({transform:'scale(1)',transition:'all 0.3s'});
			},
			focusin: function(){
				$(this).prev().find('img').css({transform:'scale(1.1)',transition:'all 0.3s'});
			},			
			focusout: function(){
				$(this).prev().find('img').css({transform:'scale(1)',transition:'all 0.3s'});
			}
		});
	}
};

/*--------------------------------------------------------------------------------------------*/
//section8.js

































