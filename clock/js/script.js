var secHand = document.querySelector("#second");
var minHand = document.querySelector("#minute");
var hrHand = document.querySelector("#hour");



setInterval(setDate, 1000);

function setDate() {
    var currentTime = new Date();
    var currentSec = currentTime.getSeconds();
    var currentMin = currentTime.getMinutes();
    var currentHour = currentTime.getHours();
    
    var sec2deg = ((currentSec/60) * 360) + 90;
    var min2deg = ((currentMin/60) * 360) + 90;
    var hr2deg = ((currentHour/60) * 360) + 90;
    
    
    secHand.style.transform = `rotate(${sec2deg}deg)`;
    minHand.style.transform = `rotate(${min2deg}deg)`;
    hrHand.style.transform = `rotate(${hr2deg}deg)`;
    
}

