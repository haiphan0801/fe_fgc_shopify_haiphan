var slideIndex = 0;
var slideIndex_dynamic = 0;
carousel();
carousel_dynamic();

function carousel() {
    var x = document.getElementsByClassName("annoucement-bar-message");
    var parentElement = document.querySelector(".announcement-bar.container-fuild");
  

    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
  
 
    x[slideIndex].classList.add('active');
    if (x[slideIndex].classList.contains("annoucement_first")) {
      parentElement.style.backgroundColor = "rgb(36, 36, 36)";
    } else if (x[slideIndex].classList.contains("annoucement_second")) {
      parentElement.style.backgroundColor = "rgb(37, 65, 55)";
    } else if (x[slideIndex].classList.contains("annoucement_third")) {
      parentElement.style.backgroundColor = "rgb(78, 44, 44)"; 
    }
  
    fadeIn(x[slideIndex]); 
  
    slideIndex++;
    if (slideIndex >= x.length) {
      slideIndex = 0;
    }
  
    setTimeout(function() {
      fadeOut(x[slideIndex]); 
      setTimeout(carousel, 3000); 
    }, 3000);
  }
  
  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.7s ease-in-out";
    setTimeout(function() {
      element.style.opacity = 1;
    }, 50);
  }
  
  function fadeOut(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.7s ease-in-out";
  }


function carousel_dynamic() {
    var x = document.getElementsByClassName("slide_dynamic");
  
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
  
    x[slideIndex_dynamic].classList.add('active');
    
    slideIndex_dynamic++;
    if (slideIndex_dynamic >= x.length) {
        slideIndex_dynamic = 0;
    } 
  
    setTimeout(carousel_dynamic, 5000);
  }

// var b = 0;
// var texts = ['ORGANIC', 'PLANT POWERED', 'PLASTIC FREE', 'ENERGIZING'];
// var currentTextIndex = 0;
// var speed = 70;

// function typeWriter() {
//   var txt = texts[currentTextIndex];
//   if (b < txt.length) {
//     document.getElementById("slide_dynamic").innerHTML += txt.charAt(b);
//     b++;
//     setTimeout(typeWriter, speed);
//   } else {
//     currentTextIndex = (currentTextIndex + 1) % texts.length;
//     b = 0;
//     document.getElementById("slide_dynamic").innerHTML = '';
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter()

function resetBackground() {
  document.getElementById('featured-menu').style.backgroundImage = 'url(./asset/images/Feature-menu-5-1_1100x.webp)';
}

/* Change background on hover */
function changeBackground(imageUrl) {
  document.getElementById('featured-menu').style.backgroundImage = imageUrl;
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
  
