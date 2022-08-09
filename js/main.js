$(document).ready(function(){
    //nav
    $("nav > ul > li").hover(function(){
        $("nav .sub").stop().slideDown(200);
    },function(){
        $("nav .sub").stop().slideUp(200);
    });

    // slide
    function slidemove(){
        var slimv=$(".slide-con").height();
        $(".slide-box2").animate({
            top:-slimv
        },function(){
            $(".slide-con:first-child").appendTo(".slide-box2");
            $(".slide-box2").css({
                top:0
            });
        });
    }
    setInterval(slidemove, 3000);

    // tab
    $(".ng-sel").hide();
    $(".ng-sel:first-child").show();    
    $(".ng-title a").click(function(){
        var num=$(this).index();
        $(".ng-title a").removeClass('active');
        $(this).addClass('active');
        $(".ng-sel").hide();
        $(".ng-sel").eq(num).show();
    });

    // pop
    $("#pop").hide();
    $(".ng-notice ul li:first-child").click(function(){
        $("#pop").show();
    });
    $("#pop #pop-close").click(function(){
        $("#pop").hide();
    });
});