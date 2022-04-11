console.log("js file is hooked up")
//Global Variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "88a754472e95b886547fd49c550f9fe6";
const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=88a754472e95b886547fd49c550f9fe6";
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

// Fuinction to display search history 
// Function to displaySearchHistory
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

