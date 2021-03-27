
function myFunction(){
    var navbar=document.getElementById('nav');
    navbar.classList.toggle('show');
}
var modal = document.getElementById('id01');

//close signup
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
