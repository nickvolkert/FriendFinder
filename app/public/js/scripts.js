function myLocationCurtain(){
          //friendModal = $('<div id="intCurtain"><div class="loader"></div></div>');
          //console.log("modal fire is working");
          //$(".container").html(friendModal);
          $("#intCurtain").show();
     }

$(document).on("click", "#intCurtain", function(e) {
  $(this).hide("#intCurtain");
  //$(this).remove();
});

$(document).on("click", "#intCurtain", function (e) {
  e.stopPropagation();
});

$("#findFriend").on("click", function(){
  myLocationCurtain();
})
