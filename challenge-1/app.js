/**
 * Write your challenge solution here
 */
let body = document.getElementById('body').classList;
let toggle = document.getElementById('toggleButton');
let status = document.getElementById('status');
let bulb = document.getElementById('bulb').classList;

toggle.addEventListener("click",() =>{
    if(toggle.innerText === "Turn On"){
        toggle.innerText = "Turn Off"
        status.innerText = "Status : On"
        bulb.remove("off")
        body.add("dark-mode")
    }else{
        toggle.innerText = "Turn On"
        status.innerText = "Status : Off"
        bulb.add("off")
        body.remove("dark-mode");
    }
})