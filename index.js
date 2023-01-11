let bgPink = "rgb(233, 164, 167)";

if (window.location.pathname == "/index.html") {
  document.querySelector(".homeLink").style.backgroundColor = bgPink;
  document.querySelector(".homeLink").style.textDecoration = "underline";
} else if (window.location.pathname == "/TablouriCanvas/tablouriCanvas.html") {
  document.querySelector(".tablouriLink").style.backgroundColor = bgPink;
  document.querySelector(".tablouriLink").style.textDecoration = "underline";
} else if (window.location.pathname == "/PasteCraciun/pasteCraciun.html") {
  document.querySelector(".pasteCraciunLink").style.backgroundColor = bgPink;
  document.querySelector(".pasteCraciunLink").style.textDecoration =
    "underline";
} else if (window.location.pathname == "/AccesoriiBotez/accesoriiBotez.html") {
  document.querySelector(".accesoriiBotezLink").style.backgroundColor = bgPink;
  document.querySelector(".accesoriiBotezLink").style.textDecoration =
    "underline";
}

let date = new Date();
let currMonth = date.getMonth() + 1;

if (currMonth >= 2 && currMonth <= 5) {
  document.querySelector(".pasteCraciunLink").innerText =
    "Decoratiuni de Paste";
} else if (currMonth >= 6 && currMonth <= 9) {
  document.querySelector(".pasteCraciunLink").style.display = "none";
} else {
  document.querySelector(".pasteCraciunLink").innerText =
    "Decoratiuni de Craciun";
}
