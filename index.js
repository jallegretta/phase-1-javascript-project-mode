//Grab the containers and assign to a var
const searchContainer = document.getElementById('search-container');
const weatherContainer = document.getElementById('weather-container');

async function getlocation(){ 
   fetch('https://meta-weather.vercel.app/api/location/search/?query=san+diego', {
})
  .then(response => response.json())
  .then(data => console.log(data[0].woeid));


   async function getWeather(){
       fetch('https://meta-weather.vercel.app/api/location/2487889', {
           method: 'GET',
           headers: { 'Content-Type': 'application/json' },
           mode: 'no-cors'
       })
       .then(response => response.json())
        .then(data => console.log(data))
        .then(citydata = await response.json());
        console.log(citydata);
       }

//Grab the button , assign to a var and add event listener
const submitBtn = document.querySelector('#search-container > form > button');
const searchBox = document.querySelector('#city')

submitBtn.addEventListener('click', (e) => { 
    e.preventDefault()
    let location = document.querySelector("#city").value
    document.getElementById(submitBtn).click();
    console.log(location)
    
});

submitBtn.addEventListener("keyup", (e) => {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById(submitBtn).click();
      console.log(location)
    }
  });

//Fetch functions
//Pass the city from the form to the fetch and get the woeid for the city
//Then pass the woeid to the second fetch to get the forecast for the woeid city
//Configure Fetch params

//Pull forecast from API based on city



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

/* // test fetch statment
 fetch('https://meta-weather.vercel.app/api/location/search/?query=san', {
})
  .then(res => res.json())
  .then(console.log)
*/
}