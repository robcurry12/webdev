$(document).ready(function() 
{
	$("#yes1").toggle(
	 function() 
	 { 
		$("#b").addClass("open");
		$("#b").show();
		$("#no1").attr("disabled", true);
		$("#yes1").attr("value" , "Undo");
			 },
	function ()
	{
		$("#b").removeClass("open");
		$("#b").hide();
		$("#no1").attr("disabled", false);
		$("#yes1").attr("value" , "Yes");
		
		$("#c").removeClass("open");
		$("#d").removeClass("open");
		$("#e").removeClass("open");
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yesone").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");
		
		$("#yes2").attr("disabled", false);
		$("#yes2").attr("value", "Yes");
		$("#no2").attr("disabled" , false);
		$("#no2").attr("value", "No");
		$("#yes3").attr("disabled", false);
		$("#yes3").attr("value", "Yes");
		$("#no3").attr("disabled" , false);
		$("#no3").attr("value", "No");
		$("#yes4_1").attr("disabled", false);
		$("#yes4_1").attr("value", "Yes");
		$("#no4_1").attr("disabled" , false);
		$("#no4_1").attr("value", "No");
		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
		
	});
	
	$("#no1").toggle(
	 function() 
	 { 
		$("#noone").addClass("open");
		$("#noone").show();
		$("#yes1").attr("disabled", true);
		$("#no1").attr("value" , "Undo");
	},
	function ()
	{
		$("#noone").removeClass("open");
		$("#noone").hide();
		$("#yes1").attr("disabled", false);
		$("#no1").attr("value" , "No");
		
		$("#yes2").attr("disabled", false);
		$("#yes2").attr("value", "Yes");
		$("#no2").attr("disabled" , false);
		$("#no2").attr("value", "No");
		$("#yes3").attr("disabled", false);
		$("#yes3").attr("value", "Yes");
		$("#no3").attr("disabled" , false);
		$("#no3").attr("value", "No");
		$("#yes4_1").attr("disabled", false);
		$("#yes4_1").attr("value", "Yes");
		$("#no4_1").attr("disabled" , false);
		$("#no4_1").attr("value", "No");
		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});

	$("#yes2").toggle(
	 function() 
	 { 
		$("#c").addClass("open");
		$("#c").show();
		$("#no2").attr("disabled", true);
		$("#yes2").attr("value" , "Undo");
	},
	function ()
	{
		$("#c").removeClass("open");
		$("#c").hide();
		$("#no2").attr("disabled", false);
		$("#yes2").attr("value" , "Yes");
		
		$("#d").removeClass("open");
		$("#e").removeClass("open");
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yesone").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");
		
		$("#yes3").attr("disabled", false);
		$("#yes3").attr("value", "Yes");
		$("#no3").attr("disabled" , false);
		$("#no3").attr("value", "No");
		$("#yes4_1").attr("disabled", false);
		$("#yes4_1").attr("value", "Yes");
		$("#no4_1").attr("disabled" , false);
		$("#no4_1").attr("value", "No");
		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});
	
	$("#no2").toggle(
	 function() 
	 { 
		$("#notwo").addClass("open");
		$("#notwo").show();
		$("#yes2").attr("disabled", true);
		$("#no2").attr("value" , "Undo");
	},
	function ()
	{
		$("#notwo").removeClass("open");
		$("#notwo").hide();
		$("#yes2").attr("disabled", false);
		$("#no2").attr("value" , "No");
		
		$("#d").removeClass("open");
		$("#e").removeClass("open");
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yesone").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");
		
		$("#yes3").attr("disabled", false);
		$("#yes3").attr("value", "Yes");
		$("#no3").attr("disabled" , false);
		$("#no3").attr("value", "No");
		$("#yes4_1").attr("disabled", false);
		$("#yes4_1").attr("value", "Yes");
		$("#no4_1").attr("disabled" , false);
		$("#no4_1").attr("value", "No");
		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});

	$("#yes3").toggle(
	 function() 
	 { 
		$("#f").addClass("open");
		$("#f").show();
		$("#no3").attr("disabled", true);
		$("#yes3").attr("value" , "Undo");
	},
	function ()
	{
		$("#f").removeClass("open");
		$("#f").hide();
		$("#no3").attr("disabled", false);
		$("#yes3").attr("value" , "Yes");
		
		$("#e").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yesone").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");
		
		$("#yes4_1").attr("disabled", false);
		$("#yes4_1").attr("value", "Yes");
		$("#no4_1").attr("disabled" , false);
		$("#no4_1").attr("value", "No");
		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});

	$("#no3").toggle(
	 function() 
	 { 
		$("#d").addClass("open");
		$("#d").show();
		$("#yes3").attr("disabled", true);
		$("#no3").attr("value" , "Undo");
		
	},
	function ()
	{
		$("#d").removeClass("open");
		$("#d").hide();
		$("#yes3").attr("disabled", false);
		$("#no3").attr("value" , "No");
		
		$("#e").removeClass("open");
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yesone").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");

		$("#yes4_1").attr("disabled", false);
		$("#yes4_1").attr("value", "Yes");
		$("#no4_1").attr("disabled" , false);
		$("#no4_1").attr("value", "No");
		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});
	
	$("#yes4_1").toggle(
	 function() 
	 { 
		$("#yesone").addClass("open");
		$("#yesone").show();
		$("#notes").show();
		$("#no4_1").attr("disabled", true);
		$("#yes4_1").attr("value" , "Undo");
	},
	function ()
	{
		$("#yesone").removeClass("open");
		$("#yesone").hide();
		$("#notes").hide();
		$("#no4_1").attr("disabled", false);
		$("#yees4_1").attr("value" , "Yes");
		
		$("#e").removeClass("open");
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");

		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});
	
	$("#no4_1").toggle(
	 function() 
	 { 
		$("#e").addClass("open");
		$("#e").show();
		$("#yes4_1").attr("disabled", true);
		$("#no4_1").attr("value" , "Undo");
	},
	function ()
	{
		$("#e").removeClass("open");
		$("#e").hide();
		$("#yes4_1").attr("disabled", false);
		$("#no4_1").attr("value" , "No");
		
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yesone").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");

		$("#yes4_2").attr("disabled", false);
		$("#yes4_2").attr("value", "Yes");
		$("#no4_2").attr("disabled" , false);
		$("#no4_2").attr("value", "No");
		$("#yes5_1").attr("disabled", false);
		$("#yes5_1").attr("value", "Yes");
		$("#no5_1").attr("disabled" , false);
		$("#no5_1").attr("value", "No");
		$("#yes5_2").attr("disabled", false);
		$("#yes5_2").attr("value", "Yes");
		$("#no5_2").attr("disabled" , false);
		$("#no5_2").attr("value", "No");
		$("#yes6").attr("disabled", false);
		$("#yes6").attr("value", "Yes");
		$("#no6").attr("disabled" , false);
		$("#no6").attr("value", "No");
	});
	
	$("#yes5_1").toggle(
	 function() 
	 { 
		$("#yesone").addClass("open");
		$("#yesone").show();
		$("#no5_1").attr("disabled", true);
		$("#yes5_1").attr("value" , "Undo");
	},
	function ()
	{
		$("#yesone").removeClass("open");
		$("#yesone").hide();
		$("#no5_1").attr("disabled", false);
		$("#yes5_1").attr("value" , "Yes");
		
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nothree").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");
	});
	
	$("#no5_1").toggle(
	 function() 
	 { 
		$("#nothree").addClass("open");
		$("#nothree").show();
		$("#yes5_1").attr("disabled", false);
		$("#no5_1").attr("value" , "Undo");
	},
	function ()
	{
		$("#nothree").removeClass("open");
		$("#nothree").hide();
		$("#yes5_1").attr("disabled", true);
		$("#no5_1").attr("value" , "No");
		
		$("#f").removeClass("open");
		$("#g").removeClass("open");
		$("#h").removeClass("open");
		$("#noone").removeClass("open");
		$("#notwo").removeClass("open");
		$("#nofour").removeClass("open");
		$("#yestwo").removeClass("open");
		$("#yesthree").removeClass("open");
	});
	
	$("#yes4_2").toggle(
	 function() 
	 { 
		$("#g").addClass("open");
		$("#g").show();
		$("#no4_2").attr("disabled", true);
		$("#yes4_2").attr("value" , "Undo");
	},
	function ()
	{
		$("#g").removeClass("open");
		$("#g").hide();
		$("#no4_2").attr("disabled", false);
		$("#yes4_2").attr("value" , "Yes");
	});
	
	$("#no4_2").toggle(
	 function() 
	 { 
		$("#h").addClass("open");
		$("#h").show();
		$("#yes4_2").attr("disabled", false);
		$("#no4_2").attr("value" , "Undo");
	},
	function ()
	{
		$("#h").removeClass("open");
		$("#h").hide();
		$("#yes4_2").attr("disabled", true);
		$("#no4_2").attr("value" , "No");
	});

	$("#yes5_2").toggle(
	 function() 
	 { 
		$("#yestwo").addClass("open");
		$("#yestwo").show();
		$("#no5_2").attr("disabled", true);
		$("#yes5_2").attr("value" , "Undo");
	},
	function ()
	{
		$("#yestwo").removeClass("open");
		$("#yestwo").hide();
		$("#no5_2").attr("disabled", false);
		$("#yes5_2").attr("value" , "Yes");
	});
	
	$("#no5_2").toggle(
	 function() 
	 { 
		$("#h").addClass("open");
		$("#h").show();
		$("#yes5_2").attr("disabled", false);
		$("#no5_2").attr("value" , "Undo");
	},
	function ()
	{
		$("#h").removeClass("open");
		$("#h").hide();
		$("#yes5_2").attr("disabled", true);
		$("#no5_2").attr("value" , "No");
	});
	
	$("#yes6").toggle(
	 function() 
	 { 
		$("#yesthree").addClass("open");
		$("#yesthree").show();
		$("#notes").show();
		$("#no6").attr("disabled", true);
		$("#yes6").attr("value" , "Undo");
	},
	function ()
	{
		$("#yesthree").removeClass("open");
		$("#yesthree").hide();
		$("#notes").show();
		$("#no6").attr("disabled", false);
		$("#yes6").attr("value" , "Yes");
	});
	
	$("#no6").toggle(
	 function() 
	 { 
		$("#nofour").addClass("open");
		$("#nofour").show();
		$("#yes6").attr("disabled", false);
		$("#no6").attr("value" , "Undo");
	},
	function ()
	{
		$("#nofour").removeClass("open");
		$("#nofour").hide();
		$("#yes6").attr("disabled", true);
		$("#no6").attr("value" , "No");
		
		
	});
	
});