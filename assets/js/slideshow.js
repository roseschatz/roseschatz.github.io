function currentDiv(n, name) {
  showDivs(slideIndex = n, name);
}

function showDivs(n, name) {
  var i;
  var x = document.getElementsByClassName(name);
  var dots = document.getElementsByClassName(name + "thumbnail");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}