const $ = require('jquery');
const { ipcRenderer } = require('electron');

$(function () {

  // listen for showPhase messages from main.js
  ipcRenderer.on('showPhase', (event, phase) => {
    // show all phases
    if (phase === "all") {
      // show all phase images
      $("img").show();
    } 
    // show a specific phase
    else {
      // hide all images
      $("img").hide();
      // show only the selected phase
      $("#" + phase).show();
    }
  });

  // click event for phase images
  $("img").on("click", function () {
    // hide all images
    $("img").hide();
    // show only the one we clicked
    $(this).show();
  });

  // reset button click event
  $("#resetButton").on("click", function () {
    // show all phase images
    $("img").show();
  });
});
