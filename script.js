const main = document.getElementById("main");
// console.log(main);
const images = [
  "https://storage.googleapis.com/a1aa/image/ZlfLkHwqL9WaJqRYcC9zFg90RfsUPfTB0Fd3fx2weeeljpx5JA.jpg",

  "https://storage.googleapis.com/a1aa/image/rnsXIpqpPz7HEBgaOBRkcGoyDmBU48pK2jhJymgQDD8ty88E.jpg",

  "https://storage.googleapis.com/a1aa/image/TffB2d2BN8n9mEZKPd5jAECQipNuXz1OTiZ8ImuyXe9hWmnnA.jpg",
];
let currentIndex = 0;
function updateBackground() {
  console.log("currentIndex :", currentIndex);
  main.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}
console.log("start");
console.log("set first bg");
updateBackground();
// synchronous code  - asynchgronous code
console.log("two");
setInterval(updateBackground, 5000); //web api - non blocking
console.log("end");
