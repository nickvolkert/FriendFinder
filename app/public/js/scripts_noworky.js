$.get("/api/friends", function () {

}

function modalBuilder(){
  var currentURL = window.location.origin;
  $.ajax({url: currentURL + "/api/friends", method: "GET"})
    .done(function(tableData){
      console.log("________________________________");
      console.log(friendsArray[0].name);
      console.log(friendsArray[0].photo);
      console.log(friendsArray[0].score);
      console.log("________________________________");

      // var tableSection = $("<div>");
      // tableSection.addClass('well');
      // tableSection.attr('id', 'tableWell-' + i+1);
      // $("#tables").append(tableSection);
      // var tableNumber = i + 1;
      // $("tableWell-" + i+1).append('<h2><span class="label label-primary">' +
      // tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
      // $("#friendPicture")
    });
}

// {
//   "name": name,
//   "photo": photo,
//   "scores": [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
//   console.log("score tracker is running");
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

function friendReveal(){
          //friendModal = $('<div id="intCurtain"><div class="loader"></div></div>');
          //console.log("modal fire is working");
          //$(".container").html(friendModal);
          $("#intCurtain").show();
          modalBuilder();
     }

$(document).on("click", "#intCurtain", function(e) {
  $(this).hide("#intCurtain");
});

$(document).on("click", "#intCurtain", function (e) {
  e.stopPropagation();
});

$("#findFriend").on("click", function(){
  var currentURL = window.location.origin;
  var friendData = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $('#q1').val(),
      $('#q2').val(),
      $('#q3').val(),
      $('#q4').val(),
      $('#q5').val(),
      $('#q6').val(),
      $('#q7').val(),
      $('#q8').val(),
      $('#q9').val(),
      $('#q10').val()
    ]
  };
  $.post("/api/friends", friendData, function(data){
    name: name,
    photo: photo,
    scores: scores
  });
  // $.post("/api/friends", function(friendData){



    console.log(friendData);
  // })
  // .then(function(response) {

    friendReveal();
  // });

});
