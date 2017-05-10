/**
 * Created by Home on 25/04/2017.
 */
$(document).ready(function(){
    $("#show_login").click(function () {
        $("#show_login").hide();
        $("#login_form").fadeIn("slow");
    });
});

function login() {
    var data = {name: $('input:text[id=user]').val(), password: $('input:password[id=pass]').val()};
    $.ajax({
        url: "http://localhost:8080/service/user/add",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

function forgotPass() {
    var data = "http://localhost:8080/eetakemon/mailto?="+ $('input:text[id=email]').val();
    $.getJSON(data);
    $("#ForgotPass").modal("hide");
    $("#infomsg").modal("show");
}



