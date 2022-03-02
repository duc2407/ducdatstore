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
/* Check login đầu vào check thông tin chuyển hướng */
function checkLogin(){
    var textLg =  document.getElementById('login').value;
    textLg = textLg.toLowerCase();
    if( textLg ==="nguyenduc123az321@gmail.com" || textLg === "quangdat2002th@gmail.com" ){
        window.location.href="login.html";
    } else {
        confirm('Email này chưa được đăng kí trong hệ thống!');
    }
}
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
/*
var active = document.querySelector('.trangchu');
active.classList.remove('active');
var menuactive = document.querySelectorAll('a');
console.log(menuactive);
for(var i=1;i<7;i++){
    if(menuactive[i].onclick= function(){
        menuactive[i].classList.add('active');
        console.log(menuactive[i])
    });
};*/
/*
function menuadmin(admin){
    return `<h1>${admin.id}</h1>
            <p>${admin.name}</p>
            <p>Vị trí: ${admin.vitri}</p>`
}
var newMenu = admin.map(menuadmin);
function aloalo(){
    var test1 = document.getElementById('admin').value;
    test1 = newMenu.join('');
    return test1;
}
console.log(aloalo());

var admin = [
    {
        id: 1,
        name : 'Đức',
        vitri: 'Admin hệ thống'
    },
    {
        id: 2,
        name: 'Đạt',
        vitri: 'Admin lập trình',
    },
];
var user =[
    {
        id: 0,
        name: 'Thành',
        vitri: 'Người dùng'
    },
    {
        id: 1,
        name: 'Dương',
        vitri: 'Người dùng'
    },
    {
        id: 2,
        name: 'Duyên',
        vitri: 'Người dùng'
    }
] */

/*
 */
/*if(login){
    login.addEventListener('click',()=> {
        alert('Đăng nhập không thành công! Email này chưa được đăng kí trong hệ thống!')
    })
}*/
