
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

function friendReveal() {
          $("#intCurtain").show();
          //$("#friendPicture").html();
          // var queryURL = "/api/friends/";
          //
          // // Perfoming an AJAX GET request to our queryURL
          // $.ajax({
          //   url: queryURL,
          //   method: "GET"
          // })
          //
          // // After the data from the AJAX request comes back
          // .then(function(response) {
          //
          //   // Saving the image_original_url property
          //   var imageUrl = response.data.friends[0].image;

            // Creating and storing an image tag
            //$("#friendPicture").css('background-image', 'url(' + imageUrl + ')');
            $("#friendPicture").css('background-color', 'red');
     // });
   }

$(document).on("click", "#intCurtain", function(e) {
  $(this).hide("#intCurtain");
});

$(document).on("click", "#intCurtain", function (e) {
  e.stopPropagation();
});

$("#findFriend").on("click", function(){
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
  // Send the PUT request.
  $.ajax("/api/friends/", {
    type: "PUT",
    data: friendData
  }).then(
    function() {
      console.log("darkness gathers", friendData);
    }
  );
  friendReveal();
});
