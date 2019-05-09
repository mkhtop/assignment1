var $;

$(document).ready(function() {
    var sotonWeatherType,
        winchWeatherType,
        stanmoreWeatherType;
    var sotonApi = "https://api.openweathermap.org/data/2.5/weather?lat=50.908004&lon=-1.405673&APPID=9fae6f1794cac669146df18a250ae45d",
        winchApi = "https://api.openweathermap.org/data/2.5/weather?lat=51.066963&lon=-1.310457&APPID=9fae6f1794cac669146df18a250ae45d",
        stanmoreApi = "https://api.openweathermap.org/data/2.5/weather?lat=51.051789&lon=-1.334090&APPID=9fae6f1794cac669146df18a250ae45d";
        
    $.getJSON(winchApi, function(data) {
        console.log(data);
    })    

    $.getJSON(sotonApi, function(data) {
        sotonWeatherType = data.weather[0].main;
        var sotonW = document.getElementById("sotonWeather");
        sotonW.innerHTML = sotonWeatherType;
        if (sotonWeatherType === "Rain"){
            document.getElementById("soton-w-icon").src="/img/rain-icon.png";
        }
        if (sotonWeatherType === "Clear"){
            document.getElementById("soton-w-icon").src="/img/clear-icon.png";
        }
        if (sotonWeatherType === "Clouds"){
            document.getElementById("soton-w-icon").src="/img/cloudy-icon.png";
        }
        if (sotonWeatherType === "Drizzle"){
            document.getElementById("soton-w-icon").src="/img/drizzle-icon.png";
        }
        if (sotonWeatherType === "Thunderstorm"){
            document.getElementById("soton-w-icon").src="/img/thunder-icon.png";
        }
        if (sotonWeatherType === "Snow"){
            document.getElementById("soton-w-icon").src="/img/snow-icon.png";
        }
    })

    $.getJSON(winchApi, function(data) {
        winchWeatherType = "Drizzle"//data.weather[0].main;
        var winchW = document.getElementById("winchWeather");
        winchW.innerHTML = winchWeatherType;
        if (winchWeatherType === "Rain"){
            document.getElementById("winch-w-icon").src="/img/rain-icon.png";
        }
        if (winchWeatherType === "Clear"){
            document.getElementById("winch-w-icon").src="/img/clear-icon.png";
        }
        if (winchWeatherType === "Clouds"){
            document.getElementById("winch-w-icon").src="/img/cloudy-icon.png";
        }
        if (winchWeatherType === "Drizzle"){
            document.getElementById("winch-w-icon").src="/img/drizzle-icon.png";
        }
        if (winchWeatherType === "Thunderstorm"){
            document.getElementById("winch-w-icon").src="/img/thunder-icon.png";
        }
        if (winchWeatherType === "Snow"){
            document.getElementById("winch-w-icon").src="/img/snow-icon.png";
        }
    })

    $.getJSON(stanmoreApi, function(data) {
        stanmoreWeatherType = data.weather[0].main;
        var stanmoreW = document.getElementById("stanmoreWeather");
        stanmoreW.innerHTML = stanmoreWeatherType;
        if (stanmoreWeatherType === "Rain"){
            document.getElementById("stanmore-w-icon").src="/img/rain-icon.png";
        }
        if (stanmoreWeatherType === "Clear"){
            document.getElementById("stanmore-w-icon").src="/img/clear-icon.png";
        }
        if (stanmoreWeatherType === "Clouds"){
            document.getElementById("stanmore-w-icon").src="/img/cloudy-icon.png";
        }
        if (stanmoreWeatherType === "Drizzle"){
            document.getElementById("stanmore-w-icon").src="/img/drizzle-icon.png";
        }
        if (stanmoreWeatherType === "Thunderstorm"){
            document.getElementById("stanmore-w-icon").src="/img/thunder-icon.png";
        }
        if (stanmoreWeatherType === "Snow"){
            document.getElementById("stanmore-w-icon").src="/img/snow-icon.png";
        }
    })






});
