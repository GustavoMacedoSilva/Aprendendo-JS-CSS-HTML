const myImage = document.querySelector("img");

function setUsername(){
    const myName = prompt("Type your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  const myDesc = descricao.getAttribute("id");
  if (mySrc === "images/fred-durst.jpg") {
    myImage.setAttribute("src", "images/slipknot_integrants.webp");
    if (myDesc === "descricao"){
        descricao.textContent = "Slipknot is a Metal band, they are known for their masks and red jumpsuits.";
    }
  } else {
    myImage.setAttribute("src", "images/fred-durst.jpg");
    if (myDesc === "descricao"){
        descricao.textContent = "Limp Bizkit is a Nu Metal band, some of their music mixed Metal with Hip-Hop.";
    }
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let descricao = document.querySelector("p");
let lista = document.querySelector("ul");
