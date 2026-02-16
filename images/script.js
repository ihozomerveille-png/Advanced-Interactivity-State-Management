// Open first replies by default
document.getElementById("myBtn").click();

// Toggle blog replies
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Like button
function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = " Liked";
}
