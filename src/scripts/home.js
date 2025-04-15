const bandList = document.querySelectorAll("ul.custom-list a.band");
const bandSrc = document.querySelector(".band-preview-image");
const bandLink = document.querySelectorAll("a.band");
let gifRodando = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeBandImage(bandName) {
    gifRodando = true;
    if(bandName === "Limp Bizkit"){
        bandSrc.setAttribute("src", "../../assets/gifs/limp-bizkit-numetal.gif");
        await sleep(1000);
        window.location.href = "limp-bizkit.html";
        gifRodando = false;
    }
    if(bandName === "Slipknot"){
        bandSrc.setAttribute("src", "../../assets/gifs/slipknot.gif");
        await sleep(1000);
        window.location.href = "slipknot.html";
        gifRodando = false;
    }
    if(bandName === "Deftones"){
        bandSrc.setAttribute("src", "../../assets/gifs/deftones.gif");
        await sleep(1000);
        window.location.href = "deftones.html";
        gifRodando = false;
    }
    if(bandName === "System of a Down"){
        bandSrc.setAttribute("src", "../../assets/gifs/system-of-a-down-wake-up.gif");
        await sleep(1000);
        window.location.href = "soad.html";
        gifRodando = false;
    }
    if(bandName === "Pearl Jam"){
        bandSrc.setAttribute("src", "../../assets/gifs/pearl-jam.gif");
        await sleep(1000);
        window.location.href = "pearl-jam.html";
        gifRodando = false;
    }
    if(bandName === "Megadeth"){
        bandSrc.setAttribute("src", "../../assets/gifs/megadeth.gif");
        await sleep(1000);
        window.location.href = "megadeth.html";
        gifRodando = false;
    }
    if(bandName === "Avenged Sevenfold"){
        bandSrc.setAttribute("src", "../../assets/gifs/a7x.gif");
        await sleep(1000);
        window.location.href = "a7x.html";
        gifRodando = false;
    }
}

for (let band of bandList){
    band.addEventListener("mouseenter", () => {
        if(band.textContent === "Limp Bizkit" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/fred-durst.jpg");
        }
        if(band.textContent === "Slipknot" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/slipknot_integrants.webp");
        }
        if(band.textContent === "Deftones" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/deftones-band.webp");
        }
        if(band.textContent === "System of a Down" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/soad-band.jpg");
        }
        if(band.textContent === "Pearl Jam" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/pearl-jam-band.jpeg");
        }
        if(band.textContent === "Megadeth" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/megadeth-band.jpg");
        }
        if(band.textContent === "Avenged Sevenfold" && gifRodando === false){
            bandSrc.setAttribute("src", "../../assets/images/a7x-band.jpg");
        }
    });
}

for (let link of bandLink){
    link.addEventListener("click", () =>{
        if(link.textContent === "Limp Bizkit"){
            changeBandImage("Limp Bizkit");
        }
        if(link.textContent === "Slipknot"){
            changeBandImage("Slipknot");
        }
        if(link.textContent === "Deftones"){
            changeBandImage("Deftones");
        }
        if(link.textContent === "System of a Down"){
            changeBandImage("System of a Down");
        }
        if(link.textContent === "Pearl Jam"){
            changeBandImage("Pearl Jam");
        }
        if(link.textContent === "Megadeth"){
            changeBandImage("Megadeth");
        }
        if(link.textContent === "Avenged Sevenfold"){
            changeBandImage("Avenged Sevenfold");
        }
    })
}

