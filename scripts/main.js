const myImage = document.querySelector("img");

function setUsername(){
    const myName = prompt("Type your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName;
}

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  const myDesc = descricao.getAttribute("id");
  if (mySrc === "images/fred-durst.jpg") {
    myImage.setAttribute("src", "images/slipknot_integrants.webp");
    if (myDesc === "descricao"){
        descricao.textContent = "This is a picture of the band Slipknot, an American heavy metal band formed in 1995 in Des Moines, Iowa. The band is known for its aggressive style and energetic live performances, as well as its distinctive image, which includes masks and uniforms worn by the members.";
    }
  } else {
    myImage.setAttribute("src", "images/fred-durst.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let descricao = document.querySelector("p");
let lista = document.querySelector("ul");
