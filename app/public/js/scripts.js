// function friendModalBuild(){
//   for(var i = 0; i < friendsArray.length; i++){
//     console.log(friendsArray[i].name);
//   }
//   $("#friendPicture").css('background-image', 'url("' + friendsArray[0].photo + '")');
//   $("#friendText h3").html(friendsArray[0].name);
// }

// <div id="intCurtain">
//   <div id="modalHouse">
//     <div id="friendPicture"></div>
//     <div id="friendText">
//       <h2>You have a new friend!</h2>
//       <h3></h3>
//       <p>May the emptyness of your black hearts envelop the world in darkness</p>
//       <a href="#">Close</a>
//     </div>
//   </div>
// </div>

function myLocationCurtain(){
          //friendModal = $('<div id="intCurtain"><div class="loader"></div></div>');
          //console.log("modal fire is working");
          //$(".container").html(friendModal);
          $("#intCurtain").show();
          //friendModalBuild();
     }

$(document).on("click", "#intCurtain", function(e) {
  $(this).hide("#intCurtain");
});

$(document).on("click", "#intCurtain", function (e) {
  e.stopPropagation();
});

$("#findFriend").on("click", function(){
  var name = $('#name');
  var photo = $('#photo');
  var q1 = $('#q1');

  $.post("/api/friends", function(){
    {
      "name":name,
      "photo":photo,
      "scores":[q1]
    }
  })
  .then(
    // myLocationCurtain();
  )

})
