const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexButton = document.getElementById("btn-hex");
console.log(hexButton);
const hexColor = document.querySelector(".color-hex");

hexButton.addEventListener('click',function() {
    console.log("HexColours");
    let hexHash = "#";
    
    for(let i=0; i<6; i++) {
        let randomNumber = getRandomNumber();
        hexHash += hexColors[randomNumber];
        console.log(hexButton);
    }
    document.body.style.backgroundColor = hexHash;
    hexColor.textContent = hexHash;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hexColors.length);
}