$(document).ready(function() {
	
    $(".card-transform").hover(function() {
        $(this).children("a").children(".back").css("transform", "rotateY(0deg)");
        $(this).children("a").children(".front").css("transform", "rotateY(-180deg)");
    }, function() {
        $(this).children("a").children(".back").css("transform", "rotateY(-180deg)");
        $(this).children("a").children(".front").css("transform", "rotateY(0deg)");
    });

});
