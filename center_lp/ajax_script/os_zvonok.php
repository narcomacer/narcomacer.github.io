<?

$to  = "2@centrlp.ru";
$to2  = "narcomacer@gmail.com";

$subject = "Сообщение от формы обратной связи сайта CentrLP".$_POST['tema'];
if (($_POST['name']!='') and ($_POST['name']!=' '))
{	
	$message = '<b>От кого: </b>'.$_POST['name'].'<br>
	<b>Телефон: </b>'.$_POST['tel'].'
			
	';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From:Centr LP \r\n";
// $headers .= "Reply-To: narcomacer@gmail.com\r\n";
mail($to, $subject, $message, $headers, '-f 2@centrlp.ru');
// mail($to2, $subject, $message, $headers, '-f narcomacer@gmail.com');
echo '<div class="contact__text title">Спасибо за заявку! <br>Скоро мы с вами свяжемся.</div>
';
}

// <br>		
// 	<b>Текст сообщения: </b>'.$_POST['komm'].'<br>		
// 	<b>Страница с которой написали: </b>'.$_POST['str'].'<br>
?>


