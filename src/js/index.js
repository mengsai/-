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


});
