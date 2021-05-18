$(function(){ //section13.js
	
	var cnt=[0,0,0,0], setId=[];
	
	var counterOBJ = {
			count0Fn : function(){
				cnt[0]++;
				if( cnt[0] <= 780 ){
					$('.section13-Count-Number').eq(0).text( cnt[0] );
				}
				else{	
					clearInterval(setId[0]);
				}
			},
			count1Fn : function(){
				cnt[1]++;
				if( cnt[1] <= 987 ){
					$('.section13-Count-Number').eq(1).text( cnt[1] );
				}
				else{
					clearInterval(setId[1]);
				}
			},
			count2Fn : function(){
				cnt[2]++;
				if( cnt[2] <= 350 ){
					$('.section13-Count-Number').eq(2).text( cnt[2] );
				}
				else{
					clearInterval(setId[2]);
				}
			},	
			count3Fn : function(){
				cnt[3]++;
				if( cnt[3] <= 166 ){
					$('.section13-Count-Number').eq(3).text( cnt[3] );
				}
				else{
					clearInterval(setId[3]);
				}
			},
			init : function(){
				setId[0] = setInterval(counterOBJ.count0Fn, 12.820513);
				setId[1] = setInterval(counterOBJ.count1Fn, 10.131712);
				setId[2] = setInterval(counterOBJ.count2Fn, 28.571429);
				setId[3] = setInterval(counterOBJ.count3Fn, 60.240964);
			}
	};
	
	counterOBJ.init();
	
}); //section13.js


























