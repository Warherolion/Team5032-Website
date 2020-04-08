
// Get the modal
const modal = document.getElementById("myModal");
const mechModal = document.getElementById("mechModal");
const elecModal = document.getElementById("elecModal");
const progModal = document.getElementById("progModal");
const desModal = document.getElementById("designModal");
const busModal = document.getElementById("busModal");

const mechSpan = document.getElementById("close2");
const elecSpan = document.getElementById("close3");
const progSpan = document.getElementById("close4");
const desSpan = document.getElementById("close5");
const busSpan = document.getElementById("close6");


// Get the button that opens the modal
const btn = document.getElementById("myBtn");
const mecbtn = document.getElementById("mechBtn");
const elcbtn = document.getElementById("elecBtn");
const probtn = document.getElementById("progBtn");
const desbtn = document.getElementById("designBtn");
const busbtn = document.getElementById("busBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//To whom it may concern, I know i could cut this down in size but im 1.) lazy and 2.) I just dont feel like it 

btn.onclick = () => {
    modal.style.display = "block";
}; 
mecbtn.onclick = () => {
  mechModal.style.display = "block";
};
elcbtn.onclick = () => {
  elecModal.style.display = "block";
};
probtn.onclick = () => {
  progModal.style.display = "block";
};
desbtn.onclick = () => {
  desModal.style.display = "block";
};
busbtn.onclick = () => {
  busModal.style.display = "block";
};


span.onclick = () => {
  modal.style.display = "none";
};
mechSpan.onclick = () => {
  console.log('Hello')
  mechModal.style.display = "none";
};
elecSpan.onclick = () => {
  console.log('Hello')
  elecModal.style.display = "none";
};
progSpan.onclick = () => {
  console.log('Hello')
  progModal.style.display = "none";
};
desSpan.onclick = () => {
  console.log('Hello')
  desModal.style.display = "none";
};
busSpan.onclick = () => {
  console.log('Hello')
  busModal.style.display = "none";
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  } else if (event.target === mechModal){
    mechModal.style.display = "none";
  }else if (event.target === elecModal){
    elecModal.style.display = "none";
  }else if (event.target === progModal){
    progModal.style.display = "none";
  }else if (event.target === desModal){
    desModal.style.display = "none";
  }else if (event.target === busModal){
    busModal.style.display = "none";
  }
};
function responseNav() {
  var x = document.getElementById("Nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}