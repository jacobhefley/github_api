var apiKey = require('./../.env').apiKey;

exports.User = function(){
};

// exports.Weather.prototype.getWeather = function(city, displayFunction) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     displayFunction(city, response.main.humidity);
//   }).fail(function(error) {
//     $('.showWeather').text(error.responseJSON.message);
//   });
// }

exports.User.prototype.getRepos = function(inputed_user, displayFunction){
	var name_array = [];
	var description_array = [];
	var temp = 1;
	var i = 0;
	var page_counter = 100;
  $.get('https://api.github.com/users/'+inputed_user+'/repos?access_token=' + apiKey+'&per_page='+page_counter).then(function(response){
    
    for(i = 0; i < response.length; i++){

    	temp = response[i];
    	console.log(temp.name);
    	name_array.push(temp.name);
    	description_array.push(temp.description);
    }
    checker = response.length;
    page_counter++;
    console.log(response);
    displayFunction(name_array, description_array);
  
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


  // $.get('https://api.github.com/users/'+inputed_user+'?access_token=' + apiKey).then(function(response){
  //   console.log(response);
  //   var obj = JSON.stringify(response);
  //   console.log(obj);
  // });

