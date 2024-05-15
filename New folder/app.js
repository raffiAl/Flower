const content = document.querySelector(".contents");
const incrementButton = document.getElementById("incrementButton");
const count = document.getElementById("count");

function welcome() {
  alert("Boom your code is here");
  content.removeAttribute("hidden");
}
// document.body.onload = welcome;

incrementButton.addEventListener("click", () => {
  count.innerText++;

  if (count.innerText == 7) {
    paraghrap = document.createElement("p");
    paraghrap.textContent = "Selamat anda telah memunculkan pesan rahasia";
    content.appendChild(paraghrap);
    content.appendChild(gambar);
    incrementButton.textContent = "Tekan lagi untuk kejutan";
  } else if (count.innerText == 10) {
    incrementButton.textContent = "Tombol ada di bawah";
    content.appendChild(addButton);
  }
});

const removeBtn = document.createElement("button");
const addButton = document.createElement("a");
addButton.setAttribute("href", "https://raffial.github.io/Flower/");
addButton.textContent = "This fo u";

removeBtn.textContent = "Flower";
removeBtn.addEventListener("click", () => {
  content.removeChild(paraghrap);
  content.removeChild(gambar);
  content.removeChild(removeBtn);
  incrementButton.textContent = "Tekan aku dong:3";
  count.innerText = "0";
});

const gambar = document.createElement("img");
gambar.setAttribute("src", "/gorila.jpg");
let paraghrap;

content.style.display = "flex";
content.style.flexDirection = "column";
content.style.gap = "10px";
