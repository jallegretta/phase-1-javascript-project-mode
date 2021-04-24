/* // test fetch statmentgi
 fetch('https://meta-weather.vercel.app/api/location/search/?query=san', {
})
  .then(res => res.json())
  .then(console.log)
*/

const searchContainer;
const weatherContainer;


document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

    function grabContainers(){
        //grab the divs 
        searchContainer = document.getElementById('search-container');
        weatherContainer = document.getElementById('weather-container');
    }
    
    //Create the search box and button
    function createSearchBox(){
        const searchBox = document.createElement('input').autofocus;
        searchBox.setAttribute("type", "text");
        
        const submitBtn = document.createElement('button');
        submitBtn.innerText = 'Submit'
        let location = document.getElementById('searchBox').value;  
    }

    function createForecast(){
        console.log('forecast placeholder');
    }

    function appendForecast(){
        console.log('forecast placeholder');

    }
    function appendToSeachContainer(){
        searchContainer.append(searchBox);
        searchContainer.append(submitBtn);
    }
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
    grabContainers()
    createSearchBox()
    appendToSeachContainer()
});// DOM Content Loaded


