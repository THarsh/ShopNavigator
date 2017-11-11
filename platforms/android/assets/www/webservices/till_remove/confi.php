<?php header('Access-Control-Allow-Origin: *'); ?>
<?php header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept'); ?>
<?php header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT'); ?>
<?php

    $db_host = "localhost";
    // Place the username for the MySQL database here
    $db_username = "root";
    // Place the password for the MySQL database here
    $db_pass = "";
    // Place the name for the MySQL database here
    $db_name = "shop_navigator";


    $con = mysqli_connect("$db_host", "$db_username", "$db_pass", "$db_name");

    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

?>