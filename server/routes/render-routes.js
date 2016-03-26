var App = require("../../build/app")

module.exports = function(app){
  console.log("qqqqqqqqqqkkk");
  app.get("/", function(req, res, next){
    console.log('sssssssss', App);
    App(req, res);
  })

}
