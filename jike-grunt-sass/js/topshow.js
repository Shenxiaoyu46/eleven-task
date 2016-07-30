$(document).ready(function() {
    var a = 0;
    var clone = $(".imagebox a").first().clone();
    $(".imagebox").append(clone);
    var imagesize = $(".imagebox a").size();
    $(".icoBox span").first().addClass("active");
    // 鼠标点击圆点
    $(".icoBox span").click(function() {
        var index = $(this).index();
        a = index;
        $(".imagebox").stop().animate({ left: "-" + index * 560 + "px" }, 500);
        $(this).addClass("active").siblings().removeClass("active");
    });
    // 自动轮播
    var t = setInterval(function() {
        moveL();
    }, 3000);
    // 鼠标移入图片停止
    $(".imageRotation").hover(function() {
        clearInterval(t);
    }, function() {
        moveL();
    });
    // 向左按钮
    function moveL() {
        a++;
        if (a == imagesize) {
            $(".imagebox").css({ left: 0 });
            a = 1;
        }
        $(".imagebox").stop().animate({ left: "-" + a * 560 + "px" }, 500);
        if (a == imagesize - 1) {
            $(".icoBox span").eq(0).addClass("active").siblings().removeClass("active");
        } else {
            $(".icoBox span").eq(a).addClass("active").siblings().removeClass("active");
        }

    }
    // 向右按钮
    function moveR() {
        a--;
        if (a == -1) {
            $(".imagebox").css("left", "-" + (imagesize - 1) * 560 + "px");
            a = imagesize - 2;
        }
        $(".imagebox").stop().animate({ left: "-" + a * 560 + "px" }, 500);
        if (a == imagesize - 1) {
            $(".icoBox span").eq(0).addClass("active").siblings().removeClass("active");
        } else {
            $(".icoBox span").eq(a).addClass("active").siblings().removeClass("active");
        }
    }
    $("#banner-left").click(function() {
        moveL();
    });
    $("#banner-right").click(function() {
        moveR();
    });




    // 手动轮播图
    var i = 0;
    var width = $(".lesson-list li").width();
    var size = $(".lesson-list li").size();

    $("#work-left").click(function() {
        i++;
        if (i == size - 5) {
            $(".lesson-list").css({ "margin-left": "-560px" });
            i = 1;
        }

        $(".lesson-list").animate({ "margin-left": "-" + (i + 3) * 186.5 + 'px' }, 500);

    });

    $("#work-right").click(function() {
        i--;
        if (i == -4) {
            $(".lesson-list").css({ "margin-left": "-1120px" });
            i = size - 10;
        }
        $(".lesson-list").animate({ "margin-left": "-" + (i + 3) * 186.5 + 'px' }, 500);
    });




});
