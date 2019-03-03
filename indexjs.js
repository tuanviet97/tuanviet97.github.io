
window.onload = function(){
   var about2 = document.getElementById("about");
   about2.addEventListener("click",about);
   var divabout = document.getElementById("aboutme");
   divabout.style.display = "none" ;
}

function about(){
var divabout = document.getElementById("aboutme");
 if(!divabout.style.display== "none" || divabout.style.display == "none"){
    divabout.style.display = "flex";
    divabout.style.justifyContent ="center";
 }else {
    divabout.style.display ="none"; 
 }
}