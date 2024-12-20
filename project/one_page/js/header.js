$(document).ready(function(){
    function navigo (){
    const header = document.querySelector('header');
    const headerheight = header.clientHeight;
    document.addEventListener('scroll', onScroll, { passive: true });
    function onScroll () {
        const scrollposition = pageYOffset;
    const nav = document.querySelector('header');
    const bighead = document.getElementById("masthead");
    if (headerheight<=scrollposition){
        //nav.classList.add('fix');
    }
    else {
        //nav.classList.remove('fix');
    }

    } 
    
}
    navigo()

    
    });

      $(".m_menu_btn_open").on("click", function() {
        $(".m_menu").fadeIn();
    });
    $(".m_menu_btn_close").on("click", function() {
        $(".m_menu").fadeOut();
    });