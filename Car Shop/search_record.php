<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Product Discount Calculator</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>
    <div id="content">
        <h1>Search for record</h1>
        <form action = "display_record.php" method="post">
            <div id="data">
                <label>First Name:</label>
                <input type="text" name="first_name"><br/>
                
                 <label>Last Name:</label>
                <input type="text" name="last_name"><br/>
            </div>

            <div id="buttons">
                <label>&nbsp;</label>
                <input type="submit" value="Search for record" /><br />
            </div>
        </form>
    </div>
</body>
</html>