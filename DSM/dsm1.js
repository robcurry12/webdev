var $ = function (id) 
{
	return document.getElementById(id);
}
window.onload = function () 
	{
	    $("yes1").onclick = yes1;
	    $("no1").onclick = no1;
	    $("yes2").onclick = yes2;
	    $("no2").onclick = no2;
	    $("yes3_1").onclick = yes3_1;
	    $("no3_1").onclick = no3_1;
	    $("yes3_2").onclick = yes3_2;
	    $("no3_2").onclick = no3_2;
	}

var yes1 = function ()
{
	var x = $("yesone");
	var y = $("no1");
	var q = $("yes1").value;
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		y.disabled = false;
		$("yes1").value = "Yes";
		
	}
	else 
	{
		x.style.display = "block";
		y.disabled = true;
		$("yes1").value = "Undo";
	}
}  
var no1 = function ()
{
	var x = $("noone");
	var y = $("yes1");
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		y.disabled = false;
		$("no1").value = "No"
		$("yesone").style.display = "none";
		$("noone").style.display = "none";
		$("yestwo").style.display = "none";
		$("notwo").style.display = "none";
		$("yesthreeone").style.display = "none";
		$("yesnothree").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none";
		$("yes1").value = "Yes";
		$("yes1").disabled = false;
		
		$("no1").value = "No";
		
		$("yes2").value = "Yes";
		$("yes2").disabled = false;
		
		$("no2").value = "No";
		$("no2").disabled = false;
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		$("no1").value = "Undo"
	}
}
var yes2 = function ()
{
	var x = $("yestwo");
	var y = $("no2");
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		y.disabled = true;
		$("yes2").value = "Yes"
		$("yesone").style.display = "none";
		$("yestwo").style.display = "none";
		$("notwo").style.display = "none";
		$("yesthreeone").style.display = "none";
		$("yesnothree").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none"
		
		$("no2").value = "No";
		$("no2").disabled = false;
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		$("yes2").value = "Undo"
	}
}
var no2 = function ()
{
	var x = $("notwo");
	var y = $("yes2");
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		y.disabled = false;
		$("no2").value = "No"
		$("yesone").style.display = "none";
		$("yestwo").style.display = "none";
		$("notwo").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none"
		
		$("yes2").value = "Yes";
		$("yes2").disabled = false;
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		$("no2").value = "Undo"
		
	}
}	
var yes3_1 = function ()
{
	var x = $("yesthreeone")
	var y = $("no3_1")
	var z = $("yesfour")
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		z.style.display = "none";
		y.disabled = false;
		$("yes3_1").value = "Yes"
		
		$("yesthreeone").style.display = "none";
		$("yesnothree").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none";
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		z.style.display = "block";
		$("yes3_1").value = "Undo"
		
	}
}
var no3_1 = function ()
{
	var x = $("yesnothree")
	var y = $("yes3_1")
	var z = $("yesfour")
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		z.style.display = "none";
		y.disabled = false;
		$("no3_1").value = "No"
		
		$("yesthreeone").style.display = "none";
		$("yesnothree").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none";
		
		$("no2").value = "No";
		$("no2").disabled = false;
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		z.style.display = "block";
		$("no3_1").value = "Undo"
	}
}
var yes3_2 = function ()
{
	var x = $("yesnothree")
	var y = $("no3_2")
	var z = $("yesfour")
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		z.style.display = "none";
		y.disabled = false;
		$("yes3_2").value = "Yes"
		
		$("yesthreeone").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none";
		
		$("no2").value = "No";
		$("no2").disabled = false;
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		z.style.display = "block";
		$("yes3_2").value = "Undo"
	}
}
var no3_2 = function ()
{
	var x = $("nothree")
	var y = $("yes3_2")
	var z = $("nofour")
	
	if (x.style.display == "block")
	{
		x.style.display = "none";
		z.style.display = "none";
		y.disabled = false;
		$("no3_2").value = "No"
		
		$("yesthreeone").style.display = "none";
		$("nothree").style.display = "none";
		$("nofour").style.display = "none";
		$("yesfour").style.display = "none";
		
		$("yes3_1").value = "Yes";
		$("yes3_1").disabled = false;
		
		$("no3_1").value = "No";
		$("no3_1").disabled = false;
		
		$("yes3_2").value = "Yes";
		$("yes3_2").disabled = false;
		
		$("no3_2").value = "No";
		$("no3_2").disabled = false;
	}
	else
	{
		x.style.display = "block";
		y.disabled = true;
		z.style.display = "block";
		$("no3_2").value = "Undo"
	}
}

