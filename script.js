window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
}
)

const faq = document.querySelectorAll('.faq');

faq.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');
    })
})


    const menu = document.querySelector(".nav_menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");
    

    menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
    })    


    const closeNav = () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
        }   
    
    closeBtn.addEventListener('click', closeNav)



    var loader =document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})