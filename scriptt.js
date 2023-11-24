const numnum=document.querySelector('.numnum');
const LoginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin.popup');
const iconClose=document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    numnum.classList.add('active');
});

LoginLink.addEventListener('click', ()=>{
    numnum.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    numnum.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    numnum.classList.remove('active-popup');
});