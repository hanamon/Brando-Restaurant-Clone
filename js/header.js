$(function(){ //header.js
	headerObj.init();
}); 

var headerObj = {
	init: function(){
		headerObj.setTimeoutEvent();
		headerObj.scrollEvent();
		headerObj.smoothBtnEvent();
		headerObj.mobileMenuEvent();
	},
	setTimeoutEvent: function(){
		setTimeout(headerObj.windowResize());
	},
	windowResize: function(){
		$(window).resize(function(){
			headerObj.windowResizeEvent();
		});
	},
	windowResizeEvent: function(){
		if( $(window).innerWidth() > 1170 ){
			$('.mobile-menu-wrap').stop().slideUp(200);
		}
	},
	scrollEvent: function(){
		//1. 헤더 : 스크롤 탑값이 30px 될때 에드클래스
		$(window).scroll(function(){
			if( $(window).scrollTop() >= 30 ){
				$('.headerAdd').addClass('addFixed');
				$('.goTop-wrap').stop().fadeIn(1000);
			}
			else{
				$('.headerAdd').removeClass('addFixed');
				$('.goTop-wrap').stop().fadeOut(1000);
			}
			
			//스무스 스크롤 이벤트
			if( $(window).scrollTop() <= $('#section5').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section5').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
				$('.mainBtn').eq(0).addClass('addNavBtn');
				$('.mainBtn').eq(6).addClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section6').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
				$('.mainBtn').eq(1).addClass('addNavBtn');
				$('.mainBtn').eq(7).addClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section7').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
				$('.mainBtn').eq(2).addClass('addNavBtn');
				$('.mainBtn').eq(8).addClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section8').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section9').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
				$('.mainBtn').eq(3).addClass('addNavBtn');
				$('.mainBtn').eq(9).addClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section10').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section11').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
				$('.mainBtn').eq(4).addClass('addNavBtn');
				$('.mainBtn').eq(10).addClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section12').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
			}
			
			if( $(window).scrollTop() > $('#section14').offset().top-60 ){
				$('.mainBtn').removeClass('addNavBtn');
				$('.mainBtn').eq(5).addClass('addNavBtn');
				$('.mainBtn').eq(11).addClass('addNavBtn');
			}
			
		});
	},
	smoothBtnEvent: function(){
		//2. a버튼 클릭시 링크를 뽑아서 스크롤 이벤트 실행
		var smoothGoId = 0;
		$('.smoothBtn').on({
			click: function(){
				// smoothGoId = 이동할 url #id;
				smoothGoId = $(this).attr('href');
				$('html,body').stop().animate({scrollTop : $(smoothGoId).offset().top},800);
				$('.mobile-menu-wrap').stop().slideUp(200);
			}
		});
	},
	mobileMenuEvent: function(){
		$('.appBarBtn').on({
			click: function(){
				$('.mobile-menu-wrap').stop().slideToggle(200);
			}
		});
	}
};

/*----------------------------------------------------------------------------*/
//header.js






















