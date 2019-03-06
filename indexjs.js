
window.onload = function(){
   var about2 = document.getElementById("about");
   about2.addEventListener("click",about);
   //  var divabout = document.getElementById("aboutme");
   //  divabout.style.display = "none" ;  
   /* set display:none trong css => khối k được tạo ra =>khi trang đã load, khối không được tạo ra =>  console.log = nothing  */
   var contact2 = document.getElementById("contact");
   contact2.addEventListener("click",contact);
}
function about(){
var divabout = document.getElementById("aboutme");
 if(divabout.style.display== "" || divabout.style.display == "none"){
    divabout.style.display = "flex";
    divabout.style.justifyContent ="center";
 }else {
    divabout.style.display ="none"; 
 }

 var contact = document.getElementById("contactdiv");
 if(contact != "none" || contact != ""){

   contact.style.display = "none";

 }
}
function contact() {
   var divabout = document.getElementById("aboutme");
   if(divabout != "none" || divabout != ""){

      divabout.style.display = "none";

   }
var contact = document.getElementById("contactdiv");
if(contact.style.display == "" || contact.style.display == "none"){
   contact.style.display = "block";
}else {
   contact.style.display ="none"; 
}


}