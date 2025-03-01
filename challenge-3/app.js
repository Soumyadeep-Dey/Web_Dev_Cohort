/**
 * Write your challenge solution here
 */
let nameDisplay = document.getElementById('nameDisplay');
let jobDisplay = document.getElementById('jobDisplay');
let ageDisplay = document.getElementById('ageDisplay');
let bioDisplay = document.getElementById('bioDisplay');

let nameInput = document.getElementById('nameInput');
let jobInput = document.getElementById('jobInput');
let ageInput = document.getElementById('ageInput');
let bioInput = document.getElementById('bioInput');

nameInput.addEventListener("input", function() {
    nameDisplay.innerText = this.value || "Not provided";
})

jobInput.addEventListener("input", function(){
    jobDisplay.innerText=this.value || "Not provided"
})

ageInput.addEventListener("input", function(){
    if(Number(ageInput.value) >= 18 && Number(ageInput.value) <= 120){
        ageDisplay.innerText = this.value
    }else{
        ageDisplay.innerText = "Not provided"
    }
})

bioInput.addEventListener("input", function(){
    bioDisplay.innerText=this.value || "Not provided"
})
