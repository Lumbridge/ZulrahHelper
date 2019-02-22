const $ = require('jquery');

$(function(){
  $("img").on("click", function(){
    // hide all images
    $("img").hide();
    // show only the one we clicked
    $(this).show();
  });

  $("#resetButton").on("click", function(){
    $("img").show();
  });
})
