$(document).ready(function() {
    // 合作企业轮播图
    var i = 0;
    var size = $(".swiper-container1 .swiper-wrapper a").size();

    var width = $(".swiper-container1 .swiper-wrapper a").width();

    $("#banner-left3").click(function() {
        i++;
        if (i == size - 11) {
            $(".swiper-container1 .swiper-wrapper").css({ "margin-left": "-958px" });
            i = 1;
        }

        $(".swiper-container1 .swiper-wrapper").animate({ 'margin-left': '-' + (i + 6) * width + 'px' }, 500);
    });

    $("#banner-right3").click(function() {
        i--;
        if (i == -7) {
            $(".swiper-container1 .swiper-wrapper").css({ "margin-left": "-3350px" });
            i = size - 19;
        }

        $(".swiper-container1 .swiper-wrapper").animate({ 'margin-left': '-' + (i + 6) * width + 'px' }, 500);
    });
    // 合作院校轮播图
    var a = 0;
    var universitysize = $(".swiper-car .swiper-wrapper a").size();
    var universitywidth = $(".swiper-car .swiper-wrapper a").width();

    $("#banner-left4").click(function() {
        a++;
        if (a == universitysize - 13) {
            $(".swiper-car .swiper-wrapper").css({ 'margin-left': "-958px" });
            a = 1;
        }
        $(".swiper-car .swiper-wrapper").animate({ 'margin-left': '-' + (a + 7) * universitywidth + 'px' }, 500);
    });

    $("#banner-right4").click(function() {
        a--;
        if (a == -8) {
            $(".swiper-car .swiper-wrapper").css({ 'margin-left': "-1781px" });
            a = universitysize - 22;
        }
        $(".swiper-car .swiper-wrapper").animate({ 'margin-left': '-' + (a + 7) * universitywidth + 'px' }, 500);
    });
    // 媒体报道轮播图
    var j = 0;
    var mtsize = $(".swiper-strategy .swiper-wrapper a").size();
    var mtwidth = $(".swiper-strategy .swiper-wrapper a").width();
    $("#banner-left5").click(function() {
        j++;
        if (j == mtsize - 11) {
            $(".swiper-strategy .swiper-wrapper").css({ 'margin-left': "-958px" });
            j = 1;
        }
        $(".swiper-strategy .swiper-wrapper").animate({ 'margin-left': '-' + (j + 6) * mtwidth + 'px' }, 500);
    });

    $("#banner-right5").click(function() {
        j--;
        if (j == -7) {
            $(".swiper-strategy .swiper-wrapper").css({ 'margin-left': "-2240px" });
            j = mtsize - 19;
        }
        $(".swiper-strategy .swiper-wrapper").animate({ 'margin-left': '-' + (j + 6) * mtwidth + 'px' }, 500);
    });
});
