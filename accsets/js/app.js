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
    
    if(h >= 11){
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

//cart
const btn = document.querySelectorAll('.btn-cart');
btn.forEach(function(button, index){
    button.addEventListener("click", function(event){
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector('.des h5').innerText;
        var productPrice = product.querySelector('.des h4').innerText;
        addcart(productImg,productName,productPrice);
    })
});

const btnclick = document.getElementById('lg-bag');
btnclick.addEventListener("click", function(event){
    const boxcart = document.querySelector('.boxcart');
    if (boxcart.style.display=='none'){
        boxcart.style="display: block;";
    } else {
        boxcart.style="display: none;";
    }
})
/*------- Thêm sản phẩm vào giỏ hàng---------- */
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement('tr');
    var cartItem = document.querySelectorAll('table tbody tr');
    for(var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll('.title');
        if(productT[i].innerHTML==productName){
            alert('Không thể vì sản phẩm này đã có trong giỏ hàng.');
            return;
        }

    }
    var trcontent =
    `<tr>
        <td><img src="${productImg}" alt=""></td>
        <td class='title'>${productName}</td>
        <td>${productPrice}</td>
        <td>Xóa</td>
    </tr>`;
    addtr.innerHTML = trcontent;
    var carttable = document.querySelector('table tbody');
    carttable.append(addtr); //thêm thẻ tr vào dưới cùng của thẻ tbody được gán = carttbale
    alert('Đã thêm vào giỏ hàng');
    cartsum();
}

/*-------Tổng tiền thanh toán---------- */
function cartsum(){
    var sumCart = 0;
    var cartItem = document.querySelectorAll('table tbody tr');
    for (var i =0; i<cartItem.length;i++){
        var productPrice = cartItem[i].querySelector('tr td:nth-child(3)').innerHTML;
        const b = parseFloat(productPrice);
        total = b * 1000000; 
        sumCart += total;
        sumprice = sumCart.toLocaleString('de-DE'); // dấu chấm sau số 0
    }
    var getSumcart = document.querySelector('.SumPrice p span');
    getSumcart.innerHTML = sumprice;
}








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
