/* // test fetch statment
 fetch('https://meta-weather.vercel.app/api/location/search/?query=san', {
})
  .then(res => res.json())
  .then(console.log)
*/

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

    function containers(){
        //grab the divs 
        const searchContainer = document.getElementById('search-container');
        const weatherContainer = document.getElementById('weather-container');
    }

    //Create the search box and button
    function createSearchBox(){
        const searchBox = document.createElement("INPUT").autofocus;
        searchBox.setAttribute("type", "text");
        
        const submitBtn = document.createElement("BUTTON");
        submitBtn.innerText = 'Submit'
        let location = document.getElementById('searchBox').value;
        //submitBtn.addEventListner('click', getlocation)  
    }

    function createForecast(){
        console.log('forecast placeholder');
    }

    function appendForecast(){
        console.log('forecast placeholder');

    }
    function appendToSeachContainer(){
        searchContainer.append(searchBox)
        searchContainer.append(submitBtn)
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

});// DOM Content Loaded


