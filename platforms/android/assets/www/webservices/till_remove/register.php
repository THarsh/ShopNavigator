
<?php
include_once('confi.php');
error_reporting(E_ALL);
//echo "hi there this is a test";
//Get the variables here
$username  =  isset($_POST['username']) ? mysqli_real_escape_string($con, $_POST['username']) : "";
$nic       =  isset($_POST['nic']) ? mysqli_real_escape_string($con, $_POST['nic']) : "";
$email     =  isset($_POST['email']) ? mysqli_real_escape_string($con, $_POST['email']) : "";


//Get the variables here end

$sql      = "INSERT INTO `users`(`id`,`username`,`nic`,`email`) VALUES ('NULL', '$username', '$nic','$email')";

                if (!mysqli_query($con, $sql)) {
                    die('Error: ' . mysqli_error($con));
                }
                echo "1 record added";



?>