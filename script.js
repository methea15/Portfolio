function toggleMenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".icons");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function Link(){
    window.open( " https://www.linkedin.com/in/chansomethea-taing/ ",
    "_blank");
  
}
function Link_git(){
    window.open( "https://github.com/methea15 ",
        "_blank");
}
function form(){
    window.open( "https://github.com/methea15/Form", "_blank");
}
function page(){
    window.open( "https://github.com/methea15/Tribute-page/tree/main", "_blank");
}
function hobby(){
    window.open(" ", "_blank")
}
document.getElementById('email-icon').addEventListener('click', function(){
    window.location.href = 'mailto:chansometheataing@gmail.com';
});