function check() {
    var email = document.getElementById("email").value;
    if (email != "") {
        var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (exptext.test(email) == false) {
            //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
            alert("입력한 메일형식이 올바르지 않습니다.");
            document.formtag.email.focus();
            return false;
        }
    }
    return true;
}