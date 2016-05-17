var func = function() 
 {  
	var result = " ";
 	for (i = 1; i<=7; i++) 
	{ 
		for (j = 1; j<=i; j++) 
		{
			result += "#";
			if(i==j)
			{
				result +="<br>";
			}
		}
		
	}
	return result;
 };	 
 

 document.write(func()); 
