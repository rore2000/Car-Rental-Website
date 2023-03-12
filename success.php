<?php

$user = "root";
$pass ="";
$db="CSC457";

$name = $_POST["name"];
$phone= $_POST["phone_number"];
$age= $_POST["age_range"];
$checkbox=[];
$checkbox= $_POST['car'];

//echo "count checkbox ".count($checkbox);

$con= new mysqli('localhost',$user,$pass,$db) or die("can not connect");
 //echo "after con ^_^ <br>";
/*
 $list=[];
 echo "before loop <br>";
 foreach($checkbox as $car)
    {
      echo car;
       $list.= $car.",";
    }

*/


    $car1= $checkbox[0];
    $car2= $checkbox[1];
    $car3= $checkbox[2];

$sql = "INSERT INTO request (customer_name, customer_phone, age, car1, car2, car3) VALUES ('". $name ."', '". $phone ."', '". $age ."', '". $car1 ."', '". $car2 ."', '". $car3 ."')";
//$result = mysqli_query($con,$sql);

//echo "before Q";


if(mysqli_query($con, $sql)){
    //echo "Records inserted successfully.";
    header('location: success.html');

} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
}


//echo "<br> ".$name." , thanks for your requst! ".$car1." ,".$car2." ,".$car3." <br> We will call you soon to schedule a test drive ".$car1.", ".$car2." ".$car3." ";

ini_set("display_errors", "1");
ini_set("display_startup_errors", "1");
error_reporting(E_ALL);


?>
