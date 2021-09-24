//JS FOR LOGIN VALIDATION:
function CheckEmpty(event) {
    if (event.target.value == '') {
        event.currentTarget.nextElementSibling.innerHTML = 'لطفا فیلد را پر کنید!';
        return true;
    } else {
        event.currentTarget.nextElementSibling.innerHTML = '';
        return false;
    }
}



//JS FOR REGISTER VALIDATION:
function checkpattern(event) {
    if (event.target.value == '') {
        event.currentTarget.nextElementSibling.innerHTML = 'لطفا فیلد را پر کنید!';
        return true;
    } else {
        var phonenumber = document.querySelector("#phonenumber");
        if (phonenumber.validity.patternMismatch) {
            document.querySelector('#phonenumber-error').innerHTML = 'لطفا شماره صحیح وارد نمایید';
        } else {
            document.querySelector('#phonenumber-error').innerHTML = '';
        }

        var name = document.querySelector("#name");
        if (name.validity.patternMismatch) {
            document.querySelector('#name-error').innerHTML = 'لطفا نام صحیح وارد نمایید';
        } else {
            document.querySelector('#name-error').innerHTML = '';
        }


        var password = document.querySelector("#password");
        if (password.validity.patternMismatch) {
            document.querySelector('#password-error').innerHTML = 'حداقل شش کاراکتر وارد نمایید';
        } else {
            document.querySelector('#password-error').innerHTML = '';
        }
    }
}

function checkpass(event) {
    if (event.target.value == '') {
        event.currentTarget.nextElementSibling.innerHTML = 'لطفا فیلد را پر کنید!';
        return true;
    } else {
        var password = document.querySelector('#password').value;
        var password2 = document.querySelector('#r-password').value;
        if (password != password2) {
            document.querySelector('#r-password-error').innerHTML = 'کلمه عبور تطابق ندارد';
        } else {
            document.querySelector('#r-password-error').innerHTML = '';
        }
    }
}

function ValidateEmail(event) {
    if (event.target.value == '') {
        event.currentTarget.nextElementSibling.innerHTML = 'لطفا فیلد را پر کنید!';
        return true;
    } else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = document.querySelector("#email").value;
        if(email.match(mailformat)) {
            document.querySelector('#email-error').innerHTML = '';
            return true;
        }
        else {
            document.querySelector('#email-error').innerHTML = 'لطفا ایمیل صحیح وارد نمایید';
            return false;
        }
    }
}

