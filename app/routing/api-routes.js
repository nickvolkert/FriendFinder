var friendsArray = require ('../data/friends.js');
module.exports = function(app){
  app.get('/api/friends', function (req, res){
    res.json(friendsArray);
  });
  app.post('/api/friends', function(req, res){
    for(var i = 0; i < friendsArray.length; i++){
      console.log(friendsArray[i].name);
    }
  });
}
