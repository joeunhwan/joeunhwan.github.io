/* 사업소개 종류 뷰 */
var gnbIndex;
$('.type_gnb li').on(
    "click", function() {
        gnbIndex = $(this).index();

        if (gnbIndex != undefined) {
            switch(gnbIndex) {
                case 0:
                    gnb_view_visible(0);
                    break;
                case 1:
                    gnb_view_visible(1);
                    break;
                case 2:
                    gnb_view_visible(2);
                    break;
                case 3:
                    gnb_view_visible(3);
                    break;
            }
        }

        // 클릭 시 폰트 색상 변경 
        $('.tg_text').css("color", "#a9a9a9")
                    .eq(gnbIndex).css("color", "#333");

});

// 사업 종류 뷰 그리기
function gnb_view_visible(index) {
    var gIndex = index;
    $('.type').css("display", "none")
                .eq(gIndex).css("display", "flex");
}