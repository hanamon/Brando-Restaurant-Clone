$(function(){ //form.js
	formObj.init();
});

var $name    = '';
var $email   = '';
var $message = '';
var state    = false; 

var formObj = {
	init: function(){
		formObj.formElements();
		formObj.submitBtnEvent();
		formObj.focusEvent();
	},
	formElements: function(){
		$name    = $('#idName');
		$email   = $('#idEmail');
		$message = $('#idMessage');
	},
	submitBtnEvent: function(){
		state = false; 
		$('.submitBtn').on({
			click: function(){
				
				state = true; 
				
				if( $name.val()=='' || $email.val()=='' || $message.val()=='' || $email.val().indexOf('@')==-1 || $email.val().indexOf('.')==-1 || $email.val().indexOf(' ')!=-1 ){
					/*-------name-------*/
					if( $name.val()=='' ){
						$name.css({outline:'2px solid #c00', transition:'all 0.3s'});
					}
					else{
						$name.css({outline:0, transition:'all 0.3s'});
					}
					/*-------email-------*/
					if( $email.val()=='' || $email.val().indexOf('@')==-1 || $email.val().indexOf('.')==-1 ||  $email.val().indexOf(' ')!=-1 ){
						$email.css({outline:'2px solid #c00', transition:'all 0.3s'});
					}
					else{
						$email.css({outline:0, transition:'all 0.3s'});
					}
					/*-------message-------*/
					if( $message.val()=='' ){
						$message.css({outline:'2px solid #c00', transition:'all 0.3s'});
					}
					else{
						$message.css({outline:0, transition:'all 0.3s'});
					}
					/*-------append-------*/
					$('.form-contact-wrap').append("<li class='message-box-wrap'><div>Validation errors occurred. Please confirm the fields and submit it again.</div></li>");
					/*-------return-------*/
					return false; 
				}
				else{
					/*-----폼 전송 완료-----*/
					alert('전송되었습니다.');
					
					contact.submit();
					
					$name.val()='';
					$email.val()='';
					$message.val()='';
					
					$name.css({outline:0, transition:'all 0.3s'});
					$email.css({outline:0, transition:'all 0.3s'});
					$message.css({outline:0, transition:'all 0.3s'});
					
					/*-------false-------*/
					state = false; 
					
					/*-------append-------*/
					$('.message-box-wrap').remove(); 
				}
			}
		});
	},
	focusEvent: function(){
		$('#idName, #idEmail, #idMessage').on({
			focusin: function(){
				$(this).css({outline:'2px solid #929292', transition:'all 0.3s'});
			},
			focusout: function(){
				if( state == true ){
					$(this).css({outline:'2px solid #c00', transition:'all 0.3s'});
				}
				else{
					$(this).css({outline:0, transition:'all 0.3s'});
				}
			}
		});
	}
};

/*----------------------------------------------------------------------------------------------*/
//form.js