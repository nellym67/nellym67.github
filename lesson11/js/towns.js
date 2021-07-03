const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    const towns = jsonObject['towns'];
    console.table(jsonObject);
    let filter_town = jsonObject.towns.filter(town => {
        return town.name == "Fish Haven" || town.name=="Preston" || town.name=="Soda Springs";
        

    });
    console.log(filter_town);
    
    for(let i=0; 1< filter_town.length; i++){
        let body = document.createElement('section');
        body.classList.add("town");
        body.innerHTML=`
        <div class="data">
        <h2>${filter_town[i].name}<h2>
        <h3>${filter_town[i].motto}</h3>
        <p>Year Founded: ${filter_town[i].yearFounded}</p>
        <p>Population: ${filter_town[i].currentPopulation}</p>
        <p>Annual Rain Fall: ${filter_town[i].averageRainfall}</p>
        </div>
        `;
       
        let h3 = document.createElement("h3");
       
        let image = document.createElement("img");

        h3.setAttribute("class","json_h3");
        body.setAttribute("class","json_section");

        image.setAttribute('src', "images/" + filter_town[i].photo)
        

        document.querySelector('div#index_body').appendChild(body);
        body.appendChild(image);

    }
    
});

