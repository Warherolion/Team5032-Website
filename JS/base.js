function navHide(){
  var open = false

  if (open === false){
    document.getElementsByClassName("headNav")[0].style.display = "block";
    var open = true
  }
  else if (open === true){
    document.getElementsByClassName("headNav")[0].style.display = "none";
    var open = false
  }
}
  