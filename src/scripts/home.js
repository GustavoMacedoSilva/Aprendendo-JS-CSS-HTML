const bandList = document.querySelectorAll("ul.custom-list a.band");
const bandSrc = document.querySelector(".band-preview-image");


for (let band of bandList){
    band.addEventListener("mouseenter", () => {
        if(band.textContent === "Limp Bizkit"){
            bandSrc.setAttribute("src", "../../assets/images/fred-durst.jpg");
        }
        if(band.textContent === "Slipknot"){
            bandSrc.setAttribute("src", "../../assets/images/slipknot_integrants.webp");
        }
        if(band.textContent === "Deftones"){
            bandSrc.setAttribute("src", "../../assets/images/deftones-band.webp");
        }
        if(band.textContent === "System of a Down"){
            bandSrc.setAttribute("src", "../../assets/images/soad-band.jpg");
        }
        if(band.textContent === "Pearl Jam"){
            bandSrc.setAttribute("src", "../../assets/images/pearl-jam-band.jpeg");
        }
        if(band.textContent === "Megadeth"){
            bandSrc.setAttribute("src", "../../assets/images/megadeth-band.jpg");
        }
        if(band.textContent === "Avenged Sevenfold"){
            bandSrc.setAttribute("src", "../../assets/images/a7x-band.jpg");
        }
    });
}

