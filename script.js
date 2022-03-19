let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

// menu toggle

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// menu img user settings

let userSetting = document.querySelector('.user');
let userInfo = document.querySelector('.userConfig');

function userDropdown(){
    userInfo.classList.toggle('active');
}
userSetting.addEventListener('click', userDropdown);



