document.addEventListener("DOMContentLoaded", () => {
  let overlay = document.getElementsByClassName("overlay")[0];
  let loading = document.getElementsByClassName("loading")[0];

  const load = document.getElementById("loading");
  setInterval(function() {load.innerHTML += " . "}, 500);
  
  

  setTimeout(() => {
    loading.remove();
    overlay.classList.add("loaded");
  }, 3000);
});

$(document).ready(function() {

    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  const para = document.getElementsByClassName("para");
  for (let i = 0; i < para.length; i++) {
    para[i].style.backgroundColor = "red";
  }

}
 });