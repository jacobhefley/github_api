var User = require('./../js/github_user.js').User;

var GitHubUser = require('./../js/github_user_class.js').GitHubUser;

//  function display(repos){
//     for( var i = 0; i < repos.length; i++){
//     	var para = document.createElement("p");
// 			var node = document.createTextNode(repos[i]);
// 			para.appendChild(node);

// 			var element = document.getElementById("div1");
// 			element.appendChild(para);
//     }
// }
// var mytext=document.createTextNode(what)
// document.getElementById("mydiv").appendChild(mytext)


//     var node = document.createElement("LI");

//     var textnode = document.createTextNode("Water");

//     document.getElementById("list").appendChild(i);
// }

// }
var displayRepo = function(name, description) {
	var temp;
	for( var i = 0; i < name.length; i++){
		temp = description[i];
		if(typeof temp === 'string'){
			if(temp.length>1){
  			$("#list").append("<tr><td>"+name[i]+"</td><td>"+temp+"</td></tr>");				
			}
			else{
				$("#list").append("<tr><td>"+name[i]+"</td><td></td></tr>");
			}
		}
		else{
			$("#list").append("<tr><td>"+name[i]+"</td><td></td></tr>");
		}
	}
};
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
		currentUser.getRepos(inputed_user, displayRepo);
  });
});