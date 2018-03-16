var friendsArray = require ('../data/friends.js');
module.exports = function(app){
  app.get('/api/friends', function (req, res){
    res.json(friendsArray);
  });
  app.post('/api/friends', function(req, res){
    //need to loop through and log all of the friends data and push to user if they are a match
  });
}
