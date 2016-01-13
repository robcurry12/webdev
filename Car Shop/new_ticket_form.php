<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Rob's Repair Shop</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>
    <div id="content">
        <h1>New Ticket Form</h1>
        <form action="new_ticket.php" method="post">

            <div id="data">
                <label>VIN:</label>
                <input type="text" name="vin"><br/>

                <label>Service/Repair Performed:</label>
                <input type="text" name="repair"><br/>
                
                <label>Date of Service:</label>
                <input type="date" name="date"><br/>
                
                <label>Cost of Service/Repair:</label>
                <input type="text" name="cost"><br/>
            </div>

            <div id="buttons">
                <label>&nbsp;</label>
                <input type="submit" value="Add Ticket" /><br />
            </div>
        </form>
    </div>
</body>
</html>