/*jshint esversion: 6 */
exports.GitHubUser = class GitHubUser {
  constructor() {
    this.login = null;
    this.repos = [];
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