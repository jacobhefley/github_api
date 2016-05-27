var apiKey = require('./../.env').apiKey;

exports.User = function(){
}

// exports.Weather.prototype.getWeather = function(city, displayFunction) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     displayFunction(city, response.main.humidity);
//   }).fail(function(error) {
//     $('.showWeather').text(error.responseJSON.message);
//   });
// }

exports.User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};