<?php
include_once('confi.php');
error_reporting(E_ALL);

//Get the variables here
$username = isset($_GET['username']) ? mysqli_real_escape_string($con,$_GET['username']) :  "";
$nic = isset($_GET['nic']) ? mysqli_real_escape_string($con,$_GET['nic']) :  "";
//Get the variables here end
$sql = 'SELECT count(*)   FROM `users` WHERE username="'.$username.'" AND nic="'.$nic.'"';



$query123 = mysqli_query($con,$sql) or trigger_error(mysqli_error()." ".$sql);

while($r = mysqli_fetch_array($query123)){
    extract($r);
// echo "count star is $co";

}
$coount = (int)$coount;
$id = '';
if($co == 1){
    //User is availaible

    $result = array();
    $result[] = array("id" => $id,"status" => 1);
}

if($co != 1){
    //User is not availaible

    $result = array();
    $result[] = array("status" => 0);
}

/* Output header */
header('Content-type: application/json');
echo json_encode($result);

?>