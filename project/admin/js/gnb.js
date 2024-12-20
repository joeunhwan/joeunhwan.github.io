// /* GNB */

// 유관기관
// gnb_top$("body > .wrapper")
var gnb_top = "";

gnb_top += 		      '<div class="area_logo">'
gnb_top += 			      '<a href="RGO_APL_01_신청서_작성.html">'
gnb_top += 			    	  '<img src="../img/logo/Signature_Slogan.png" alt="로고">'
gnb_top += 			      '</a>'
gnb_top += 		      '</div>'
gnb_top +=          '<ul class="gnb_menu depth01_menu">'

gnb_top +=            '<il class="depth01 depth01_menu01">'
gnb_top +=              '<a href="javascript:;" target="_self" class="depth01_item">마이페이지</a>'  
gnb_top +=              '<ul class="gnb_sub_menu depth02_menu01">'
gnb_top +=                '<il class="depth02"><a href="RGO_APL_PWD-01_마이페이지_비밀번호 변경.html" target="_self" class="depth02_item">비밀번호변경</a></il>'
gnb_top +=                '<il class="depth02 depth02_bg"></il>'  
gnb_top +=              '</ul>'
gnb_top +=            '</il>'

gnb_top +=            '<il class="depth01 depth01_menu02">'
gnb_top +=              '<a href="javascript:;" target="_self" class="depth01_item">신청</a>'  
gnb_top +=              '<ul class="gnb_sub_menu depth02_menu02">'
gnb_top +=                '<il class="depth02"><a href="RGO_APL_01_신청서_작성.html" target="_self" class="depth02_item">신청서</a></il>'
gnb_top +=                '<il class="depth02"><a href="RGO_APL_HIS_신청서_내역.html" target="_self" class="depth02_item">나의 신청 내역</a></il>'
gnb_top +=                '<il class="depth02 depth02_bg"></il>'  
gnb_top +=              '</ul>'
gnb_top +=            '</il>'

gnb_top +=          '</ul>'

gnb_top +=          '<div class="user_profile">'
gnb_top += 				    '<a class="user_info"><span class="user_profile_pic"></span><span class="user_name">홍길동</span><span class="user_job"></span></a>'
gnb_top +=          '</div>'
gnb_top +=          '<div class="logout_btn_wrap">'
gnb_top += 					  `<button type="button" class="btn_logout" onclick="location.href='RGO_LOGIN-01_로그인.html'">로그아웃</button>`
gnb_top +=          '</div>'


$(document).ready(function () {
  $("body .gnb_top").html(gnb_top);	
});

// 유관기관


// gnb_top$("body > .wrapper")
var gnb_top_login = "";
gnb_top_login += 		      '<div class="area_logo">'
gnb_top_login += 			      '<a href="/">'
gnb_top_login += 			    	  '<img src="../img/logo/logo_1.png" alt="로고">'
gnb_top_login += 			      '</a>'
gnb_top_login += 		      '</div>'


$(document).ready(function () {
  $("body .login_page .gnb_top_login").html(gnb_top_login);	
});



/* 로고만 있는 헤더 */
var gnb_login_header = "";
gnb_login_header +=  '<div class="login-head-container">'
gnb_login_header +=      '<div class="logo">'
gnb_login_header +=          '<img src="../img/logo/logo_1.png" alt="로고">'
gnb_login_header +=      '</div>'
gnb_login_header +=  '</div>'

$(document).ready(function () {
  $(".header").html(gnb_login_header);	
});


//  푸터
var common_footer = "";
common_footer +=        '<div class="footer-container">'
common_footer +=             '<div class="footer-inner">'
common_footer +=                 '<div class="ft-left">'
common_footer +=                    '<div class="ft-logo">'
common_footer +=                         '<img src="../img/logo/logo_mark.png">'
common_footer +=                     '</div>'
common_footer +=                     '<div class="ft-address">'
common_footer +=                         '<p>주소:</p>'
common_footer +=                         '<p>TEL:</p>'
common_footer +=                         '<p>Copyright(C) All rights reserved</p>'
common_footer +=                     '</div>'
common_footer +=                 '</div>'
common_footer +=                 '<div class="ft-right">'
common_footer +=                     '<div class="personal-info">'
common_footer +=                         '<a href="#none">개인정보처리방침</a>'
common_footer +=                     '</div>'
common_footer +=                     '<div class="organization-info">'
common_footer +=                         '<select name="" id="">'
common_footer +=                             '<option>관련기관</option>'
common_footer +=                         '</select>'
common_footer +=                     '</div>'

common_footer +=                 '</div>'
common_footer +=             '</div>'
common_footer +=         '</div>'

 $(document).ready(function () {
   $("body .footer").html(common_footer);
   // menuOnLighter();
 });