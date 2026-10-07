let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".link-navbar")
let logoNavbar = document.querySelector("#logoNavbar")

console.dir(logoNavbar)

window.addEventListener("scroll", ()=>{
    if(scrollY > 0){
        navbar.classList.remove("bg-black")
        navbar.classList.add("bg-yellow")
        navbar.style.height= "12vh"
        links.forEach((link)=>{
            link.style.color = "var(--black)"
        })
        logoNavbar.src = "http://127.0.0.1:5500/media/logo-black.png"
    }else{
        navbar.classList.remove("bg-yellow")
        navbar.classList.add("bg-black")
        navbar.style.height= "24vh"
        links.forEach((link)=>{
            link.style.color = "var(--yellow)"
        })
        logoNavbar.src = "http://127.0.0.1:5500/media/logo-yellow.png"
    }
})

