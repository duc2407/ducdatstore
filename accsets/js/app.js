const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}
const login =  document.getElementById('login');
if(login){
    login.addEventListener('click',()=> {
        alert('Đăng nhập không thành công! Email này chưa được đăng kí trong hệ thống!')
    })
}
