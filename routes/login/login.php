<?php

     // $username = $_POST["username"];
     // $password = $_POST["password"];

     // echo "username: ".$username;
     // echo "password: ".$password;

// allow cross origin
     header("Access-Controll-Allow-Origin: *");
// turn print_r statement into json
     header("Content-Type: application/json");

// set up response variable
     $response = [];

// handle admin login
     if($_POST["username"] == "admin" && $_POST["password"] == "admin"){
          $response["status"] = "loggedin";
          $response["user"] = "admin";
     } else{
          $response["status"] = "error";
     }

// new way to print out data
     echo json_encode($response);

// print out data
     // print_r($_POST);


?>