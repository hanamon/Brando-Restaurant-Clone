$(function(){ //section9_Button.js
	galleryObj.init();
}); 

var a=[], imgW = imgH = s = h = cols = rows = z = cnt = n = 0;

var galleryObj = {
	init: function(){
		galleryObj.liLength();
		galleryObj.setTimeoutEvent();
		galleryObj.winResizeEvent();
		galleryObj.menuBtnEvent();
		galleryObj.galleryFn(0);
	},
	liLength: function(){
		n = $('.section9-gallery-wrap>li').length;
	},
	setTimeoutEvent: function(){
		setTimeout( galleryObj.galleryFn, 100 );
	},
	winResizeEvent: function(){
		$(window).resize(function(){
			return galleryObj.galleryFn(z);
		});	
	},
	menuBtnEvent: function(){
		$('.gallery-Menu-Btn').each(function(index){
			$(this).on({
				click: function(){
					$('.gallery-Menu-Btn').removeClass('addDeco');
					$(this).addClass('addDeco');
					z = index;
					return galleryObj.galleryFn(index);
				}
			});
		});
	},
	galleryFn: function(z){
		s=8, h=0, cols=4, rows=2;
		if( z == 0 ){ 		
			h = 0;
			s = 8;
			a = [0,1,2,3,4,5,6,7];
		} 
		else if( z == 1 ){                                                                                     
			h = 2;
			s = 6;
			a = [0,2, 1,3,4,5,6,7];
		}
		else if( z == 2 ){                                                                                    
			h = 4;
			s = 4;
			a = [0,1,3,6, 2,4,5,7];
		}
		else if( z == 3 ){                                                                                   
			h  = 4;
			s  = 4;
			a  = [1,3,4,5, 0,2,6,7];
		}
		else if( z == 4 ){                                                                                     
			h = 3;
			s = 5;
			a = [0,2,5, 1,3,4,6,7];	
		} 
		if( $(window).innerWidth() > 1100 ){
			cols = 4;
		}
		else if( $(window).innerWidth() > 800 ){
			cols = 3;
		}
		else if( $(window).innerWidth() > 500 ){
			cols = 2;
		}
		else{
			cols = 1;
		}
		imgW = $(window).innerWidth()/cols;
		imgH = imgW * 0.75;
		
		rows = parseInt(s/cols+0.9);
		percent = 100/cols;
		$('.section9-gallery-wrap').css({height:imgH*rows});
		for(i=0;i<h;i++){
			$('.section9-gallery-wrap>li').eq(a[i]).css({transform:'scale(0,0)', transition:'0.5s'});      
		}
		cnt=h-1;
		for(i=0;i<rows;i++){ 		
			for(j=0;j<cols;j++){	
				cnt++;
				$('.section9-gallery-wrap>li').eq(a[cnt]).css({top:(imgH*i), left:(percent*j)+'%', width:percent+'%', height:imgH, transform:'scale(1,1)', transition:'all 0.5s'});                       
			}
		}
		$('.section9-gallery-wrap>li').removeClass('addGallery');
		$('.section9-gallery-wrap>li').addClass('addGallery');
	}
};

/*---------------------------------------------------------------------------------------------------------------------*/
//section9_Button.js























