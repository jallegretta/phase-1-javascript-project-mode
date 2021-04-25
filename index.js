//Grab the containers and assign to a var
const searchContainer = document.getElementById('search-container');
const weatherContainer = document.getElementById('weather-container');
const submitBtn = document.getElementById('submit')

async function getlocation(){ 
 const response = await fetch('https://meta-weather.vercel.app/api/location/search/?query=san+diego', {
    })
   const data = await response.json()
   let WID = data[0].woeid

    async function getWeather(){
      let weather = await fetch(`https://meta-weather.vercel.app/api/location/`+ WID, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors'
        })
            let cityData = await weather.json()
            console.log(cityData)    
        }
        getWeather()
}

    submitBtn.addEventListener('click', () => { 
        getlocation()
        //getWeather()
        let location = document.getElementById('city').value
        console.log(location)
    })





// function createForecast(){
//     console.log('forecast placeholder');
//     //use data from fetch to make a fiveDayForecast
// }

// function appendForecast(){
//     console.log('forecast placeholder');
//     weatherContainer.append('fiveDayForecast')
// }
/*
submitBtn.addEventListener("keyup", (e) => {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById(submitBtn).click();
      console.log(location)
    }
  });
*/