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
  $.ajax("/api/friends", {
    type: "POST",
    data: friendData
  }).then(
    function(data) {
      console.log("darkness gathers", friendData);
    }
  );
  friendReveal();
});
