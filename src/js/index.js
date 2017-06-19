/**
 * Created by Administrator on 2017/6/19.
 */


$(function () {
    function lun() {
        $(".bo").delay(2000).animate({
            left:"-1200px"
        },1000,function () {
            $(".bo").css("left",0);
            $(".bo img").first().appendTo(this);
            lun();
        })
    }
    lun();
$(".xiushouji").mouseover(function () {
    $(".xiushouji").css("background","#00aa00");
    $(".xiushoujidiv").css("display","block");
})
    $(".xiushouji").mouseout(function () {
        $(".xiushouji").css("background","");
        $(".xiushoujidiv").css("display","none");
    })
    $(".xiudiannao").mouseover(function () {
        $(".xiudiannao").css("background","#00aa00");
        $(".xiushoujidiv1").css("display","block");
        
    })
    $(".xiudiannao").mouseout(function () {
        $(".xiudiannao").css("background","");
        $(".xiushoujidiv1").css("display","none");
    })
    $(".mai").mouseover(function () {
        $(".mai").css("background","#00aa00");
        $(".xiushoujidiv2").css("display","block");
        
    })
    $(".mai").mouseout(function () {
        $(".mai").css("background","");
        $(".xiushoujidiv2").css("display","none");
    })
    $(".maishouji").mouseover(function () {
        $(".maishouji").css("background","#00aa00");
        $(".xiushoujidiv3").css("display","block");
        
    })
    $(".maishouji").mouseout(function () {
        $(".maishouji").css("background","");
        $(".xiushoujidiv3").css("display","none");
    })

});
