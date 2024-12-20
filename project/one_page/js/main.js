/* 풀페이지스크롤 옵션 */

$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
        navigation: true,
        navigationPosition : 'left',
        navigationTooltips : ['HOME', 'BUSINESS', 'PARTNERS', 'PROJECT'],
        showActiveTooltip : true,
        responsiveWidth: 1023,
    });
});



function initLayout() {
    var widthWin = $(window).width();
    if (widthWin < 479){
        $("#fullpage .section").addClass("fp-auto-height");
        $("#fullpage .section").addClass(".pause-animation-mobile");
       }else{
        $("#fullpage .section").removeClass("fp-auto-height");
        $("#fullpage .section h1").siblings().removeClass(".pause-animation-mobile");
    } 
}
$(window).resize(function () {
initLayout();
});