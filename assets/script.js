console.log("js file is hooked up")
//Global Variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=88a754472e95b886547fd49c550f9fe6";
          // This calls the API, just update the url to have your key's name.
          async function fetchKey() {
            const url = 'https://yorkieportunus.herokuapp.com/store/weather-dash'
            const response = await fetch(url);
            const key = await response.json();
            return key;
        }
        // Call this wherever you need your key.
        fetchKey().then((key) => {
            secretKey = key.apiKey;
            console.log(secretKey);
        });
      
    
console.log(apiUrl);


//Dom Element References 
// #search form. #search-input, #today, #forecast, #history

let searchForm = document.querySelector("#search-form");
let searchInput 
let todayBox
let forecastBox
let searchDisplayBox

// Add timezone for any 
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory() {
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=88a754472e95b886547fd49c550f9fe6`;
    fetch(apiUrl)
    .then(function(response){
    return response.json()})
    console.log(apiUrl)
}
    

// Function to display search history 
// Function to update history and local storage
// Function to grab history from local storage
// Function to display current weather data fetch from openweather api
// Function to display a forecast card
// Function to display five day forecast
// Function to render city and data
// Function to grab weather data location using geolocation
// Function to fetch coordinates
// Function to handle search forms
// Function to handle click history
// Function to displaySearchHistory
// Call back function to grab search history from local storage
// Two add event listners for the search history and search submission
//  searchDisplayBox.innerHTML = "";

// create a fetch request for api key
// function weatherData(weatherApiUrl) {
//     fetch(weatherApiUrl)
//     .then(function(response) {
//         response.json()
//     })
//     .then(function(data)
//     })
// }

// Make a request to the one call and show them how to make api key
// fetch coordinates

