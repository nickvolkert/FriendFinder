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

            console.log("image result: " + imageUrl);
            console.log("name result: " + friendH3);
            // Creating and storing an image tag
            $("#intCurtain").show();
            //$("#friendPicture").css('background-image', 'url("' + imageUrl + '")');

            //$("#friendPicture").html('<img src="../' + imageUrl + "/>");
            //var friendImage = $("<img class='userImage'>");
            //friendImage.attr("src", imageUrl);

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
      console.log("data output:" + JSON.stringify(data));
      var imageUrl = data.image;
      var friendH3 = data.name;
      $("#friendText h3").html(friendH3);
      $("#friendPicture").css('background-image', 'url(' + data.photo + ')');
      $("#intCurtain").show();
    }
  );

});
