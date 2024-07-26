function close() {
  let card = document.getElementById("card");
  card.style.display = "none";
}

let btnClose = document.getElementById("btnClose");

btnClose.addEventListener("click", close);
