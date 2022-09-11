<?php
include_once "./connection.php";

$name         = $_REQUEST['name'];
$email        = $_REQUEST['email'];
$password     = $_REQUEST['password'];

$password = md5($password);

$sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
$result  = $con->prepare($sql);

$result->execute([$name,$email,$password]);

?>