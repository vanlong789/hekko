const activiLogin = document.querySelectorAll('.login-list__li');
const getLogin = document.querySelector('.postion');
const containerList = document.querySelectorAll('.container-scroll__hinden');
const tabFooter = document.querySelectorAll('.icon-list');

let index = 0;
function checkLogin(){
    index ++;
    if(index === 1){
        getLogin.classList.add('open');
    }else if(index === 2){
        getLogin.classList.remove('open');
        index = 0;
    }
}


// xử lý phần click các thanh chọn
let tabIndex = 1;
logicTabskBar(tabIndex);
function onTaskBar(n){
    logicTabskBar(n);
}

function logicTabskBar(input){
    if(input <= 1){
        let i;
    for(i = 0; i<containerList.length; i++){
        containerList[i].style.display = "none";
    }
    for(i = 0; i<tabFooter.length; i++){
        tabFooter[i].classList.remove('activi-color');
    }
     containerList[input].style.display = "block";
     tabFooter[input].classList.add('activi-color');
    }else{
        alert('chưa có thông tin')
    }
}