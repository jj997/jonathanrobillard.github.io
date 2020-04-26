var hamburger = document.querySelector(".hamburger");
var menuMobile = document.querySelector("#allProjectsContent")

// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  if(hamburger.classList.contains("is-active"))
  {
    menuMobile.style.display="block";
  }
  else
  {
    menuMobile.style.display="none";
  }
  
});
