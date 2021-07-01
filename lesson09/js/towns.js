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
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let image = document.createElement("img");

        h3.setAttribute("class","json_h3");
        body.setAttribute("class","json_section");
        p1.setAttribute("class","data");
        p2.setAttribute("class","data");
        p3.setAttribute("class","data");
        h2.textContent= filter_town[i].name;
        h3.textContent=filter_town[i].motto;
        p1.textContent="Year Founded: " + filter_town[i].yearFounded;
        p2.textContent="Population: " + filter_town[i].currentPopulation;
        p3.textContent="Annual Rain Fall: " + filter_town[i].averageRainfall;
        image.setAttribute('src', "images/" + filter_town[i].photo);
        
        document.querySelector('div#body').appendChild(body);

        body.appendChild(h2);
        body.appendChild(h3);
        body.appendChild(p1);
        body.appendChild(p2);
        body.appendChild(p3);
        body.appendChild(image);

    }
    
});

