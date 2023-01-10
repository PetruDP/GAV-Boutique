if (window.location.pathname == "/index.html") {
  document.querySelector(".homeLink").style.backgroundColor =
    "rgb(240, 226, 206)";
  document.querySelector(".homeLink").style.textDecoration = "underline";
} else if (window.location.pathname == "/TablouriCanvas/tablouriCanvas.html") {
  document.querySelector(".tablouriLink").style.backgroundColor =
    "rgb(240, 226, 206)";
  document.querySelector(".tablouriLink").style.textDecoration = "underline";
} else if (window.location.pathname == "/PasteCraciun/pasteCraciun.html") {
  document.querySelector(".pasteCraciunLink").style.backgroundColor =
    "rgb(240, 226, 206)";
  document.querySelector(".pasteCraciunLink").style.textDecoration =
    "underline";
} else if (window.location.pathname == "/AccesoriiBotez/accesoriiBotez.html") {
  document.querySelector(".accesoriiBotezLink").style.backgroundColor =
    "rgb(240, 226, 206)";
  document.querySelector(".accesoriiBotezLink").style.textDecoration =
    "underline";
}
