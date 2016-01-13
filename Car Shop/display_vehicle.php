<?php
	$host="localhost"; // Host name 
	$username="root"; // Mysql username 
	$password=""; // Mysql password
	$vin = $_POST['vin'];
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
    
	$query = mysql_query("SELECT VIN, repair, date, cost
				FROM tickets
				WHERE VIN = '$vin'");
				
	while ($row = mysql_fetch_assoc($query))
	{	
		$vin = $row['VIN'];
		$repair = $row['repair'];
		$date = $row['date'];
		$cost = $row['cost'];
	}
	if ($repair == "")
	{
		die("Failed to locate record.");
  		header("location: mainmenu.php");
	}
	else
	{
		echo "<div id = 'Results'>
		<b>VIN:</b> $vin <br>
		<b>Service provided:</b> $repair <br>
		<b>Date performed:</b> $date <br>
		<b>Cost:</b> $cost <br>
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