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
function checkLogin(){
    var textLg =  document.getElementById('login').value;
    if( textLg ==="nguyenduc123az321@gmail.com"){
        window.location.href="login.html";
    } else{
        confirm('Email này chưa được đăng kí trong hệ thống!');
    }

} 
/*if(login){
    login.addEventListener('click',()=> {
        alert('Đăng nhập không thành công! Email này chưa được đăng kí trong hệ thống!')
    })
}*/
