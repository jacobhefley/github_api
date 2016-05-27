var User = require('./../js/github_user.js').User;

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
$(document).ready(function() {
	var currentUser = new User();
	$('#search').click(function() {
		var inputed_user = $('#inputed_user').val();
		currentUser.getRepos(inputed_user, displayRepo);
  });
});