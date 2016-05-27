var User = require('./../js/github_user.js').User;

// var displayHumidity = function(humidityData, city) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// }

// $(document).ready(function() {
//   var currentWeatherObject = new Weather();
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     currentWeatherObject.getWeather(city, displayHumidity);

//   });
// });

$(document).ready(function() {
	var currentUser = new User();
	$('#search').click(function() {
		var inputed_user = $('#inputed_user').val();
		currentUser.getRepos(inputed_user);
  });
});