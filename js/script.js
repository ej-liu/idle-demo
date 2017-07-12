var idleTimeRecord = 0.0;
var activeTimeRecord = 0.0;
var idle = false;

var idleInterval = setInterval("idleTimeStart()", 1000);
var activeInterval = setInterval("activeTimeStart()", 1000);

activeTimeStart();

(function ($) {

  // Idle
  $(document).on( "idle.idleTimer", function(event, elem, obj){
      idle = true;
      $("#status").html("idle");
      clearInterval(idleInterval);
      clearInterval(activeInterval);
      idleInterval = setInterval("idleTimeStart()", 1000);
      idleTimeStart();
  });

  // Active
  $(document).on( "active.idleTimer", function(event, elem, obj, triggerevent){
      idle = false;
      $("#status").html("active");
      clearInterval(activeInterval);
      clearInterval(idleInterval);
      activeInterval = setInterval("activeTimeStart()", 1000);
      activeTimeStart();
  });

    $.idleTimer(3000);

})(jQuery);


function idleTimeStart() {
  if (idle) {
    idleTimeRecord+=1;
    $("#idle").html(idleTimeRecord);
  }
}

function activeTimeStart(){
  if (!idle) {
    activeTimeRecord+=1;
    $("#active").html(activeTimeRecord);
  }
}
