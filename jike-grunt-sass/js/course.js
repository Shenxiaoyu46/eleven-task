$(document).ready(function() {
    // 热门课程悬浮
    $("#1").hover(function() {
        $(".hot").show();
        $(".new").hide();
        $(".free").hide();
        $(".project").hide();
        $(".first").hide();
        $(".cooperation").hide();
        $("#1").attr("class", "on");
        $("#2").removeClass("on");
        $("#3").removeClass("on");
        $("#4").removeClass("on");
        $("#5").removeClass("on");
        $("#6").removeClass("on");
    });


    // 最新课程悬浮
    $("#2").hover(function() {
        $(".new").show();
        $(".hot").hide();
        $(".free").hide();
        $(".project").hide();
        $(".first").hide();
        $(".cooperation").hide();
        $(this).attr("class", "on");
        $("#1").removeClass("on");
        $("#3").removeClass("on");
        $("#4").removeClass("on");
        $("#5").removeClass("on");
        $("#6").removeClass("on");
    });

    // 免费课程

    $("#3").hover(function() {
        $(".free").show();
        $(".hot").hide();
        $(".new").hide();
        $(".project").hide();
        $(".first").hide();
        $(".cooperation").hide();
        $(this).attr("class", "on");
        $("#1").removeClass("on");
        $("#2").removeClass("on");
        $("#4").removeClass("on");
        $("#5").removeClass("on");
        $("#6").removeClass("on");
    });
    // 项目实战
    $("#4").hover(function() {
        $(".project").show();
        $(".free").hide();
        $(".hot").hide();
        $(".new").hide();
        $(".first").hide();
        $(".cooperation").hide();
        $(this).attr("class", "on");
        $("#1").removeClass("on");
        $("#2").removeClass("on");
        $("#3").removeClass("on");
        $("#5").removeClass("on");
        $("#6").removeClass("on");
    });
    // 全球首发
    $("#5").hover(function() {
        $(".first").show();
        $(".project").hide();
        $(".free").hide();
        $(".hot").hide();
        $(".new").hide();
        $(".cooperation").hide();
        $(this).attr("class", "on");
        $("#1").removeClass("on");
        $("#2").removeClass("on");
        $("#3").removeClass("on");
        $("#4").removeClass("on");
        $("#6").removeClass("on");
    });
    // 企业合作
    $("#6").hover(function() {
        $(".cooperation").show();
        $(".project").hide();
        $(".free").hide();
        $(".hot").hide();
        $(".new").hide();
        $(".first").hide();
        $(this).attr("class", "on");
        $("#1").removeClass("on");
        $("#2").removeClass("on");
        $("#3").removeClass("on");
        $("#4").removeClass("on");
        $("#5").removeClass("on");
    });
});
