var func = function() 
 { 
    var result = "";
	for( var i = 1; i <= 8; i++) 
	{ 
		for(j = 1; j <= 8; j++)  
		{ 
			if((i+j)%2 == 1 ) 
			{ 
				 result += "O"; 
			 }else 
			{ 
				 result += "X"; 
			 } 
		}
		result += "<br>";
	} 
	 return result;
 };	 
 

 document.write(func()); 
