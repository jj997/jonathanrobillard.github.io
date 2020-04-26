var hamburger = document.querySelector(".hamburger");
var menuMobile = document.querySelector("#allProjectsContent");
var projSMenu = document.querySelector("#projSpan");
var pSMenuContent = document.querySelector("#projectsSubMenu");
var plusDeContenu = document.querySelector("#projSpan strong");

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

projSMenu.addEventListener("click", function(){
  if(pSMenuContent.style.display==="none"){
    pSMenuContent.style.display="flex";
    plusDeContenu.textContent = "-";
  }
    else
    {
    pSMenuContent.style.display="none";
    plusDeContenu.textContent = "+";
    }

});
