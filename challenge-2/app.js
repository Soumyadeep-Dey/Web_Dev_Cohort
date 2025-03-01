/**
 * Write your challenge solution here
 */
let mainHeading = document.getElementById('mainHeading');
let button = document.querySelectorAll('button');
// let red = document.getElementById('redButton').classList;
// let green = document.getElementById('greenButton').classList;
// let blue = document.getElementById('blueButton').classList;
// let purple = document.getElementById('purpleButton').classList;
// let reset = document.getElementById('resetButton').classList;

button.forEach((btn) => {
    btn.addEventListener('click',() => {
        switch(btn.innerHTML.toLowerCase()){
            case "red":
                mainHeading.style.color = "red";
                break;
            case "green":
                mainHeading.style.color = "green";
                break;
            case "blue":
                mainHeading.style.color = "blue";
                break;
            case "purple":
                mainHeading.style.color = "purple";
                break;
            default:
                mainHeading.style.color = "black";
                break;
        }
    })
});