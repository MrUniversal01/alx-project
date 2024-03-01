$(document).ready(function(){
    var urlParam = new URLSearchParams(window.location.search);
    var surname = urlParam.get('surname');
    var othernames = urlParam.get('othernames');
    var birth = urlParam.get('birth');
    var birthplace = urlParam.get('birthplace');
    var permanentaddress = urlParam.get('permanentaddress');
    var state = urlParam.get('state');
    var lga = urlParam.get('lga');
    var faculty = urlParam.get('faculty');
    var department = urlParam.get('department');
    var entryyear = urlParam.get('entryyear');
    var date = urlParam.get('date');
    $("#text0").val(surname)
    $("#text1").val(othernames)
    $("#text21").val(birth)
    $("#text2").val(birthplace)
    $("#text3").val(permanentaddress)
    $("#text5").val(state)
    $("#text6").val(lga)
    $("#text8").val(faculty)
    $("#text9").val(department)
    $("#text7").val(entryyear)
    $("#text20").val(date)
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
