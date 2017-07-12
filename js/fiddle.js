(function ($) {
    $(document).on( "idle.idleTimer", function(event, elem, obj){
        $("#timer").html("idle");
    });

    $(document).on( "active.idleTimer", function(event, elem, obj, triggerevent){
        $("#timer").html("active");
    });

    $.idleTimer(3000);

})(jQuery);
