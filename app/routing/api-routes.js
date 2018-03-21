var friendsArray = require ('../data/friends.js');
module.exports = function(app){
  app.get('/api/friends', function (req, res){
    res.json(friendsArray);
  });

  app.post('/api/friends', function(req, res){
    var bestFriend = {
      name: '',
      photo: '',
      friendDiff: 1000
    }
    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;
    console.log(userScores);
    var totalDiff = 0;

    for(var i = 0; i < friendsArray.length; i++){
        console.log(friendsArray[i].name);
        totalDiff += Math.abs(parseInt(userScores[i]) - parseInt(friendsArray.scores[i]));
        if (totalDiff <= bestFriend.friendDif){
          bestFriend.name = friendsArray[i].name;
          bestFriend.photo = friendsArray[i].photo;
          bestFriend.friendDiff = friendsArray[i].totalDif;
        }
      }
      friendsArray.push(userData);
      res.JSON(bestFriend);
  });
}
