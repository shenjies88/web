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
				document.getElementById("text").innerHTML="参加开幕式的各国代表"
			break;
			case 2:
			document.getElementById("text").innerHTML="驻华使领管代表致辞"
			break;
			case 3:
			document.getElementById("text").innerHTML="皇家迎宾表演"
			break;
			case 4:
			document.getElementById("text").innerHTML="国际手工工艺匠"
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