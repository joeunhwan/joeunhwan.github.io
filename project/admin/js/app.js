//  popup common

/* 마스크 클릭 시 팝업 닫기 */
// $(document).on("click", ".popup_mask", function () {
//     closePop();
//   });
  
  /* 팝업 */
  function openPop(type, id) {
    // $("#" + id).addClass("open");
  
    if (type == "layer") {
       $(".popup_layer").fadeOut();
       $("#" + id).fadeIn();
    }

    // $(".popup_mask").fadeIn();
    
      // // Scroll to the top of the page
      // $('html, body').animate({
      //   scrollTop: 120
      // }, 'fast');

        /*     $("body").css({
              overflow: "auto",
            }); */
  }

  function openPop2(type, id) {
    // $("#" + id).addClass("open");
  
    if (type == "layer") {
      // $(".layerPop").fadeOut();
      $("#" + id).show();
      // $(".mask").addClass("pop-mask");
    }
  }
  
  function closePop(type, id) {
    // $("#" + id).removeClass("open");
    if (type == "layer") {
    $(".popup_layer").fadeOut();
    $("#" + id).fadeOut();  

    }
    // $(".popup_mask").fadeOut();
  
/*     $("body").css({
      overflow: "unset",
    }); */
  }

  
function closePop2(type, id) {
  // $("#" + id).removeClass("open");
  if (type == "layer") {
    // $(".popup_layer").fadeOut();
    // $(this).parents(".popup_layer").fadeOut();
    $("#" + id).fadeOut();  
 }

  
  // $(".mask").fadeOut();

  // $("body").css({
  //   overflow: "auto",
  // });

  // if ($(".mask").hasClass("pop-mask")) {
  //   $(".mask").removeClass("pop-mask");
  // }
}

  

// /* 클릭 시 팝업창 최대화 */  
$(document).on("click", ".popup_fullscreen", function () {
  popFullSize();
  // Scroll to the top of the page
  $('html, body').animate({
    scrollTop: 0
  }, 'fast');
});

function popFullSize() {
  let beforeSize;
  let beforePosition;

  $(".popup_layer").toggleClass("fullscreen");

    if ($(".popup_fullscreen").hasClass("fullscreen")) {

      // $(this).parents(".popup_layer").addClass("fullscreen");
      $(this).parents(".popup_inner").css({
        "width" : "100%",
        "top" : 0
      });
    } else {
      // $(this).parents(".popup_layer").removeClass("fullscreen");
      $(this).parents(".popup_inner").css({
        "width" : beforeSize,
        "top" : beforePosition
      });
      
    }
  }
  
  
// /* 팝업 드래그 */
  
  //   //drag 가로 세로 이동 제한 
  // "axis": "x" // 가로로만 이동 가능 
  // "axis": "y" // 세로로만 이동 가능 
  
  
  // //이동영역 제한 
  
  // containment:"선택자" // .popup_layer
  // //선택자 영역 안에서만 이동제한 
  
  
  // start: function(event, ui ) {
  //     //드래그를 시작했을때 이벤트 발생 
  //     currentObj = $(".ui-draggable-dragging"); //현재 드래그 중인 엘리먼트 가져오기 
  // }

$(function(){
  $('.popup_inner').draggable({
    'cancel': '.popup_contents, button, .popup_status_btn_wrap',
    containment: '.popup_layer',
    scroll: false
  });
  // $('.popup_layer').draggable({'cancel':'.popup_contents', containment:'.popup_layer', scroll:false});
  // $('.popup_inner').draggable({'cancel':'.popup_contents', containment:'parent', scroll:false});
  // $('.popup_inner').draggable({'cancel':'.popup_contents'});
  // $( ".popup_inner" ).draggable();

  });

  // $(function() {
  //   $('.popup_layer').draggable({
  //     'cancel': '.popup_contents, button',
  //     containment: '.popup_layer',
  //     scroll: false
  //   });
  // });


// /* 체크박스 전체 선택 */
 $(document).ready(function(){

  $("#check_all_01").click(function(){
    if($("#check_all_01").is(":checked")){
      $("input[name=chkbox01]").prop("checked", true);
    }else {
      $("input[name=chkbox01]").prop("checked", false);
    }
  });

  $("#check_all_02").click(function(){
    if($("#check_all_02").is(":checked")){
      $("input[name=chkbox02]").prop("checked", true);
    }else {
      $("input[name=chkbox02]").prop("checked", false);
    }
  });

  $("#check_all_03").click(function(){
    if($("#check_all_03").is(":checked")){
      $("input[name=chkbox03]").prop("checked", true);
    }else {
      $("input[name=chkbox03]").prop("checked", false);
    }
  });

  $("#check_all_04").click(function(){
    if($("#check_all_04").is(":checked")){
      $("input[name=chkbox04]").prop("checked", true);
    }else {
      $("input[name=chkbox04]").prop("checked", false);
    }
  });
  
  $("#check_all_05").click(function(){
    if($("#check_all_05").is(":checked")){
      $("input[name=chkbox05]").prop("checked", true);
    }else {
      $("input[name=chkbox05]").prop("checked", false);
    }
  });

  $("#check_all_06").click(function(){
    if($("#check_all_06").is(":checked")){
      $("input[name=chkbox06]").prop("checked", true);
    }else {
      $("input[name=chkbox06]").prop("checked", false);
    }
  });

// /* 탭메뉴 */

  $('.searchbox_small_btn').click(function(){
    var tab_id = $(this).attr('data-tab');
		
		$('.searchbox_small_btn').removeClass('current');   
		$('.plain_table_wrap').removeClass('current');   
		$('.tab_con').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});

// /* 라디오 버튼  readonly */

$(document).ready(function(){
  $("input[class='readonly']").attr("onclick", "return(false);");
});







/* 라디오 버튼 체크에 따른 테이블 변경 */

function radioDisplay() {
  // var radioChk = document.getElementsByClassName("radio_display_table"); // 현황 라디오 체크 시 테이블 클래스네임
  var radioChk = document.getElementsByName("radio-2"); // 현황 라디오 체크 시 테이블 인풋 네임

  for (i = 0; i < radioChk.length; i++) {
    var tableDisplay = document.getElementsByClassName("radio_display_table")[i]; //테이블 순서 체크 
    if(radioChk[i].checked == true ){
      tableDisplay.style.display = "block";
    }else{
      radioChk[i].checked = false;
      tableDisplay.style.display = "none";
    }
  }
}


/* 기관 탭메뉴 */
$(document).ready(function(){
  $('ul.tabs_item li').click(function(){

    var tab_id = $(this).attr('data-tab');

    $('ul.tabs_item li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });
});
