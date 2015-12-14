$(document).ready(function() {

    $(".finder_date").datepicker({
        dateFormat: "M dd"
    });
    $(".menu_button").click(function() {
        $(".header_buttons").toggleClass("active");
        $("body").toggleClass("overflowed");
    });

});