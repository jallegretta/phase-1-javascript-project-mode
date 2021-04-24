/* // test fetch statment
 fetch('https://meta-weather.vercel.app/api/location/search/?query=san', {
})
  .then(res => res.json())
  .then(console.log)
*/

//Grab the containers and assign to a var
const searchContainer = document.getElementById('search-container');
const weatherContainer = document.getElementById('weather-container');
//Grab the button , assign to a var and add event listener
//const submitBtn = document.querySelector(('#search-container > button')
document.querySelector('#search-container > button').addEventListener('click', (e) => {
    e.preventDefault()
    let location = document.querySelector("#city").value
    console.log(location)
});

document.querySelector('#search-container > button').addEventListener("keyup", (e) => {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      e.preventDefault();
      // Trigger the button element with a click
      document.getElementById(submitBtn).click();
    }
  });

//Fetch functions
//Pass the city from the form to the fetch and get the woeid for the city
//Then pass the woeid to the second fetch to get the forecast for the woeid city
//Configure Fetch params
const configObj = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
};

//Pull forecast from API based on city
let API = 'https://meta-weather.vercel.app/api/location/search/?query='+location
function getlocation(){ 
 fetch( API, configObj)
    .then(response => response.json())
    .then(data => console.log(data[0].woeid))//pull the woeid from there to pass to next fetch
    
}  

function getWeather(){ 
return fetch('https://www.metaweather.com//api/location/'+woeid,
{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
})
    .then(response => response.json())
    .then(data => console.log(data));
//return the forecastand pass to the functions below
} 

function createForecast(){
    console.log('forecast placeholder');
    //use data from fetch to make a fiveDayForecast
}

function appendForecast(){
    console.log('forecast placeholder');
    weatherContainer.append('fiveDayForecast')
}
/*
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');
});// DOM Content Loaded
*/

