
function addDarkMode(){ //TODO: Break this into single functions
const darkModeContainer = document.getElementById('darkMode-container')
const darkModeCheck = document.createElement("INPUT");
darkModeCheck.setAttribute("type", "checkbox")
darkModeCheck.setAttribute("id", "checkbox")
let toggler = document.createElement('p')
let togglerText = document.createTextNode("Toggle Darkmode");
toggler.append(togglerText)
darkModeContainer.append(darkModeCheck)
darkModeContainer.append(toggler)
darkModeCheck.addEventListener('click', () => {  
darkModeCheck.addEventListener('change', function() {
        if (this.checked) {

            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            searchContainer.style.backgroundImage = "none";
            console.log("Checkbox is checked..");
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            searchContainer.style.backgroundImage = 'url(garden.jpg)';
        }
        });
})
}
addDarkMode()

const searchContainer = document.getElementById('search-container');
const weatherContainer = document.getElementById('weather-container');
const submitBtn = document.getElementById('submit')


submitBtn.addEventListener('click', () => { 
    getlocation()
    let cityValue = document.getElementById('city').value
    console.log('Fetching woeid for ' + cityValue)
})

    async function getlocation(){                                                            // + cityValue
        const response = await fetch('https://meta-weather.vercel.app/api/location/search/?query=new+york', {
    })
   const data = await response.json()
   let WID = data[0].woeid
   console.log('The woeid for that city is: ' + WID)
   console.log('Fetching the weather for: ' + WID)

    async function getWeather(){                                               // + WID
      const weatherRes = await fetch(`https://meta-weather.vercel.app/api/location/2487889`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            Body : 'consolidated_weather',
            mode: 'no-cors'
        })
        const weatherData = await weatherRes.consolidated_weather
        let forecast = data[0].consolidated_weather
        console.log(forecast)
        }
        getWeather()

    function appendForecast(){
        console.log('forecast placeholder');
        let fiveDayForecast = 'Your 5 Day forcast:'
        weatherContainer.append('fiveDayForecast')
    }
    appendForecast()
}



  
//TODO: Like and dislike buttons 
  
// const likeBtn = document.getElementById('like-button')
// const dislikeBtn = document.getElementById('dislike-button')
// const likeCount = document.createElement('p')
// const dislikeCount = document.createElement('p')

// function appendLikeStuff(){
// searchContainer.append(likeCount)
// searchContainer.append(dislikeCount)
// }
// appendLikeStuff()
// likeBtn.addEventListener("click", function() {
// let numberOfLikes = numberOfLikes + 1;
// likeCount.append(numberOfLikes)
// });

// dislikeBtn.addEventListener("click", function() {
// let numberOfHates = numberOfHates + 1;
// dislikeCount.append(numberOfHates)
// });
