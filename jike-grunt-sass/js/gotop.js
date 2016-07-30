$(document).ready(function(){
var	scrollTop=$(window).scrollTop();
if (scrollTop==0) {
	$(".top").css("display","none");
}
$(window).scroll(function(){
var	scrollTop=$(window).scrollTop();
	if (scrollTop>=90) {
	$(".top").fadeIn();
}else{
	$(".top").fadeOut();
}
});
$(".top").click(function(){
$("body").animate({"scrollTop":"0px"},300);
});


});