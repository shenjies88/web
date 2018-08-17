// JavaScript Document
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');
	var page4 = document.getElementById('page4');
	
	function next1(){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="none";
		page4.style.display="none";
	}
	
	function next2(){
		page1.style.display="none";
		page2.style.display="none";
		page3.style.display="block";
		page4.style.display="none";
	}
	
	function return2(){
		page1.style.display="block";
		page2.style.display="none";
		page3.style.display="none";
		page4.style.display="none";
	}
	
	function next3(){
		page1.style.display="none";
		page2.style.display="none";
		page3.style.display="none";
		page4.style.display="block";
	}
	
	function return3(){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="none";
		page4.style.display="none";
	}
	
	function next4(){
		page1.style.display="block";
		page2.style.display="none";
		page3.style.display="none";
		page4.style.display="none";
	}
	
	function return4(){
		page1.style.display="none";
		page2.style.display="none";
		page3.style.display="block";
		page4.style.display="none";
		
	}