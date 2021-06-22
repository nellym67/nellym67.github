
let temperature = parseInt(document.getElementById("temperature").innerText);
let wind_speed = parseInt(document.getElementById("wind_speed").innerText);
let math_pow=Math.pow(wind_speed,0.16);
let wind_chill = 35.74+(0.6215*temperature)-35.75*math_pow+(0.4275*(temperature*math_pow));



if (temperature<=50 && wind_speed < 3){
    document.getElementById("wind").innerHTML = "N/A"
}

else{
document.getElementById("wind").innerHTML = wind_chill.toFixed() + " \xB0F";
}