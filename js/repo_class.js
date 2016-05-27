/*jshint esversion: 6 */
exports.Repo = class Repo {
  constructor(name, description, url, created) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.created = created;
  }
  log(){
    console.log(this);
  }
};
