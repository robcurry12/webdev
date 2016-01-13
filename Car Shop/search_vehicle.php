<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Product Discount Calculator</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>
    <div id="content">
        <h1>Search for vehicle's record</h1>
        <form action = "display_vehicle.php" method="post">

            <div id="data">
                <label>VIN:</label>
                <input type="text" name="vin"><br/>
            </div>

            <div id="buttons">
                <label>&nbsp;</label>
                <input type="submit" value="Search for record" /><br />
            </div>
        </form>
    </div>
</body>
</html>