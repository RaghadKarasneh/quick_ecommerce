<?php
include 'connection.php';

$sql = "select * from products";
    $result = mysqli_query($con, $sql);

    if(!$result){
        http_response_code();
        die(mysqli_error($cnn));
    }
   
    echo "[";
    for($i=0; $i<mysqli_num_rows($result) ;$i++ ){
        echo($i>0?' ,': '').json_encode(mysqli_fetch_object($result));
    }
    
    echo "]";

?>