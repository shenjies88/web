// JavaScript Document
	var indext = new Array();
		for(var x=1;x<=5;x++)
			indext[x]=x;
	var Ob = new Array();
		for(var x=1;x<=5;x++)
			Ob[x]=document.getElementById("img"+x);
			
	function change(){
		for(var x=1;x<=5;x++)
			{
				indext[x]++;
				if(indext[x]==10)indext[x]=1;
				Ob[x].src="./"+indext[x]+".jpg";
			
			}
			document.getElementById("zhu").src=
				"./"+indext[3]+".jpg";
			setTimeout('change()',3000);
	}
	
	
	function clickl(obj){	
		document.getElementById("zhu").src=obj.src;
	}
	

	
