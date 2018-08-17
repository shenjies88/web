// JavaScript Document
	var t;
	var a=1;
	function change(){
		a++;
		if(a>4)a=1;
		document.getElementById("img1").src="./"+a+".jpg";
		t=setTimeout('change()',3000);
		switch(a){
			case 1:
				document.getElementById("text").innerHTML="Participate in the opening ceremony of the generation"
			break;
			case 2:
			document.getElementById("text").innerHTML="Speech by the representative of the embassy in China"
			break;
			case 3:
			document.getElementById("text").innerHTML="Royal guest performance"
			break;
			case 4:
			document.getElementById("text").innerHTML="International handmade craftsman"
			break;
		}
	}
	
	function guoji(){
		document.getElementById("r1").style.display="block";
		document.getElementById("r2").style.display="none";
		document.getElementById("r3").style.display="none";
		
		document.getElementById("guoji").style.borderTop="4px"+" "+"solid"+" "+"#F00";
		document.getElementById("shenzhen").style.borderTop="2px"+" "+"solid"+" "+"#000";
		document.getElementById("shanghai").style.borderTop="2px"+" "+"solid"+" "+"#000";
		
		document.getElementById("guoji").style.fontWeight="bold";
		document.getElementById("shenzhen").style.fontWeight="normal";
		document.getElementById("shanghai").style.fontWeight="normal";
	}
	
	function shenzhen(){
		document.getElementById("r1").style.display="none";
		document.getElementById("r2").style.display="block";
		document.getElementById("r3").style.display="none";
		
		document.getElementById("guoji").style.borderTop="2px"+" "+"solid"+" "+"#000";
		document.getElementById("shenzhen").style.borderTop="4px"+" "+"solid"+" "+"#F00";
		document.getElementById("shanghai").style.borderTop="2px"+" "+"solid"+" "+"#000";
		
		document.getElementById("guoji").style.fontWeight="normal";
		document.getElementById("shenzhen").style.fontWeight="bold";
		document.getElementById("shanghai").style.fontWeight="normal";
	}
	
	function shanghai(){
		document.getElementById("r1").style.display="none";
		document.getElementById("r2").style.display="none";
		document.getElementById("r3").style.display="block";
		
		document.getElementById("guoji").style.borderTop="2px"+" "+"solid"+" "+"#000";
		document.getElementById("shenzhen").style.borderTop="2px"+" "+"solid"+" "+"#000";
		document.getElementById("shanghai").style.borderTop="4px"+" "+"solid"+" "+"#F00";
		
		document.getElementById("guoji").style.fontWeight="normal";
		document.getElementById("shenzhen").style.fontWeight="normal";
		document.getElementById("shanghai").style.fontWeight="bold";
	}