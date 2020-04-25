/*

function moveNav(x) {
    if (x.matches) { // If media query matches
       var headerdiv = document.getElementById("headerDiv");
       headerdiv.insertAdjacentElement('afterbegin',document.getElementById("navWrapper"));


    } else { 
       var jobtitle = document.getElementById("poste");
        jobtitle.insertAdjacentElement('afterend',document.getElementById("navWrapper"));
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)");
  moveNav(x); // Call listener function at run time
  x.addListener(moveNav);// Attach listener function on state changes */