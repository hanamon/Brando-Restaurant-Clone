$(function(){ //section9-modal.js
	modalOBJ.init();
});

var imgNum = imgMarTop = winH = imaH = 0;

var modalOBJ = {
	init: function(){
		modalOBJ.setTimeoutEvent();
		modalOBJ.winResizeEvent();
		modalOBJ.clickEvent();
	},
	setTimeoutEvent: function(){
		setTimeout(modalOBJ.modalGalleryFn, 100);
	},
	winResizeEvent: function(){
		$(window).resize(function(){
			modalOBJ.modalGalleryFn();
		});
	},
	modalGalleryFn: function(){
		//반응형 이미지 박스 마진탑값 자동조절 상하 가운데 정렬
		winH 	  = $(window).innerHeight();
		imaH 	  = $('.modal-image-wrap').innerHeight();
		imgMarTop = (winH-imaH)/2;
		$('.modal-image-wrap').css({marginTop : imgMarTop});
	},
	clickEvent: function(){
		//모달창 닫기버튼 이벤트
		$('.modalcloseBtn').on({
			click: function(){
				$('html').removeClass('addModalScroll');
				$('.section9-modal-wrap').hide();
			}
		});
		//모달창 열기버튼 이벤트
		$('.galleryBtn').on({
			click: function(){
				$('html').addClass('addModalScroll');
				$('.section9-modal-wrap').show();
				
				modalOBJ.modalGalleryFn();
				
				imgNum = $(this).parent().find('img').attr('src').slice(18,20);
				modalOBJ.modalImgFn(imgNum);
			}
		});
		//다음화살표 클릭 이벤트
		$('.modal-Right-Arrow-wrap').on({
			click: function(){
				imgNum++;
				if( imgNum > 32 ){
					imgNum = 25;
				}
				modalOBJ.modalImgFn(imgNum);
			}
		});
		//이전화살표 클릭 이벤트
		$('.modal-Left-Arrow-wrap').on({
			click: function(){
				imgNum--;
				if( imgNum < 25 ){
					imgNum = 32;
				}
				modalOBJ.modalImgFn(imgNum);
			}
		});
	},
	modalImgFn: function(z){
		$('.modal-image-wrap>img').attr('src', 'img/restaurant-img'+ (z) +'.jpg').stop().animate({opacity:0},0).animate({opacity:1},500);
	}
};
/*-------------------------------------------------------------------------------------------------------------*/
//section9-modal.js