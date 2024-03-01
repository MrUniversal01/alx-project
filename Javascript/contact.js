    function validateemail(email) {
        var validemail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
         if(email.match(validemail)){
            return true;
        }
        else{
            alert("Invalid Email address")
            document.form.email.focus();
            return false;
        }
 
    }

