$(document).ready(function(){
    var urlParam = new URLSearchParams(window.location.search);
    var surname = urlParam.get('firstname');
    var othernames = urlParam.get('othernames');
    $("#text0").val(surname)
    $("#text1").val(othernames)
    $("#myimg").hide();
    $("#map").click(function(){
        $("#myimg").slideToggle(500);
    })
})

// function verify() {
//     for(var i = 0; i <= 14; i++){
//         var text = ($("#text"+i).val())
//         if (text < 1) {
//             alert("You have not completed your form");
//             return false;
//         }
//     }
// }

function home() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/index.html"
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
function file() {
    var dialogResult = confirm("Are you sure You want to leave this page? your screening progress would be canceled");
    if(dialogResult == true){
        window.location = "../HTML/4thpage.html"
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
function complete() {
    alert("Complete your form to navigate to the next page");
    return false;
}

