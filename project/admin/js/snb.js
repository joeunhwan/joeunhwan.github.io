/* SNB */



/* ORG_U */

//  RGO_APL_ORG 마이페이지
var RGO_APL_ORG = "";
RGO_APL_ORG += 		  '<div class="area_depth02_name">'
RGO_APL_ORG += 				'<div>'
RGO_APL_ORG += 				  '<a href="javascript:;" class="depth02_name">마이페이지</a>'
RGO_APL_ORG += 				'</div>'
RGO_APL_ORG += 		  '</div>'

RGO_APL_ORG += 		  '<div class="area_menu">'
RGO_APL_ORG += 			  '<ul class="snb_menu depth03_menu">'
RGO_APL_ORG +=           '<il class="depth03">'
RGO_APL_ORG +=             '<a href="RGO_APL_PWD-01_마이페이지_비밀번호 변경.html" target="_self" class="depth03_item">비밀번호변경</a>'
RGO_APL_ORG +=           '</il>'

RGO_APL_ORG += 			  '</ul>'
RGO_APL_ORG += 		  '</div>'

$(document).ready(function () {
  $("body .RGO_APL_ORG").html(RGO_APL_ORG);
  // menuOnLighter();
});

//  snb_RGO_APL_MENU 신청
var snb_RGO_APL_MENU = "";
snb_RGO_APL_MENU += 		  '<div class="area_depth02_name">'
snb_RGO_APL_MENU += 				'<div>'
snb_RGO_APL_MENU += 				  '<a href="javascript:;" class="depth02_name">신청</a>'
snb_RGO_APL_MENU += 				'</div>'
snb_RGO_APL_MENU += 		  '</div>'

snb_RGO_APL_MENU += 		  '<div class="area_menu">'
snb_RGO_APL_MENU += 			  '<ul class="snb_menu depth03_menu">'
snb_RGO_APL_MENU +=           '<il class="depth03">'
snb_RGO_APL_MENU +=             '<a href="RGO_APL_01_신청서_작성.html" target="_self" class="depth03_item">신청서 작성</a>'
snb_RGO_APL_MENU +=           '</il>'
snb_RGO_APL_MENU +=           '<il class="depth03">'
snb_RGO_APL_MENU +=             '<a href="RGO_APL_HIS_신청서_내역.html" target="_self" class="depth03_item">나의 신청내역</a>'
snb_RGO_APL_MENU +=           '</il>'
snb_RGO_APL_MENU += 			  '</ul>'
snb_RGO_APL_MENU += 		  '</div>'

$(document).ready(function () {
  $("body .snb_RGO_APL_MENU").html(snb_RGO_APL_MENU);
  // menuOnLighter();
});






/* dropdown menu 하위메뉴 있을 경우 */

(function ($) {
  var lnbUI = {
    click: function (target, speed) {
      var _self = this,
        $target = $(target);
      _self.speed = speed || 200;

      $target.each(function () {
        if (findChildren($(this))) {
          return;
        }
        $(this).addClass("lastDepth");
      });

      function findChildren(obj) {
        return obj.find(".sub_menu").length > 0;
      }

      $target.on("click", "a", function (e) {
        e.stopPropagation();
        var $this = $(this),
          $depthTarget = $this.next(),
          $siblings = $this.parent().siblings();
          $this.parent("li").find("ul li").removeClass("on");
          $siblings.removeClass("on");
          $siblings.find("ul").slideUp(250);

        if ($depthTarget.css("display") == "none") {
          _self.activeOn($this);
          $depthTarget.slideDown(_self.speed);
        } else {
          $depthTarget.slideUp(_self.speed);
          _self.activeOff($this);
        }
      });
    },
    activeOff: function ($target) {
      $target.parent().removeClass("on");
    },
    activeOn: function ($target) {
      $target.parent().addClass("on");
    },
  };

  // Call lnbUI
  $(function () {
    lnbUI.click(".depth03", 200);

  });
})(jQuery);