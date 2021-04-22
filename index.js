 // Get value from zip code form
 // look up location id (woeid) in API
 //Use location ID to search for forecast info
 //Display forcast info on the page
 //Format and style
 //Begin stretch goals


 /*
 fetch('https://meta-weather.vercel.app/api/location/search/?query=san', {
})
  .then(res => res.json())
  .then(console.log)
*/

 //add event listner to form submit 
 let location = document.getElementById('location').value

const configObj = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
  };

  //Pull 5 day forecast from API based on zip
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





