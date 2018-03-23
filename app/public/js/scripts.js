function friendReveal() {

          var queryURL = "/api/friends";
          // Perfoming an AJAX GET request to our queryURL
          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            console.log(response);
          }).then(function(response) {

            // Saving the image_original_url property
            var imageUrl = response[0].image;
            var friendH3 = response[0].name;
            console.log("image result: " + imageUrl);
            console.log("name result: " + friendH3);
            // Creating and storing an image tag
            $("#intCurtain").show();
            //$("#friendPicture").css('background-image', 'url("' + imageUrl + '")');
            $("#friendPicture").css('background-image', 'url("/img/teri.png")');
            //$("#friendPicture").html('<img src="../' + imageUrl + "/>");
            //var friendImage = $("<img class='userImage'>");
            //friendImage.attr("src", imageUrl);
            $("#friendText h3").html(friendH3);
     });
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
