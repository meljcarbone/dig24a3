// Scroll Interaction for header/menu bar 
// On scroll, get the element called myTopnav and minimise it by -110px else return to 0 
var lastScrollTop = 0;
navbar = document.getElementById("myTopnav");

window.addEventListener("scroll", function(){
  //variable is scrolltop
  var scrollTop = window.pageYOffset || document
  .documentElement.scrollTop;
  //if scroll top is > than the last scroll top
  if (scrollTop > lastScrollTop){
    //then nav bar is minimised
    navbar.style.top="-110px";
    //else if the scroll is 0 then the bar appears again
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
})    

//Form at bottom of the page
const form = document.querySelector('.form-overview');

  // Watch for the shoelace Submit event
  form.addEventListener('sl-submit', event => {
    const formData = event.detail.formData;
    let output = '';
    console.log(event.detail.formControls);
  });

  // Slide out drawer for the contact us section
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('sl-button[type="primary"]');

//open draw from right hand side apon click
  openButton.addEventListener('click', () => drawer.show());
  //close the draw when the close button is clicked
  closeButton.addEventListener('click', () => drawer.hide());

  // slideshow

  //starting slide show at the first slide
  var slideIndex = 1;
showDivs(slideIndex);
//function to show the next slide
function plusDivs(n) {
  showDivs(slideIndex += n);
}
//Trigger to show the slides or divs
function showDivs(n) {
  //showing the two variables
  var i;
  var x = document.getElementsByClassName("mySlides");
  //if the variant x (mySlides div) is clicked to be more than the current one, the next slide will appear
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  //0 is the first picture and will continue to increase by 1 using the ++ 
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}