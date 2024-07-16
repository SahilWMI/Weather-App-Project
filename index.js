const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "22dad77cd3bb260aa2a5773bb02b0e1a";

weatherForm.addEventListener('subit',event => {

    event.preventDefault();

    const city = cityInput.ariaValueMax;

    if(city){

    }else{
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){

}
function displayWeatherInfo(data){

}
function getWeatherEmoji(weatherId){

}
function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent =  message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent= "";
    card.computedStyleMap.display ="flex";
    card.appendChild(errorDisplay);

}
