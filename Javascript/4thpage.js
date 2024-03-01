$(document).ready(function(){
    var urlParam = new URLSearchParams(window.location.search);
    var surname = urlParam.get('surname');
    var othernames = urlParam.get('othernames');
    var entryyear = urlParam.get('entryyear');
    var date = urlParam.get('date');
    $("#fullname").val(surname + " " + othernames)
    $("#session").val(entryyear)
    $("#date").val(date)
    $("#myimg").hide();
    $("#map").click(function(){
        $("#myimg").slideToggle(500);
    })
})

function home() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/index.html"
    }
    else{
        return false;
    }
}
function data() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/2ndpage.html"
    }
    else{
        return false;
    }
}
function clearance() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/3rdpage.html"
    }
    else{
        return false;
    }
}
function contact() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/contact.html"
    }
    else{
        return false;
    }
}
function info() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/info.html"
    }
    else{
        return false;
    }
}

function done() {
    var response = confirm("Screening process complete. Go to home page");
    if (response == true){
        window.location = "../HTML/index.html"
    }
    else{
        return false;
    }

}
