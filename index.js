 // Get value from zip code form
 // look up location id (woeid) in API
 //Use location ID to search for forecast info
 //Display forcast info on the page
 //Format and style
 //Begin stretch goals
 



 //add event listner to form submit 
 let zip = document.getElementById('zipCode').value

const configObj = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
  };

  //Pull 5 day forecast from API based on zip
 let API = 'https://www.metaweather.com/api/location/search/?query='+zip
  function getlocation(){ 
   return fetch( API, configObj)
     .then(response => response.json())
     .then(data => console.log(data));
          //get woeid and send to getWeather()
 }  
/* run this in console to test getLocation()
fetch( 'https://www.metaweather.com/api/location/search/?query=11755',
   {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
  })
*/

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





