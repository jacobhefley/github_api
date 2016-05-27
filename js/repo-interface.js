var User = require('./../js/github_user.js').User;

var displayRepo = function(repos) {
	$("#list").empty();
	var repo;
	for( var i = 0; i < repos.length; i++){
		repo = repos[i];
		if(typeof repo.description === 'string'){
			if(repo.description.length>1){
  			$("#list").append("<tr><td><a href="+repo.url+">"+repo.name+"</a></td><td>"+repo.description+"</td></tr>");				
			}
			else{
				$("#list").append("<tr><td><a href="+repo.url+">"+repo.name+"</a></td><td></td></tr>");
			}
		}
		else{
			$("#list").append("<tr><td><a href="+repo.url+">"+repo.name+"</a></td><td></td></tr>");
		}
	}
};

// var displayRepo = function(repo) {
// 	var temp = repo.description;
// 		// $("#list").empty();
// 		if(typeof temp === 'string'){
// 			if(temp.length>1){
//   			$("#list").append("<tr><td><a href="+repo.url+">"+repo.name+"</a></td><td>"+repo.description+"</td></tr>");				
// 			}
// 			else{
// 				$("#list").append("<tr><td><a href="+repo.url+">"+repo.name+"</a></td><td></td></tr>");
// 			}
// 		}
// 		else{
// 			$("#list").append("<tr><td><a href="+repo.url+">"+repo.name+"</a></td><td></td></tr>");
// 		}
// 	};

$(document).ready(function() {
	var currentUser = new User();
	$('#search').click(function() {
		var inputed_user = $('#inputed_user').val();
		currentUser.getRepos(inputed_user, displayRepo);
		return 0;
  });
});
