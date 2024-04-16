//this is a comment

let body=document.querySelector ("body");
function checkWeather () {
    //let temperature = prompt ("what is the outside temperature?");
    //let temperature = 10;
    let temp = document. querySelector ("temperature");
    let temperature = temp.ariaValueMax;
    if (temperature >= 10 && temperature < 20) {
        console.log ("it feels cold");
        body.style.backgroundColour = "lightblue";
    } else if (temperature >= 20 && temperature <30) {
        
    }
}
