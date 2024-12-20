/* search_area */


 /* area_1row  1행짜리 검색바(one row) */

//  내부_항목그룹등록관리_QISADM_0100M_항목그룹등록
var QISADM_0100M = "";
QISADM_0100M += 		  '<div class="area_row_1_wrap">'
QISADM_0100M += 		    '<div class="search_area">'
QISADM_0100M += 			  	'<form class="wrap_input">'
QISADM_0100M += 			  	  '<span class="search_label">항목 그룹코드</span>'
QISADM_0100M += 			  	  '<input type="text">'
QISADM_0100M += 			  	'</form>'
QISADM_0100M += 			  	'<form class="wrap_input">'
QISADM_0100M += 			  	  '<span class="search_label">항목 그룹명</span>'
QISADM_0100M += 			  	  '<input type="text">'
QISADM_0100M += 			  	'</form>'
QISADM_0100M += 			  	'<form class="wrap_input">'
QISADM_0100M += 			  	  '<span class="search_label">사용여부</span>'
QISADM_0100M += 			  	    '<div class="radio_wrap">'
QISADM_0100M += 			  	      '<input type="radio" id="use" name="radio-1">'
QISADM_0100M += 			  	      '<label for="use">사용</label>'
QISADM_0100M += 			  	    '</div>'
QISADM_0100M += 			  	    '<div class="radio_wrap">'
QISADM_0100M += 			  	      '<input type="radio" id="no_use" name="radio-1">'
QISADM_0100M += 			  	      '<label for="no_use">미사용</label>'
QISADM_0100M += 			  	    '</div>'
QISADM_0100M += 			  	'</form>'
QISADM_0100M += 		      '<div class="one_row_btn_wrap">'
QISADM_0100M += 			  	  '<button type="button" class="action_btn btn_filled_deep_blue search_btn"><span>조회하기</span></button>'      
QISADM_0100M += 		      '</div>'
QISADM_0100M += 		    '</div>'
QISADM_0100M += 		  '</div>'

$(document).ready(function () {
    $("body .QISADM_0100M").html(QISADM_0100M);
    // menuOnLighter();
  });




  /* area_rows_double 2행짜리 검색바(double rows) */

  // 내부_규격치및치데이터등록하기_QISADM_0600M_규격치및치데이터관리

var QISADM_0600M = "";
QISADM_0600M += 		  '<div class="area_rows_double_wrap">'
QISADM_0600M += 		    '<div class="search_area">'
QISADM_0600M += 		      '<div class="first_row">'
QISADM_0600M += 			  	  '<form class="wrap_input">'
QISADM_0600M += 			  	   '<span class="search_label">업무구분</span>'
QISADM_0600M += 			  	     '<div>'
QISADM_0600M += 		    	      '<select class="search_select">'
QISADM_0600M += 	 	              '<option value="">전체</option>'  
QISADM_0600M += 	 	              '<option value=""></option>'  
QISADM_0600M += 	 	              '<option value=""></option>'  
QISADM_0600M += 	 		          '</select>'
QISADM_0600M += 	 		         '</div>'
QISADM_0600M += 			  	  '</form>'
QISADM_0600M += 			  	  '<form class="wrap_input">'
QISADM_0600M += 			  	   '<span class="search_label">항목그룹</span>'
QISADM_0600M += 			  	     '<div>'
QISADM_0600M += 		    	      '<select class="search_select">'
QISADM_0600M += 	 	              '<option value="">전체</option>'  
QISADM_0600M += 	 	              '<option value=""></option>'  
QISADM_0600M += 	 	              '<option value=""></option>'  
QISADM_0600M += 	 		          '</select>'
QISADM_0600M += 	 		         '</div>'
QISADM_0600M += 			  	  '</form>'
QISADM_0600M += 			  	  '<form class="wrap_input small_btn_wrap">'
QISADM_0600M += 			  	   '<span class="search_label">항목</span>'
QISADM_0600M += 			  	     '<div>'
QISADM_0600M += 		    	      '<input type="text">'
QISADM_0600M += 			  	      '<button type="button" class="btn_filled_deep_blue searchbox_small_btn"><span>검색</span></button>'    
QISADM_0600M += 	 		         '</div>'
QISADM_0600M += 			  	  '</form>'
QISADM_0600M += 			  	  '<form class="wrap_input small_btn_wrap">'
QISADM_0600M += 			  	   '<span class="search_label">품목</span>'
QISADM_0600M += 			  	     '<div>'
QISADM_0600M += 		    	      '<input type="text">'
QISADM_0600M += 			  	      '<button type="button" class="btn_filled_deep_blue searchbox_small_btn"><span>검색</span></button>'    
QISADM_0600M += 	 		         '</div>'
QISADM_0600M += 			  	  '</form>'
QISADM_0600M += 		      '</div>'
QISADM_0600M += 		      '<div class="second_row">'
QISADM_0600M += 			  	'<form class="wrap_input">'
QISADM_0600M += 			  	  '<span class="search_label">사용여부</span>'
QISADM_0600M += 			  	    '<div class="radio_wrap">'
QISADM_0600M += 			  	      '<input type="radio" id="use" name="radio-1">'
QISADM_0600M += 			  	      '<label for="use">사용</label>'
QISADM_0600M += 			  	    '</div>'
QISADM_0600M += 			  	    '<div class="radio_wrap">'
QISADM_0600M += 			  	      '<input type="radio" id="no_use" name="radio-1">'
QISADM_0600M += 			  	      '<label for="no_use">미사용</label>'
QISADM_0600M += 			  	    '</div>'
QISADM_0600M += 			  	'</form>'
QISADM_0600M += 		      '</div>'
QISADM_0600M += 		    '</div>'
QISADM_0600M += 		    '<div class="search_btn_wrap">'
QISADM_0600M += 			   '<button type="button" class="action_btn btn_filled_deep_blue search_btn"><span>조회하기</span></button>'      
QISADM_0600M += 		    '</div>'
QISADM_0600M += 		  '</div>'

$(document).ready(function () {
    $("body .QISADM_0600M").html(QISADM_0600M);
    // menuOnLighter();
  });




  

/* area_rows_several 여러행짜리 검색바(several rows) */


// 뎁스2 - 신청관리

//  내부_관리_사전검토관리_QISAPL_0100M_사전검토등록
var QISAPL_0100M = "";
QISAPL_0100M +=       '<div class="area_rows_several_wrap">'
QISAPL_0100M += 		      '<div class="several_rows">'
QISAPL_0100M +=              '<div class="search_area_left">'  
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	        '<span class="search_label">조회구분</span>'
QISAPL_0100M += 		    	          '<div class="radio_wrap">'
QISAPL_0100M += 		    	            '<input type="radio" id="radio01" name="radio-2">'
QISAPL_0100M += 		    	            '<label for="radio01">요청일자</label>'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	          '<div class="radio_wrap">'
QISAPL_0100M += 		    	            '<input type="radio" id="radio02" name="radio-2">'
QISAPL_0100M += 		    	            '<label for="radio02">완료일자</label>'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	          '<div>'      
QISAPL_0100M += 		    	            '<input type="date"><span class="tilde">~</span><input type="date">'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	      '</form>'
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	        '<span class="search_label">업무구분</span>'
QISAPL_0100M += 		    	        '<div>'
QISAPL_0100M += 		    	          '<select class="search_select">'
QISAPL_0100M += 	                      '<option value="">전체</option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 		    	          '</select>'
QISAPL_0100M += 		    	        '</div>'
QISAPL_0100M += 		    	      '</form>'
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	        '<span class="search_label">기관</span>'
QISAPL_0100M += 		    	        '<div>'
QISAPL_0100M += 		    	          '<select class="search_select">'
QISAPL_0100M += 	                      '<option value="">전체</option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 		    	          '</select>'
QISAPL_0100M += 		    	        '</div>'
QISAPL_0100M += 		    	        '<div>'
QISAPL_0100M += 		    	          '<select class="search_select">'
QISAPL_0100M += 	                      '<option value="">전체</option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 		    	          '</select>'
QISAPL_0100M += 		    	        '</div>'
QISAPL_0100M += 		    	      '</form>'
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	        '<span class="search_label">신청기관</span>'
QISAPL_0100M += 		    	        '<div>'
QISAPL_0100M += 		    	          '<select class="search_select">'
QISAPL_0100M += 	                      '<option value="">전체</option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 		    	          '</select>'
QISAPL_0100M += 		    	        '</div>'
QISAPL_0100M += 		    	        '<div>'
QISAPL_0100M += 		    	          '<select class="search_select">'
QISAPL_0100M += 	                      '<option value="">전체</option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 	                      '<option value=""></option>'  
QISAPL_0100M += 		    	          '</select>'
QISAPL_0100M += 		    	        '</div>'
QISAPL_0100M += 		    	      '</form>'
QISAPL_0100M +=              '</div>'  
QISAPL_0100M +=              '<div class="search_area_right">'
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	          '<div class="col_01">'
QISAPL_0100M += 		    	            '<span class="search_label">신청구분</span>'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	      '</form>'  
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	          '<div>'
QISAPL_0100M += 		    	            '<span class="search_label">구분</span>'
QISAPL_0100M += 		    	            '<div class="radio_wrap">'
QISAPL_0100M += 		    	              '<input type="radio" id="radio07" name="radio-4">'
QISAPL_0100M += 		    	              '<label for="radio07">민원</label>'
QISAPL_0100M += 		    	            '</div>'    	
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	      '</form>' 
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	          '<div class="col_01">'
QISAPL_0100M += 		    	           '<span class="search_label">신청인</span>'
QISAPL_0100M +=                         '<input type="text">'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	          '<div>'
QISAPL_0100M += 		    	           '<span class="search_label">대상자</span>'
QISAPL_0100M +=                         '<input type="text">'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	      '</form>' 
QISAPL_0100M += 		    	      '<form class="wrap_input">'
QISAPL_0100M += 		    	          '<div class="col_01">'
QISAPL_0100M += 		    	           '<span class="search_label">인</span>'
QISAPL_0100M +=                         '<input type="text">'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	          '<div>'
QISAPL_0100M += 		    	              '<span class="search_label">진행상태</span>'
QISAPL_0100M += 		    	                '<div class="radio_wrap">'
QISAPL_0100M += 		    	                  '<input type="radio" id="radio11" name="radio-5">'
QISAPL_0100M += 		    	                  '<label for="radio11">전체</label>'
QISAPL_0100M += 		    	                '</div>'
QISAPL_0100M += 		    	                '<div class="radio_wrap">'
QISAPL_0100M += 		    	                  '<input type="radio" id="radio12" name="radio-5">'
QISAPL_0100M += 		    	                  '<label for="radio12">사전검토의뢰</label>'
QISAPL_0100M += 		    	                '</div>'
QISAPL_0100M += 		    	                '<div class="radio_wrap">'
QISAPL_0100M += 		    	                  '<input type="radio" id="radio13" name="radio-5">'
QISAPL_0100M += 		    	                  '<label for="radio13">사전검토완료</label>'
QISAPL_0100M += 		    	                '</div>'
QISAPL_0100M += 		    	          '</div>'
QISAPL_0100M += 		    	      '</form>' 
QISAPL_0100M +=              '</div>'  
QISAPL_0100M += 		      '</div>'		    
QISAPL_0100M += 		      '<div class="search_btn_wrap">'                   
QISAPL_0100M +=                '<button type="button" class="action_btn btn_lined_deep_blue">현황출력</button>'      
QISAPL_0100M +=                '<button type="button" class="action_btn btn_filled_deep_blue search_btn"><span>조회하기</span></button>'      
QISAPL_0100M += 		      '</div>'
QISAPL_0100M += 		    '</div>'

$(document).ready(function () {
    $("body .QISAPL_0100M").html(QISAPL_0100M);
    // menuOnLighter();
    });


























/*240102 end*/