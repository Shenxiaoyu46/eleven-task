$(document).ready(function() {
    $(".why-icon").hover(function() {
        $(".why-infor").animate({
            opacity: "1",
            "margin-left": "0px"
        }, 700);
    }, function() {
        $(".why-infor").animate({
            opacity: "0",
            "margin-left": "-5px"
        }, 700);
    });
});
