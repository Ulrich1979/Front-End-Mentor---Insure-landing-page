/** TOGGLE OF MOBILE MENU **/
function myFunction() {
  var x = document.getElementById("my-top-navigation");
  if (x.className === "top-nav flex") {
    x.className += " open";
  } else {
    x.className = "top-nav flex";
  }
  var y = document.getElementById("icon");
  if (y.className === "icon-close") {
      y.className ="icon-open";
  } else {
      y.className = "icon-close";
  }
}