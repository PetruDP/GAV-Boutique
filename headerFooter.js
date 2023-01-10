let currentPath = location.origin;
let header = `
    <div>
        <h1>GAV Boutique</h1>
        <div class = "barMenu">
            <a href = "${currentPath}/index.html" class = "homeLink">HOME</a>
            <a href = "${currentPath}/TablouriCanvas/tablouriCanvas.html" class = "tablouriLink">Tablouri canvas</a>
            <a href = "${currentPath}/PasteCraciun/pasteCraciun.html" class = "pasteCraciunLink">Decoratiuni de Craciun</a>
            <a href = "${currentPath}/AccesoriiBotez/accesoriiBotez.html" class = "accesoriiBotezLink">Accesorii botez</a>
            <a href = "#contact" class = "contactLink">CONTACT</a>
        </div>
    
    </div>
`;

document.querySelector("header").innerHTML = header;
document.querySelector(".contactLink").onclick = () => {
  document.querySelector(".contact").classList.add("contactAnimation");
  setTimeout(() => {
    document.querySelector(".contact").classList.remove("contactAnimation");
  }, 500);
};

let footer = `
    <div class = "contact" id = "contact">
        <h1>CONTACT</h1>
        <p><b>Comenzile se plaseaza la:</b></p>
        <p><b>e-mail:</b> dinu.adrianavalentina@yahoo.ro</p>
        <p><b>telefon:</b> 0764 614 058</p>
        <p><b>whatsapp:</b> 0764 614 058</p>
        <p><b>facebook messenger:</b> <a href = "#" >GAV-Boutique</a></p>
        

    </div>`;

document.querySelector("footer").innerHTML = footer;
