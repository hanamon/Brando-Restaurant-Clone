<!DOCTYPE HTML> <!-- 브란도 레스토랑 form.html-->
<html>
<head>
	<title>폼전송 성공창</title>
	<meta charset='utf-8'>
	<link href='css/reset.css' rel='stylesheet'>
</head>
<body>
	<h1 style='font-size:50px;color:#000;padding:100px 0;text-align:center;'>전송이 성공적으로 수행 되었습니다.</h1>
	
	<div style='margin:0 auto;'>
		<p>이름 : 	<? echo $_POST[name];			?></p>
		<p>이메일 :	<? echo $_POST[email];			?></p>
		<p>흥미 : 	<? echo $_POST[interested];		?></p>
		<p>메세지 : 	<? echo $_POST[message];		?></p>
	</div>
	
	<p style='text-align:center;'><a style='display:inline-block;color:#fff;padding:10px 20px;background:#000;border-radius:3px;' href='index.html'>홈으로 이동</a></p>
</body>
</html>