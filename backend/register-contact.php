<?php 

require "./Models/Contact.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$comment = new Contact;

$comment->nome = $_POST['nome'];
$comment->msg = $_POST['msg'];

$comment->registerOrder();

