console.log('hellooooooo');

var weatherData = 'http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=3d2363042523c46eb86f30163a636f2c';

var kelvin = 0;
var celcius = 0;
var fahrenheit = 0;

$.getJSON(weatherData, function(result) {
    // console.log(result.main.temp);
    kelvin = result.main.temp;
    console.log(kelvin);

    getCelcius(kelvin);
    getFah(kelvin);

});

function getCelcius(kel) {
    celcius = (kel - 273.15).toFixed(1);
    //celcius = Math.round(celcius);
    console.log(celcius);

    $('#celcius').html(celcius + "°C");
}

function getFah(kel) {
    fahrenheit = (kel * (9/5) - 459.67).toFixed(1);
    console.log(fahrenheit);

    $('#fahrenheit').html(fahrenheit);
}

