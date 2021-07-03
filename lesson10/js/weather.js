const requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6fb64bcfd53c37c4e4020c47054f567f&units=imperial"
fetch(requestURL)
.then((response) => {
    return response.json()
})
.then((fiveDayData) => {
    console.table(fiveDayData)

    // grabbing the list
    let fiveDayList = fiveDayData.list

    // filter the list 
    let filteredList = fiveDayList.filter(day => day.dt_txt.includes("18:00:00"))

    // create each days forecast
    // loop
    for (let i = 0; i < filteredList.length; i++) {
        let curDay = filteredList[i]

        let name = document.createElement("h3");
        let temp = document.createElement("p");
        let icon = document.createElement("img");
       

        // get the whole date time string
        let dateTimeString = curDay.dt_txt
        // break it into date and time 
        let dateTimeParts = dateTimeString.split(" ")
        // grab just the date
        let dateStringRaw = dateTimeParts[0]
        // break the date into parts [year, month, day]
        let dateStringParts = dateStringRaw.split('-')
        // Create a date object with correct format new Date(year, monthIndex, day)
        let date = new Date(dateStringParts[0], dateStringParts[1] - 1, dateStringParts[2])
        console.log(date)
        let dateNum = date.getDay()

        switch (dateNum) {
            case 0:
                name.innerHTML = "Sunday"
                break;
            case 1:
                name.innerHTML = "Monday"
                break;
            case 2:
                name.innerHTML = "Tuesday"
                break;
            case 3:
                name.innerHTML = "Wednesday"
                break;
            case 4:
                name.innerHTML = "Thursday"
                break;
            case 5:
                name.innerHTML = "Friday"
                break;
            case 6:
                name.innerHTML = "Saturday"
                break;
        }

        
        // set the icon
        let iconId = curDay.weather[0].icon
        icon.src = `http://openweathermap.org/img/wn/${iconId}.png`

        // set the temp
        let main = curDay.main;
        temp.innerHTML = Math.round(main.temp_max) + " °F";


        // append the children
        let containerId = 'day' + (i + 1)
        let container = document.getElementById(containerId)
        container.appendChild(name)
        container.appendChild(icon)
        container.appendChild(temp)
        
    }


})
console.log("hello")
const weatherURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6fb64bcfd53c37c4e4020c47054f567f&units=imperial";
fetch(weatherURL)
.then((response) => {
    return response.json()
})
.then((weathersummary) => {
    console.log(weathersummary);
    document.getElementById("currently").innerHTML=weathersummary.weather[0].main;
    document.getElementById("temperature").innerHTML=weathersummary.main.temp;
    document.getElementById("humidity").innerHTML = weathersummary.main.humidity;
    document.getElementById("wind_speed").innerHTML= weathersummary.wind.speed;
});