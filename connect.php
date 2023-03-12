<?php

$user = "root";
$pass ="";
$db="testdb";

$name = $_POST["name"];


$conn= new mysqli('localhost',$user,$pass,$db) or die("can not connect");
echo "working ^_^\n";


echo $name;



 ?>
