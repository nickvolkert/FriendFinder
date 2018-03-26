var friendsArray = require ('../data/friends.js');
module.exports = function(app){
  app.get('/api/friends', function (req, res){
    res.json(friendsArray);
  });

  app.post('/api/friends', function(req, res){
    var bestFriend = {
      name: '',
      photo: '',
      friendDifference: 1000
    }
    console.log("req.body: " + JSON.stringify(req.body));

    var userData = req.body;
    var userScores = userData.scores;
    console.log(userScores);


    for(var i = 0; i < friendsArray.length; i++){
        var totalDifference = 0;
        console.log(friendsArray[i].name);
        for(var j = 0; j < userScores.length; j++){
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));
          console.log("totalDifference: " + totalDifference);
          if (totalDifference <= bestFriend.friendDifference){
            bestFriend.name = friendsArray[i].name;
            bestFriend.photo = friendsArray[i].photo;
            bestFriend.friendDifference = friendsArray[i].totalDifference;
            console.log("friendsArray[i]: " + friendsArray[i]);
          }
        }
        friendsArray.push(userData);
        res.json(bestFriend);
    }
  });
}
