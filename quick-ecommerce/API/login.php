<?php

include "connection.php";


    $email    =  $_REQUEST['email'];
    $password = md5($_REQUEST['password']);
    $sql = "select * from users where email='$email' and password= '$password'";
    $result = mysqli_query($con, $sql);
    $arr =  array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $arr[] = $row;
        }}
        else{
            return NULL;
        }
     
    print_r(json_encode($arr));
     ?>