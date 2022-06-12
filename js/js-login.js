// form login & register
const stateLogin = document.getElementById("itemLogin")
const stateRes = document.getElementById("itemRegister")
const boxLogin = document.getElementById("box-login")
const boxRegister = document.getElementById("box-register")

stateLogin.addEventListener("click", ()=>{
    stateLogin.classList.add("activeStateUser")
    stateRes.classList.remove("activeStateUser")
    boxLogin.classList.add("show")
    boxLogin.classList.remove("hide")
    boxRegister.classList.add("hide")
    boxRegister.classList.remove("show")
})


stateRes.addEventListener("click", ()=>{
    stateRes.classList.add("activeStateUser")
    stateLogin.classList.remove("activeStateUser")
    boxRegister.classList.add("show")
    boxRegister.classList.remove("hide")
    boxLogin.classList.add("hide")
    boxLogin.classList.remove("show")
})

// validate form
const formSuccess = document.getElementById("form-success")
const formMain = document.getElementById("form-login")

var submit = document.getElementById('btn-login');
var ipEmail = document.getElementById('mail-user');
var ipPass = document.getElementById('pass-user');
var errEmail = document.getElementById('errEmail');
var errPass = document.getElementById('errPass');
submit.onclick = function() {
    var chkMail = checkEmail(ipEmail);
    var chkPass = checkPass(ipPass);
    sessionStorage.account = ipEmail.value;

    if(chkMail == false) {
        errEmail.style.display = 'block';
    } 
    else {
        errEmail.style.display = 'none'}
    if(chkPass == false) {
        errPass.style.display = 'block';
    } 
    else {
        errPass.style.display = 'none'}
    if(chkMail == true && chkPass == true) {
        formSuccess.classList.remove("hide");
        formSuccess.classList.add("show");
        setTimeout(() => {
            formSuccess.classList.remove("show");
            formSuccess.classList.add("hide");
            window.open("./index.html","_self");
        }, 2000);
    }
}
function checkEmail(Email) {
    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email.value))) {
        return false;
    }
    return true;
}
function checkPass(Pass) {
    if(Pass.value.length <= 10) {
        return false
    }
    return true;
}
function checkRePass(Pass, RePass)
{
    if(Pass.value === RePass.value)
        return true;
    return false;
}

var submit2 = document.getElementById('btn-register');
var ipEmail2 = document.getElementById('mail-user-rs');
var ipPass2 = document.getElementById('pass-user-rs');
var ipRePass2 = document.getElementById('re-pass-user-rs');
var errEmail2 = document.getElementById('errEmail2');
var errPass2 = document.getElementById('errPass2');
var errRePass2 = document.getElementById('errRePass2');

submit2.onclick = function() {
    var chkMail = checkEmail(ipEmail2);
    var chkPass = checkPass(ipPass2);
    var chkRePass = checkRePass(ipPass2,ipRePass2);

    if(chkMail == false) {
        errEmail2.style.display = 'block';
    } 
    else {
        errEmail2.style.display = 'none'}

    if(chkPass == false) {
        errPass2.style.display = 'block';
    } 
    else {
        errPass2.style.display = 'none'}

    if(chkRePass == false) {
        errRePass2.style.display = 'block';
    } 
    else {
        errRePass2.style.display = 'none'}

    if(chkMail == true && chkPass == true && chkRePass == true) {
        formSuccess.classList.remove("hide");
        formSuccess.classList.add("show");
        setTimeout(() => {
            formSuccess.classList.remove("show");
            formSuccess.classList.add("hide");
            window.open("./Login.html","_self");
        }, 2000);
    }
}

// show password
const inPassLogin = document.getElementById("pass-user")
const showPass = document.getElementById("eye-Pass")
showPass.addEventListener("click",()=>{
    if(showPass.classList.contains("fa-eye"))
    {
        showPass.classList.remove("fa-eye");
        showPass.classList.add("fa-eye-slash")
        inPassLogin.type="text";
    }
    else {
        showPass.classList.remove("fa-eye-slash")
        showPass.classList.add("fa-eye");
        inPassLogin.type="password";
    }
})

const inPassRegister = document.getElementById("pass-user-rs")
const showPassRegis = document.getElementById("rs-eye-Pass")
const inRepassRegister = document.getElementById("re-pass-user-rs")
const showRePassRegis = document.getElementById("rs-eye-RePass")

showPassRegis.addEventListener("click",()=>{
    if(showPassRegis.classList.contains("fa-eye"))
    {
        showPassRegis.classList.remove("fa-eye");
        showPassRegis.classList.add("fa-eye-slash")
        inPassRegister.type="text";
    }
    else {
        showPassRegis.classList.remove("fa-eye-slash")
        showPassRegis.classList.add("fa-eye");
        inPassRegister.type="password";
    }
})

showRePassRegis.addEventListener("click",()=>{
    if(showRePassRegis.classList.contains("fa-eye"))
    {
        showRePassRegis.classList.remove("fa-eye");
        showRePassRegis.classList.add("fa-eye-slash")
        inRepassRegister.type="text";
    }
    else {
        showRePassRegis.classList.remove("fa-eye-slash")
        showRePassRegis.classList.add("fa-eye");
        inRepassRegister.type="password";
    }
})