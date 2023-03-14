const trigger = document.querySelector("#modal-trigger");
const modal = document.querySelector("#modal");
const close = document.querySelector(".close");

trigger.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function none(){
    document.getElementsByClassName('lincoln-main')[0].style.display="none"
} 

function block(){
    document.getElementsByClassName('lincoln-main')[0].style.display="block"
}