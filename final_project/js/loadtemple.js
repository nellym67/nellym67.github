window.addEventListener('load',()=>{
//const serverName= "http://127.0.0.1:5500/ice/temples/"
const requestURL= " js/temples2.json"
fetch(requestURL)
.then((response)=>{
    return response.json();
})
.then((jsonObject)=>{
    console.log(jsonObject);
    Object.entries(jsonObject).forEach(([key, temple])=>{
        //if(temple.state=="ID"){
            buildTempleCard(temple);
        // }

    });

});
});

function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<img src='${temple.imageurl}' alt="${temple.name}">
    <h2>${temple.name}</h2>
    <p class="margin "><b><u>Address:</u></b> </p> <p class="botton_margin margin" >${temple.address1} ${temple.city} ${temple.state} ${temple.zip}</p>
    <p class="margin"><b><u>Email:</u></b></p> <p class="botton_margin margin"> ${temple.email}</p>
    <p class="margin"><b><u>Services:</u></b></p>`;
     for(let i=0; i<temple.services.length; i++){
      card.innerHTML += `<p class="margin">${temple.services[i]} </p>`
    } 
    card.innerHTML += `<p class="margin top_margin"><u><b>Closures:</u></b></p>`
     for(let i=0; i<temple.closures.length; i++){
        card.innerHTML += `<p class="margin">${temple.closures[i]}</p>`
     }
    
    document.querySelector("#temples").appendChild(card);
    
}