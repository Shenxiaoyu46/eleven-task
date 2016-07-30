$(document).ready(function() {
    // 搜索表单点击事件
    $(".search-text").click(function(e) {
        $(".search-con .hot-words").css("display", "none");
        $(".search-con .search-btn").css({
            "background": "#35b558 url(picture/searchicon2.png) center center no-repeat",
            "border": "1px solid #35b558"
        });

    });
    // 点击空白处搜索按钮和热搜词显示
    var $search = $(".search-text")
      $(document).click(function(e) {
        if (!(e.target == $search[0] || $.contains($search[0], e.target))) {
            $(".search-con .hot-words").css("display", "block");
            $(".search-con .search-btn").css({
                "background": "#fff url(picture/searchicon.png) center center no-repeat",
                "border": "1px solid #dfdfdf"
            });
        }
    });
    // 搜索按钮悬停
    $(".search-btn").hover(function() {
        $(".search-btn").css({
            "background": "#35b558 url(picture/searchicon2.png) center center no-repeat",
            "border": "1px solid #35b558"
        });
    }, function() {
        $(".search-btn").css({
            "background": "url(picture/searchicon.png) center center no-repeat",
            "border": "1px solid #dfdfdf"
        });
    });
});
