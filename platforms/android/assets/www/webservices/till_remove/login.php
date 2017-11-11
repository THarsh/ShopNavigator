<?php
include_once('confi.php');


$username = isset($_GET['username']) ? mysqli_real_escape_string($con,$_GET['username']) :  "";
$nic      = isset($_GET['nic']) ? mysqli_real_escape_string($con,$_GET['nic']) :  "";

$sql      = 'SELECT *  FROM `users` WHERE username="'.$username.'" AND nic="'.$nic.'"';
$query    = mysqli_query($con,$sql);

$row      = mysqli_fetch_assoc($query);
$isAuth   = mysqli_num_rows($query);
$result   = array();

if($isAuth>0){
    $result['isAuth'] = true;
    $result['user'] = $row;
}else{
    $result['isAuth'] = false;
    $result['user'] = null;

}

echo json_encode($result);

?>