<?php
include 'connection.php';

$user_id=$_REQUEST['user_id'];
$product_name=$_REQUEST['product_name'];
// $image=$_REQUEST['image'];
$price=$_REQUEST['price'];
$description=$_REQUEST['description'];
$is_deleted=$_REQUEST['is_deleted'];
if (isset($_POST['image'])) {
$filename = $_FILES["uploadfile"]["name"];
    $tempname = $_FILES["uploadfile"]["tmp_name"];
    $folder = '../public/img/'.$new_img;

// ==================================================================================






                $sql="INSERT INTO products(user_id,product_name,image,price,description,is_deleted) VALUES ('$user_id','$product_name','$filename','$price','$description','$is_deleted');";mysqli_query($con,$sql);



$con->close();}
    //             if(mysqli_query($con,$connection)){
    //                 echo ' success';
    //             }else{
    //                 echo 'not success';
    //             }
    //         }else{
    //             echo 'coule not upload the image';
    //         }


    //     }else{
    //         echo 'There was an error in upload ';
    //     }

    // }else{
    //     echo'Files with this extension not allowed ';
        
    // }
   




?>