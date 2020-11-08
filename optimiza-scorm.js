//Variables
const bodyStyle = document.querySelector("body").style;
const contentStyle = document.querySelector("div#content").style;

let nodes = document.querySelectorAll(".node");
let images = document.querySelectorAll("img");
let celdas = document.querySelectorAll("td");
let centrado = document.querySelectorAll(".texto_centrado");

//Body
bodyStyle.background = "#404040";

//Contenido
contentStyle.maxWidth = "800px";
contentStyle.padding = "1em";
contentStyle.margin = "0 auto";

//Páginas
nodes.forEach((node) => {
  node.style.padding = "1em";
  node.style.background = "#fff";
  node.style.margin = "1em 0 1em 0";
  node.style.borderRadius = "5px";
});

//Imágenes
images.forEach((image) => (image.style.maxWidth = "100%"));

//Datos en celdas
celdas.forEach((celda) => (celda.style.textAlign = "left"));
centrado.style.textAlign = "center !important";
