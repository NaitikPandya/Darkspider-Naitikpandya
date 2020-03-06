var modal = document.getElementById("air-detail");
var modal1 = document.getElementById("water-detail");
var modal2 = document.getElementById("land-detail");
var modal3 = document.getElementById("Plastic-detail");
var img1 = document.getElementById("Ap");
var img2 = document.getElementById("Wp");
var img3 = document.getElementById("Lp");
var img4 = document.getElementById("Pw");
img1.onclick = function(){
  modal.style.display = "block";
}
img2.onclick = function(){
  modal1.style.display = "block";
}
img3.onclick = function(){
  modal2.style.display = "block";
}
img4.onclick = function(){
  modal3.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

span.onclick = function() {
  modal.style.display = "none";
  
}
span1.onclick = function() {
  
  modal1.style.display = "none";
  
}
span2.onclick = function() {
  
  modal2.style.display = "none";
  
}
span3.onclick = function() {
  
  modal3.style.display = "none";
  
}