<?php
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING);
$phone=filter_input(INPUT_POST,'phone',FILTER_SANITIZE_STRING);
$email=filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
$comment=filter_input(INPUT_POST,'comment',FILTER_SANITIZE_STRING);

if($name && $phone && $comment){
  $to = 'chechkovania@gmail.com';

  $subject = "Новая заявка с ООО СЕКВОЙЯ Вторсырье";

  $message = "Пользователь: {$name} <br>";
  $message.="Телефон: {$phone}<br>";
  $message.="Эл.почта: {$email}<br>";
  $message.="Комментарий: {$comment}<br>";

  $mailheaders = "Content-type:text/html;charset=UTF-8";

  $mailheaders .= "From: SiteRobot <noreply@siterobot.ru>rn";
  $mailheaders .= "Reply-To: noreply@siterobot.rurn";

  mail($to, $subject, $message, $mailheaders);
  echo json_encode(['success'=>'Спасибо за вашу заявку. Мы перезвоним вам в ближайшее время.']);

  return;
}

echo json_encode(['error'=>'К сожелению не удалось отправить заявку. Проверьте введенные данные и попробуйте еще раз.']);
