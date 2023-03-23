const productMenu= document.getElementById('product');
const companyMenu= document.getElementById('company');
const connectMenu= document.getElementById('connect');
var connectlist= document.getElementById('connectList');
var productList= document.getElementById('productList');var companylist= document.getElementById('companyList');


//hamburger
function toggleMenu() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
window.addEventListener("load", function(){
    var allUl= this.document.querySelectorAll("ul");
    allUl.forEach(ul => ul.style.visibility ="hidden")
   
});

productMenu.addEventListener('mouseover', function(){
    listVisibility(productList);
});
companyMenu.addEventListener('mouseover', function(){
    listVisibility(companylist);
});
connectMenu.addEventListener('mouseover', function(){
    listVisibility(connectlist);
});
// productList.addEventListener('mouseout', function(){
//     productList.style.visibility ="hidden";
// });

function listVisibility(params) {

    
    var allUl= this.document.querySelectorAll("ul");
    allUl.forEach(ul => ul.style.visibility ="hidden");
    params.style.visibility ="visible";
}