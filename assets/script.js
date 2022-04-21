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
function onGot(historyItems) {
    for (item of historyItems) {
      console.log(item.url);
      console.log(new Date(item.lastVisitTime));
    }
  }
  
  // let searching = browser.history.search({text: ""});

  
  // searching.then(onGot);
// Function to update history and local storage
// Function to grab history from local storage
// Function to display current weather data fetch from openweather api
// Function to display a forecast card


function renderForecastCard() {
//this is for a one day card that appears in the todays weather container


}




function renderForecast() {
  //time stamps for the start date of the forecast and end date of the forecast
// create variables to target elements within the div
let dailyWeather = document.createElement("div");
let fiveDay = document.createElement("h4");

//Set attr to five day variable and add text content from api
dailyWeather.append(fiveDay)
// goes inside the forecast container
// create more divs for the days of the week
//craete for loop to go thru the days of the week 
//append data here
}




// Function to display five day forecast
// Function to render city and data
// Function to grab weather data location using geolocation
function getCoords(event) {
  event.preventDefault();
  let city = document.getElementById("cityName").value;
  console.log("city Name = ", city);
  fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ city + "&limit=5&appid=" + apiKey)
  .then(response => response.json())
  .then(data=> console.log(data[0]))
};

//Function to display daily weather within the container
function dailyWeather(event) {
  event.preventDefault();
  let daily = document.getElementById("js-daily").value;
  let lat = 33.44;
  let lon = -94.04;
  let city = location.name;
  console.log("today's weather = " + daily)
  // console.log(daily)
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + daily + "&appid=" + apiKey)
  .then(response => response.json())
  .then(data => console.log(city, data))
  
}


// Function to handle search forms
// Function to handle click history
// Function to displaySearchHistory
// Call back function to grab search history from local storage
// Two add event listners for the search history and search submission
//  searchDisplayBox.innerHTML = "";


// Make a request to the one call and show them how to make api key
// fetch coordinates
document.getElementById("searchBtn").addEventListener("click", getCoords)