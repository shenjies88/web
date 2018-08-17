// JavaScript Document
	var new1 = document.getElementById("new1");
	var new2 = document.getElementById("new2");
	var new3 = document.getElementById("new3");
	var indext = new Array();
	for( var x=1;x<=5;x++)
			indext[x]=x;
	var Ob = new Array();
	for(var x=1;x<=5;x++){
		
		Ob[x] = document.getElementById("img"+x);
		console.log(Ob[x]);
	}
	var t;//定时器对象
	function change(){
		for(var x=1;x<=5;x++){
			indext[x]--;
			if(indext[x] == 0)indext[x]=5;
			Ob[x].src ="./"+indext[x]+".jpg";			
		}
		switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
		t = setTimeout('change()',3000);
	}
	function Clear1(){
		clearTimeout(t);
	}
	
	function new1X(){
		new1.style.display = "block";
		new2.style.display = "none";
		new3.style.display = "none";
	}
	function new2X(){
		new1.style.display = "none";
		new2.style.display = "block";
		new3.style.display = "none";
	}
	function new3X(){
		new1.style.display = "none";
		new2.style.display = "none";
		new3.style.display = "block";
	}//中间画廊以及左下角新闻
	function Lchange1(){
		document.getElementById("left").style.borderColor="transparent"+" "+"#F00"+" "+"transparent"+" "+"transparent";
	}
		function Lchange2(){
		document.getElementById("left").style.borderColor="transparent"+" "+"#C90"+" "+"transparent"+" "+"transparent";
	}
	function Rchange1(){
		document.getElementById("right").style.borderColor="transparent"+" "+"transparent"+" "+"transparent"+" "+"#F00";
	}
	function Rchange2(){
		document.getElementById("right").style.borderColor="transparent"+" "+"transparent"+" "+"transparent"+" "+"#C90";
	}//左右箭头改变
	
	function add(){
		for(var x=1;x<=5;x++){
			indext[x]++;
			if(indext[x] > 5)indext[x]=1;
			Ob[x].src ="./"+indext[x]+".jpg";			
		}
		switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}

	}
	function Di(){
		for(var x=1;x<=5;x++){
			indext[x]--;
			if(indext[x] == 0)indext[x]=5;
			Ob[x].src ="./"+indext[x]+".jpg";			
		}
		switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	function img1move(){
		clearTimeout(t);
		Ob[1].style.zIndex="5";
		Ob[2].style.zIndex="4";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="2";
		Ob[5].style.zIndex="1";
		switch(indext[1]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	function img1out(){
		t = setTimeout('change()',3000);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="2";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="2";
		Ob[5].style.zIndex="1";
				switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	
	function img2move(){
		clearTimeout(t);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="4";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="2";
		Ob[5].style.zIndex="1";
		switch(indext[2]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	function img2out(){
		t = setTimeout('change()',3000);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="2";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="2";
		Ob[5].style.zIndex="1";
				switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	
	function img3move(){
		console.log(t);
		clearTimeout(t);
		
	}
	
	function img3out(){
		
		t = setTimeout('change()',3000);
		console.log(t);
	}
	
	function img4move(){
		clearTimeout(t);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="2";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="4";
		Ob[5].style.zIndex="1";
		switch(indext[4]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	function img4out(){
		t = setTimeout('change()',3000);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="2";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="2";
		Ob[5].style.zIndex="1";
				switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	
	function img5move(){
		clearTimeout(t);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="2";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="4";
		Ob[5].style.zIndex="5";
		switch(indext[5]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	function img5out(){
		t = setTimeout('change()',3000);
		Ob[1].style.zIndex="1";
		Ob[2].style.zIndex="2";
		Ob[3].style.zIndex="3";
		Ob[4].style.zIndex="2";
		Ob[5].style.zIndex="1";
				switch(indext[3]){
			case 1:document.getElementById("neirong").innerHTML="Devil city";
			 break;
			 			case 2:document.getElementById("neirong").innerHTML="Great Wall First Pier";
			 break;
			 			case 3:document.getElementById("neirong").innerHTML="Hexi Corridor";
			 break;
			 			case 4:document.getElementById("neirong").innerHTML="The world's first Jiayuguan";
			 break;
			 			case 5:document.getElementById("neirong").innerHTML="Beautiful crescent lake";
			 break;
		}
	}
	
	
	
