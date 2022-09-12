<?php
include 'connection.php';

$user_id=$_REQUEST['user_id'];
$sql = "select * from products where user_id='$user_id'";
$result = mysqli_query($con, $sql);
$arr =  array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
} else {
    echo "0 results";
}
print_r(json_encode($arr));


$con->close();


?>