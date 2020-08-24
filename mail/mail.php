<?php
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer();
	if(isset($_POST['name']) && isset($_POST['email']) || isset($_POST['phoneno']))  {
		//Important - UPDATE YOUR RECEIVER EMAIL ID, NAME AND SUBJECT
		// Please enter your email and Subject 	
		$to_email = 'receiver@email.com';		
		$to_name = 'Receiver Name';
		
		$sender_name = $_POST['name'];		
		$from_mail = $_POST['email'];
				
		if(isset($_POST['phoneno']) && !empty($_POST['phoneno'])){
			$phoneno = 'SENDER PHONE NUMBER: ' .$_POST['phoneno'];
		}else{
			$phoneno = '';
		}
		
		$mail->SetFrom( $from_mail , $sender_name );
        $mail->AddReplyTo( $from_mail , $sender_name );
        $mail->AddAddress( $to_email , $to_name );
		// Please enter your subject
        $mail->Subject = "New Contact Query - Lead Demo";
		
		$received_content = "SENDER NAME : ". $sender_name ."</br> SENDER EMAIL : ".$from_mail."</br> PHONE : " .$phoneno;
		
		$mail->MsgHTML( $received_content );
		
        echo $mail->Send();
		exit;		
	} /* end of isset($_POST) */
?>