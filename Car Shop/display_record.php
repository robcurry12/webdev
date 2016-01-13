<?php
	$host="localhost"; // Host name 
	$username="root"; // Mysql username 
	$password=""; // Mysql password
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$db= "autoshop"; // Database name

	mysql_connect("$host", "$username", "$password")or die("Cannot connect"); 
	mysql_select_db("$db")or die("Cannot select DB");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<!-- the head section -->
<head>
    <title>Rob's Repair Shop</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<!-- the body section -->
<body>
    <div id="page">

    <div id="header">
        <h1>Search Results</h1>
    </div>

    <div id="main">
	<?php	
    
	$query = mysql_query("SELECT customerID, customerFirst, customerLast, VIN, make, model, year
				FROM customers
				WHERE (customerFirst ='$first_name' AND customerLast = '$last_name')"); 
				
	while ($row = mysql_fetch_assoc($query))
	{
		$customerID = $row['customerID'];
		$customerFirst = $row['customerFirst'];
		$customerLast = $row['customerLast'];
		$vin = $row['VIN'];
		$make = $row['make'];
		$model = $row['model'];
		$year = $row['year'];
	}
	$query = mysql_query("SELECT cost
				FROM tickets
				WHERE VIN = '$vin'");
				
	while ($row = mysql_fetch_assoc($query))
	{	
		$cost = $row['cost'];
	}
	if (($first_name == "") || ($last_name == ""))
	{
		die("Failed to locate record.");
  		header("location: mainmenu.php");
	}
	{
		echo "<div id = 'Results'>
		<b>Customer ID:</b> $customerID <br>
		<b>First Name:</b> $customerFirst <br>
		<b>Last Name:</b> $customerLast <br>
		<b>VIN:</b>$vin<br>
		<b>Make:</b> $make <br>
		<b>Model:</b> $model <br>
		<b>Year:</b> $year <br>
		<b>Amount Owed:</b> $$cost <br>
		</div>";
	}
	?>
    </div>

    <div id="footer">
        <p>&copy; No Hockeypads Inc.</p>
        <p><a href="mainmenu.php">Return to Home</a></p>
    </div>

    </div><!-- end page -->
</body>
</html>