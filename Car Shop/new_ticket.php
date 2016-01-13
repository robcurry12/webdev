<?php
$host="localhost"; // Host name 
$username="root"; // Mysql username 
$password=""; // Mysql password
$vin = $_POST['vin'];
$repair = $_POST['repair'];
$date = $_POST['date'];
$cost = $_POST['cost'];
$db = "autoshop"; // Database name

mysql_connect("$host", "$username", "$password")or die("Cannot connect"); 
mysql_select_db("$db")or die("Cannot select DB");

if(($vin === "") || ($repair === "") || ($date === "") || ($cost === "")) 
{
    die("Failed to add customer to database.");
  	header("location: mainmenu.php");
} 
else 
{
    mysql_query("INSERT INTO tickets(VIN, repair, date, cost) VALUES('$vin', '$repair', '$date', '$cost')");

    include('mainmenu.php');
	
	echo "<script language=\"JavaScript\">\n"; 
	echo "alert('Customer has been added to database');\n"; 
	echo "</script>"; 
	
}	
?>