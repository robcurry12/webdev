<?php
$host="localhost"; // Host name 
$username="root"; // Mysql username 
$password=""; // Mysql password
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$vin = $_POST['vin'];
$make = $_POST['make'];
$model = $_POST['model'];
$year = $_POST['year'];
$db= "autoshop"; // Database name

mysql_connect("$host", "$username", "$password")or die("Cannot connect"); 
mysql_select_db("$db")or die("Cannot select DB");

// Validate inputs
if(($first_name === "") || ($last_name === "") || ($vin === "") || ($make === "") || ($model === "") || ($year === "")) 
{
    die("Failed to add customer to database.");
  	header("location: mainmenu.php");
} 
else 
{
     mysql_query("INSERT INTO customers(customerFirst, customerLast, VIN, make, model, year) VALUES('$first_name', '$last_name', '$vin', '$make', '$model', '$year')");

    include('mainmenu.php');
	
	echo "<script language=\"JavaScript\">\n"; 
	echo "alert('Customer has been added to database');\n"; 
	echo "</script>"; 
	
}	
?>