const colorsPrimary = ["RED","YELLOW","BLUE"];
const buttonPrimary = document.getElementById("btn-primary");
const colorPrimary = document.querySelector(".color-primary");

buttonPrimary.addEventListener('click',function() {
    // console.log("colors")
    let randomNumberPrimary = getRandomNumberPrimary();
    document.getElementById("primary").style.backgroundColor = colorsPrimary[randomNumberPrimary];
    colorPrimary.textContent = colorsPrimary[randomNumberPrimary];
});

const colorsSecondary = ["ORANGE","GREEN","PURPLE"];
const buttonSecondary = document.getElementById("btn-secondary");
const colorSecondary = document.querySelector(".color-secondary");

buttonSecondary.addEventListener('click',function() {
    // console.log("colors")
    let randomNumberSecondary = getRandomNumberSecondary();
    document.getElementById("secondary").style.backgroundColor = colorsSecondary[randomNumberSecondary];
    colorSecondary.textContent = colorsSecondary[randomNumberSecondary];
});

const colorsTertiary = ["MAGENTA","VIOLET","TEAL"];
const buttonTertiary = document.getElementById("btn-tertiary");
const colorTertiary = document.querySelector(".color-tertiary");

buttonTertiary.addEventListener('click',function() {
    console.log("colors")
    let randomNumberTertiary = getRandomNumberTertiary();
    document.getElementById("tertiary").style.backgroundColor = colorsTertiary[randomNumberTertiary];
    colorTertiary.textContent = colorsTertiary[randomNumberTertiary];
});

const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexButton = document.getElementById("btn-hex");
// console.log(hexButton);
const hexColor = document.querySelector(".color-hex");

hexButton.addEventListener('click',function() {
    console.log("HexColours");
    let hexHash = "#";
    
    for(let i=0; i<6; i++) {
        let randomNumber = getRandomNumber();
        hexHash += hexColors[randomNumber];
        console.log(hexButton);
    }
    document.getElementById("hex").style.backgroundColor = hexHash;
    hexColor.textContent = hexHash;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hexColors.length);
}

function getRandomNumberPrimary () {
    return Math.floor(Math.random() * colorsPrimary.length);
}

function getRandomNumberSecondary () {
    return Math.floor(Math.random() * colorsSecondary.length);
}

function getRandomNumberTertiary () {
    return Math.floor(Math.random() * colorsTertiary.length);
}

// Hex
