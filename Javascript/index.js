function verify() {
    var regnumber = ($("#regnumber").val())
    if (regnumber.length < 10) {
        alert("invalid Registration NUmber")
        return false;
    }

    else{
        return true;
    }
}

function details() {
    alert("Provide Your details to start the screening process");
    return false;
}
