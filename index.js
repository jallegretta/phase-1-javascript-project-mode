/* // test fetch statmentgi
 fetch('https://meta-weather.vercel.app/api/location/search/?query=san', {
})
  .then(res => res.json())
  .then(console.log)
*/

//Grab the containers and assign to a var
const searchContainer = document.getElementById('search-container');
const weatherContainer = document.getElementById('weather-container');
//Grab the button , assign to a var and add event listener
const submitBtn = document.getElementById('#search-container > input[type=submit]')
submitBtn.addEventListener('click', callback)
//set location as value of searchboxbox
let location = document.getElementsByClassName('#city')



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
    return fetch( API, configObj)
        .then(response => response.json())
        .then(data => console.log(data));
            //get woeid and send to getWeather()
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

    } 


    function createForecast(){
        console.log('forecast placeholder');
    }

    function appendForecast(){
        console.log('forecast placeholder');

    }
/*
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');
});// DOM Content Loaded
*/

