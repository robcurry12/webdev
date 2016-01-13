<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Rob's Repair Shop</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>
    <div id="content">
        <h1>New Vehicle Form</h1>
        <form action="mainmenu.php" method="post">

            <div id="data">
                <label>VIN:</label>
                <input type="text" name="vin"><br/>

                <label>Make:</label>
                <input type="text" name="make"><br/>

                <label>Model:</label>
                <input type="text" name="model"><br/>
                
                <label>Year:</label>
                <input type="text" name="year"><br/>
            </div>

            <div id="buttons">
                <label>&nbsp;</label>
                <input type="submit" value="Add Vehicle"><br />
            </div>
        </form>
    </div>
</body>
</html>