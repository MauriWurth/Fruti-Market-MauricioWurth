var btnMenu = document.querySelector('.btnResp');
var menu = document.querySelector('.nav__ul');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle("active");
    console.log("clic")
})
