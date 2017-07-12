var idleTimeRecord = 0;
var activeTimeRecord = 0;
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
    $("#idleHours").html(pad(Math.floor(idleTimeRecord/3600)));
    $("#idleMinutes").html(pad(Math.floor((idleTimeRecord%3600)/60)));
    $("#idleSeconds").html(pad((idleTimeRecord%3600)%60));
  }
}

function activeTimeStart() {
  if (!idle) {
    activeTimeRecord+=1;
    $("#activeHours").html(pad(Math.floor(activeTimeRecord/3600)));
    $("#activeMinutes").html(pad(Math.floor((activeTimeRecord%3600)/60)));
    $("#activeSeconds").html(pad((activeTimeRecord%3600)%60));
  }
}

function pad(n) {
  return (n < 10 ? "0" + n : n);
}
