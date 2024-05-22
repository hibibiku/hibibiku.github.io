document.addEventListener("DOMContentLoaded", () => {
  let overlay = document.getElementsByClassName("overlay")[0];
  let loading = document.getElementsByClassName("loading")[0];
  let loadingbg = document.getElementsByClassName("loading-bg")[0];

  const load = document.getElementById("dot");
  setInterval(function() {load.innerHTML += " . "}, 500);

  setTimeout(() => {
    loading.remove();
    loadingbg.remove();
    overlay.classList.add("loaded");
  }, 3000);
});

$(document).ready(function() {

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
  document.getElementById("toggle-mode").innerHTML = "Light Mode";
  document.getElementById("toggle-mode").style.backgroundColor = "#e9e9ed";
  document.getElementById("toggle-mode").style.color = "#2b2a33";
} else {
  document.body.classList.remove("dark-theme");
  document.getElementById("toggle-mode").innerHTML = "Dark Mode";
  document.getElementById("toggle-mode").style.backgroundColor = "#2b2a33";
  document.getElementById("toggle-mode").style.color = "#e9e9ed";
  
}

  dark = function dark() {
    var element = document.body;
    element.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
      document.getElementById("toggle-mode").innerHTML = "Light Mode";
      document.getElementById("toggle-mode").style.backgroundColor = "#e9e9ed";
      document.getElementById("toggle-mode").style.color = "#2b2a33";
    }
    else
    {
      document.getElementById("toggle-mode").innerHTML = "Dark Mode";
      document.getElementById("toggle-mode").style.backgroundColor = "#2b2a33";
      document.getElementById("toggle-mode").style.color = "#e9e9ed";
    }
      
    
 }

    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  var content = document.getElementById("content-div")

  var top = $(document).scrollTop();

  if (document.body.classList.contains("dark-theme")) {
    if (window.screenY < top) {
      content.style.backgroundColor = "var(--chestnut)";
    }
    else {
      content.style.backgroundColor = "";
    }
  }
  else {
    if (window.screenY < top) {
      content.style.backgroundColor = "var(--melon)";
    }
    else {
      content.style.backgroundColor = "";
    }
  }
}
 });