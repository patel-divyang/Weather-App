const app = document.querySelector('.weather-app');
const bg = document.querySelector('.background-bg');
const form = document.getElementById('form');
const search = document.getElementById('search');
const btn = document.getElementById('submit');
const city = document.querySelector('.city-name');
const date = document.querySelector('.city-date');
const icon = document.querySelector('.forecast-icon');
const conditions = document.querySelector('.forecast-detail');
const temp = document.querySelector('.temp-value');
const feels = document.querySelector('.detail-temp');
const wind = document.querySelector('.detail-wind');
const prep = document.querySelector('.detail-prep');
const humidity = document.querySelector('.detail-humidity');
const wallpaper = document.querySelector('.wallpaper');


let cityInput = "Edmonton";

fetch(`https://api.weatherapi.com/v1/current.json?key=11b5dd75e69a4984b4813231220806&q=Edmonton`)
    .then(Response => Response.json())
    .then(data => {

        const direction = data.current.wind_dir;
        city.innerHTML = data.location.name;
        conditions.innerHTML = data.current.condition.text;
        temp.innerHTML = data.current.temp_c  + "&#176;";
        feels.innerHTML = data.current.feelslike_c  + "&#176;";
        wind.innerHTML = data.current.wind_kph  + " km/h " + direction;
        prep.innerHTML = data.current.precip_mm  + "mm";
        humidity.innerHTML = data.current.humidity  + " %";
        
                
        let logDate = data.location.localtime;
        let year = logDate.substring(0,4);
        let month = logDate.substring(5,7);
        let day = logDate.substring(9,11);
        date.innerHTML = `${year}/${month}/${day}`;
               

        if (month == 01 ) {
            month = "January";
        } else if (month == 02) {
            month = "February";
        } else if (month == 03) {
            month = "March";
        } else if (month == 04) {
            month = "April";
        } else if (month == 05) {
            month = "May";
        } else if (month == 06) {
            month = "June";
        } else if (month == 07) {
            month = "July";
        } else if (month == 08) {
            month = "August";
        } else if (month == 09) {
            month = "September";
        } else if (month == 10) {
            month = "October";
        } else if (month == 11) {
            month = "November";
        } else {
            month = "December";
        }

        date.innerHTML = `${year}, ${month} ${day}`; 

        
        let isDay = data.current.is_day;
        const code = data.current.condition.code;
        
        if (isDay == 1){
            timeOfDay = "day";
            app.classList.remove("text-white");
            app.classList.add("text-black");
        } else {
            timeOfDay = "night"
            app.classList.remove("text-black");
            app.classList.add("text-white");
        }

        if (code == 1000) {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/clear.jpg)`; 
            bg.style.backgroundSize = "cover";
        }
        else if (
            code == 1003 ||
            code == 1006 ||
            code == 1135 ||
            code == 1147 ||
            code == 1150
        ) {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/cloudy.jpg)`;
            bg.style.backgroundSize = "cover";
        }
        else if (
            code == 1066 ||
            code == 1069 ||
            code == 1072 ||
            code == 1114 ||
            code == 1117 ||
            code == 1210 ||
            code == 1213 ||
            code == 1216 ||
            code == 1219 ||
            code == 1222 ||
            code == 1225 ||
            code == 1237 ||
            code == 1252 ||
            code == 1258 ||
            code == 1261 ||
            code == 1264 ||
            code == 1204 ||
            code == 1207 ||
            code == 1249 
        ) {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/snowy.jpg)`;
            bg.style.backgroundSize = "cover";
        } else {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/rainy.jpg)`;
            bg.style.backgroundSize = "cover";
        }

        
        




    }) 

form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('Please type in a Valid City Name');
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "1";
    }
    e.preventDefault();
});


function fetchWeatherData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=11b5dd75e69a4984b4813231220806&q=${cityInput}`)
    .then(Response => Response.json())
    .then(data => {

        bg.style.opacity = "0";
        city.innerHTML = data.location.name;
        conditions.innerHTML = data.current.condition.text;
        temp.innerHTML = data.current.temp_c  + "&#176;";
        feels.innerHTML = data.current.feelslike_c  + "&#176;";
        wind.innerHTML = data.current.wind_kph  + " km/h";
        prep.innerHTML = data.current.precip_mm  + "mm";
        humidity.innerHTML = data.current.humidity  + " %";
        
        
        let logDate = data.location.localtime;
        let year = logDate.substring(0,4);
        let month = logDate.substring(5,7);
        let day = logDate.substring(8,10);
      
        
        if (month == 01 ) {
            month = "January";
        } else if (month == 02) {
            month = "February";
        } else if (month == 03) {
            month = "March";
        } else if (month == 04) {
            month = "April";
        } else if (month == 05) {
            month = "May";
        } else if (month == 06) {
            month = "June";
        } else if (month == 07) {
            month = "July";
        } else if (month == 08) {
            month = "August";
        } else if (month == 09) {
            month = "September";
        } else if (month == 10) {
            month = "October";
        } else if (month == 11) {
            month = "November";
        } else {
            month = "December";
        }

        date.innerHTML = `${year}, ${month} ${day}`;   

        let isDay = data.current.is_day;
        const code = data.current.condition.code;
        
        if (isDay == 1){
            timeOfDay = "day";
            app.classList.remove("text-white");
            app.classList.add("text-black");
        } else {
            timeOfDay = "night"
            app.classList.remove("text-black");
            app.classList.add("text-white");
        }


        if (code == 1000) {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/clear.jpg)`;
        }
        else if (
            code == 1003 ||
            code == 1006 ||
            code == 1135 ||
            code == 1147 ||
            code == 1150 
        ) {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/cloudy.jpg)`;
        }
        else if (
            code == 1066 ||
            code == 1069 ||
            code == 1072 ||
            code == 1114 ||
            code == 1117 ||
            code == 1210 ||
            code == 1213 ||
            code == 1216 ||
            code == 1219 ||
            code == 1222 ||
            code == 1225 ||
            code == 1237 ||
            code == 1252 ||
            code == 1258 ||
            code == 1261 ||
            code == 1264 ||
            code == 1204 ||
            code == 1207 ||
            code == 1249
        ) {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/snowy.jpg)`;
        } else {
            bg.style.backgroundImage = `url(./assets/img/${timeOfDay}/rainy.jpg)`;
        }

        bg.style.opacity = "1";

    }) 
    .catch(() => {
        alert('City not found, please try again');
        location.reload();
    });

}



