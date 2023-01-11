let currentPath = location.origin;
let header = `
    <div>
        <h1 class="font-effect-neon">GAV &nbspBoutique</h1>
        <div class = "barMenu">
            <a href = "${currentPath}/index.html" class = "homeLink">HOME</a>
            <a href = "${currentPath}/TablouriCanvas/tablouriCanvas.html" class = "tablouriLink">Tablouri canvas</a>
            <a href = "${currentPath}/PasteCraciun/pasteCraciun.html" class = "pasteCraciunLink"></a>
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
  }, 1500);
};

let dot = "";

if (location.origin != location.pathname) {
  dot = ".";
}

let footer = `
    <div class = "contact" id = "contact">
        <div>
            <h1>CONTACT</h1>
            <p style = "margin-top : 5px;"><b>Comenzile se plaseaza la:</b></p>
        </div>
        <div>    
            <div>
                <a href = "https://www.gmail.com" target = "_blank"> 
                    <img src = "${dot}./img/gmail.svg">
                </a>
                <p><b>e-mail:</b> dinu.adrianavalentina@yahoo.ro</p>
            </div> 
            <div>
                <img src = "${dot}./img/phone.svg">
                <p><b>telefon:</b> 0764 614 058</p>
            </div> 
        </div>
        <div>
            <div>
                <a href = "#">
                    <img src = "${dot}./img/facebook2.svg">
                </a>
                <p><b>facebook messenger:</b> <a href = "#" >GAV-Boutique</a></p>
            </div> 
            <div>
                <img src = "${dot}./img/whatsapp.svg"> 
                <p><b>whatsapp:</b> 0764 614 058</p>
            </div>                      
        </div>

    </div>`;

document.querySelector("footer").innerHTML = footer;
