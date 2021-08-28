$(function(){ //section234.js
	section234OBJ.init();
});

//세로비율 = 세로높이 / 가로너비
//세로높이 = 가로너비 * 세로비율
var wWidth  = $('.SectionBoxBlock').innerWidth();
var	hHeight = $('.SectionBoxBlock').innerHeight();
var hPer 	= 0; //세로비율 변수
var	resultH = 0; //계산결과 변수

var section234OBJ = {
	init: function(){
		wWidth  = $('.SectionBoxBlock').innerWidth();
		hHeight = $('.SectionBoxBlock').innerHeight();
		hPer 	= 0;
		resultH = 0;
		
		hPer    = hHeight / wWidth;  //세로비율 = 세로높이 / 가로너비 -->> 1.222222222
		section234OBJ.winResizeFn(); //홈페이지 로드시 한번 실행	 		
		
		section234OBJ.setTimeoutEvent(); 
		section234OBJ.winResizeEvent(); 
	},
	setTimeoutEvent: function(){
		setTimeout(section234OBJ.winResizeFn, 100);
	},
	winResizeEvent: function(){
		//크기변화시 계속 변경	
		$(window).resize(function(){ 
			section234OBJ.winResizeFn();	
		});
	},
	winResizeFn: function(){
		wWidth  = $('.SectionBoxBlock').innerWidth();
		resultH = wWidth * hPer; //세로높이 = 가로너비 * 세로비율   
		
		$('.SectionBoxBlock').css({ height : resultH });
		
		if( $(window).innerWidth() > 395 ){
			$('.section234-food-text>li:first-child>img')  .css({ width      : wWidth * 0.1,         paddingTop    : wWidth * 0.017777778, paddingBottom : wWidth * 0.017777778 });
			$('.section234-food-text>li>h2')			   .css({ fontSize   : wWidth * 0.062222222, paddingTop    : wWidth * 0.017777778, paddingBottom : wWidth * 0.017777778 });
			$('.section234-food-text>li>h4')			   .css({ paddingTop : wWidth * 0.017777778, paddingBottom : wWidth * 0.017777778 });
			$('.section234-food-text>li:nth-child(4)')	   .css({ paddingTop : wWidth * 0.051111111, paddingBottom : wWidth * 0.051111111 });
			$('.section234-food-text>li:nth-child(4)>img') .css({ width      : wWidth * 0.395555556 });                       
			$('.section234-food-text>li>p')				   .css({ paddingTop : wWidth * 0.017777778, paddingBottom : wWidth * 0.017777778 });		
			$('.section234-food-text>li:last-child')	   .css({ paddingTop : wWidth * 0.077777778, paddingBottom : wWidth * 0.017777778 });
			$('.section234-food-text>li>a>img')			   .css({ width      : wWidth * 0.071111111 });
		}
		else if( $(window).innerWidth() <= 395 &&  $(window).innerWidth() > 360 ){
			$('.section234-food-text>li:nth-child(4)')	   .css({ paddingTop : wWidth * 0.028888889, paddingBottom : wWidth * 0.028888889 });
			$('.section234-food-text>li:last-child')	   .css({ paddingTop : wWidth * 0.033333333, paddingBottom : wWidth * 0.017777778 });
		}
		else if($(window).innerWidth() <= 360 ){
			$('.section234-food-text>li:first-child>img')  .css({ width      : wWidth * 0.1 });
			$('.section234-food-text>li:nth-child(4)')	   .css({ paddingTop : wWidth * 0.008888889, paddingBottom : wWidth * 0.008888889 });
			$('.section234-food-text>li:last-child')	   .css({ paddingTop : wWidth * 0.011111111, paddingBottom : wWidth * 0.011111111 });
			$('.section234-food-text>li>a>img')			   .css({ width      : wWidth * 0.071111111 });
		}
	}
};
/*-----------------------------------------------------------------------------------------------------*/
//section234.js