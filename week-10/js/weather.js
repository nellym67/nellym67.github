const requestURL= "https://api.openweathermap.org/data/2.5/weather?zip=83440&appid=6fb64bcfd53c37c4e4020c47054f567f"
fetch(requestURL)
.then(function (response){
})
.then(function(jsonObject){
    const weather=jsonObject;
    console.table(jsonObject);
    let card   =document.createElement('section');
    let h2 = document.createElement("h2");

    h2.textContent=weather.name;
    card.appendChild(h2);
document.querySelector('.cards').appendChild(card)
})










