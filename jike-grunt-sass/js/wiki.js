$(document).ready(function(){

    $(".wiki-img dl dd a").hover(function() {
        $(this).children("h3").css("color", "#35b558");
        $(this).children("span").css("color", "#35b558");
    }, function() {
        $(this).children("h3").css("color", "#999");
        $(this).children("span").css("color", "#999");
    });

    $(".wiki-img ul li a").hover(function() {
        $(this).children("p").css("color", "#35b558");
        $(this).children("span").css("color", "#35b558");
    }, function() {
        $(this).children("p").css("color", "#999");
        $(this).children("span").css("color", "#999");
    });
});