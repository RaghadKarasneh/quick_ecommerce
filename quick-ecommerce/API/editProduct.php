<?php
include_once "./connection.php";

$id = $_REQUEST['id']; 
$product_name=$_REQUEST["product_name"];
$image=$_REQUEST["image"];
$price=$_REQUEST["price"];
$description=$_REQUEST["description"];

$sql="UPDATE products SET product_name = '$product_name', image= '$image', price = '$price', description= '$description'  WHERE id='$id';";

mysqli_query($con,$sql);
?>