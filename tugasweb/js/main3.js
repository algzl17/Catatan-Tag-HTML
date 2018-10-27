 window.onload = function(){
 	document.getElementById('tampil0').style.display = "block";
 	document.getElementById('tampil1').style.display = "none";
 	document.getElementById('tampil2').style.display = "none";
 	document.getElementById('tampil3').style.display = "none";
 };

 function view1() {
 	document.getElementById('tampil0').style.display = "none";
 	document.getElementById('tampil1').style.display = "block";
 	document.getElementById('tampil2').style.display = "none";
 	document.getElementById('tampil3').style.display = "none";
 }

 function view2() {
 	document.getElementById('tampil0').style.display = "none";
 	document.getElementById('tampil1').style.display = "none";
 	document.getElementById('tampil2').style.display = "block";
 	document.getElementById('tampil3').style.display = "none";
 }

 function view3() {
 	document.getElementById('tampil0').style.display = "none";
 	document.getElementById('tampil1').style.display = "none";
 	document.getElementById('tampil2').style.display = "none";
 	document.getElementById('tampil3').style.display = "block";
 }