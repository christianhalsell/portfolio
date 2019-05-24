<?php
if(isset($_POST['submit'])) {

	$name = $_POST['name'];
	$email = $_POST['email'];
	$spam = $_POST['message'];
	$comments = $_POST['comments'];

if ($spam == "")	{
	$to = "christianhalsell@gmail.com";
	$subject = "Portfolio Contact Form";
}
else {
	$to = "";
	$subject = "SPAM: Portfolio Contact Form";
}
	$body = "
		<html><body><div style='font:11px Verdana,sans-serif'>
		<p>Name: <b>$name</b></p>
		<p>E-Mail: <b>$email</b></p>
		<p>$spam</p>
		<p>Message:<b>$comments</b></p>
		</div></body></html>
		";	

	mail($to, $subject, $body ,
		"From: $email\n" .
		"MIME-Version: 1.0\n" .
		"Content-type: text/html; charset=iso-8859-1");

	header('Location:/thankyou.php');

} 
else {
	echo "Hey! You're not supposed to be here. Shoo!!!";
}
?>