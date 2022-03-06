const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
/* active nghe sự kiện click add class vào navbar */
if (bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
/* Nghe sự kiện click để thoát active */
if (close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}