var apiKey = require('./../.env').apiKey;
var Repo = require('./../js/repo_class.js').Repo;

exports.User = function(){
};

exports.User.prototype.getRepos = function(inputed_user, displayFunction){
	var repo_array = [];
	var temp = 1;
	var i = 0;
	var page_counter = 100;
  $.get('https://api.github.com/users/'+inputed_user+'/repos?access_token=' + apiKey+'&per_page='+page_counter).then(function(response){
    
    for(i = 0; i < response.length; i++){

    	temp = response[i];
      var tempRepo = new Repo(temp.name, temp.description, temp.html_url, temp.created_at);
    	repo_array.push(tempRepo);
      // delete to do manual garbage collection
      delete tempRepo;
    }
    console.log(repo_array);
    displayFunction(repo_array);
  
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

// // html_url
//     console.log(response);
//     for(i = 0; i < response.length; i++){
//       temp = response[i];
//       var tempRepo = new Repo(temp.name, temp.description, temp.html_url, temp.created_at);
//       // tempRepo.log();
//       displayFunction(tempRepo);
//       // delete to do manual garbage collection, save memory !
//       delete tempRepo;      
//     }