/*jshint esversion: 6 */
var apiKey = require('./../.env').apiKey;

// var r = 	function(){
// 		var temp_array = [];
// 	$.get('https://api.github.com/users/' + this.user + '/repos?access_token=' + apiKey).then(function(response){
  
//     for( var i = 0; i < 30; i++){
//     	var temp = response[i];
//     	console.log(temp.full_name);
//     	var temp2 = temp.full_name;
//     	temp_array.push(temp2);
//     }
//   });
//   return temp_array;
// }


exports.GitHubUser = class GitHubUser {
  constructor(inputed_name) {
    this.user = inputed_name;
    // this.temp = "";
  	
  	var temp_repo = function(inputed_name){
		var temp_array = [];
	$.get('https://api.github.com/users/' + inputed_name + '/repos?access_token=' + apiKey).then(function(response){
  
    for( var i = 0; i < 30; i++){
    	var temp = response[i];
    	console.log(temp.full_name);
    	var temp2 = temp.full_name;
    	temp_array.push(temp2);
    }
  });
  return temp_array;
};
	this.repo_names = temp_repo;
  }
  // getTime(){
  //   return moment().format('LTS');
  //   }
  // getDate(){
  //   return moment().format('LL');
  // }
  // setAlarm(time){
  //   this.alarm = time;
  // }
  // ring(){
  //   var output = false;
  //   if(this.alarm===moment().format('LTS')){
  //       output = true;
  //   }
  //   else{
  //     output = false;
  //   }
  //   return output;
  // }
  log(){
    console.log(this);
  }
};