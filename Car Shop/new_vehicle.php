<?php
$host="localhost"; // Host name 
$username="root"; // Mysql username 
$password=""; // Mysql password
$vin = $_POST['vin'];
$make = $_POST['make'];
$model = $_POST['model'];
$year = $_POST['year'];
$db= "autoshop"; // Database name

mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db")or die("cannot select DB");

// Validate inputs
if(($first_name === "")) 
{
    die("Failed to add customer to database.");
  	header("location: mainmenu.php");
} 
else 
{
     mysql_query("INSERT INTO customers(make, model, year) VALUES('$make', '$model', '$year')");

    include('mainmenu.php');
	
	echo "<script language=\"JavaScript\">\n"; 
	echo "alert('Customer has been added to database');\n"; 
	echo "</script>"; 
	
}	






















?>