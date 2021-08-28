$(function(){ //section10.js
	slideObj.init();
}); 

var slideObj = {
	init: function(){
		slideObj.slideElements();
		slideObj.nextBtnEvent();
		slideObj.prevBtnEvent();
	},
	slideElements: function(){
		ss=[], a=[], b=[], n = $('.section10-slide').length-1;
		ss[0]=1;
	},
	sFn: function(){
		for(i=0; i<=n; i++){ ss[i]=0; }
	},
	nextBtnEvent: function(){
		$('.sec10-nextBtn').on({
			click: function(){
				slideObj.nextSlideFn();
			}
		});
	},
	prevBtnEvent: function(){
		$('.sec10-prevBtn').on({
			click: function(){
				slideObj.prevSlideFn();
			}
		});
	},
	nextSlideFn: function(){
		for(i=0;i<=n;i++){
			if(ss[i]==1){
				if(i==n){
					return slideObj.nextSlide(0);
					break;
				}
				else{
					return slideObj.nextSlide(i+1);
					break;
				}
			}
		}
	},
	prevSlideFn: function(){
		for(i=0;i<=n;i++){
			if(ss[i]==1){
				if(i==0){
					return slideObj.prevSlide(n);
					break;
				}
				else{
					return slideObj.prevSlide(i-1);
					break;
				}
			}
		}
	},
	nextSlide: function(z){
		slideObj.sFn();
		ss[z]=1;
		
		if(z==0){
			a = [2,0,1];
		}
		else if(z==1){
			a = [0,1,2];
		}
		else if(z==2){
			a = [1,2,0];
		}
		$('.section10-slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},1000);
		$('.section10-slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},1000);
		$('.section10-slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},1000);
	},
	prevSlide: function(z){
		slideObj.sFn();
		ss[z]=1;
		
		if(z==2){
			b = [0,2,1];
		}
		else if(z==1){
			b = [2,1,0];
		}
		else if(z==0){
			b = [1,0,2];
		}
		$('.section10-slide').eq(b[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},1000);
		$('.section10-slide').eq(b[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},1000);
		$('.section10-slide').eq(b[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},1000);
	}
};

/*------------------------------------------------------------------------------------------------------------*/		
//section10.js