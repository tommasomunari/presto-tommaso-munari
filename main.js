let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".link-navbar")
let logoNavbar = document.querySelector("#logoNavbar")
let article1 = document.querySelector("#article1")
let primoNumero = document.querySelector("#primoNumero")
let secondoNumero = document.querySelector("#secondoNumero")
let terzoNumero = document.querySelector("#terzoNumero")
let confirm = true;

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

let check = false

logoNavbar.addEventListener("click", ()=>{
    if(check == false){
        logoNavbar.style.transform= "rotate(-90deg)"
        check = true
    }else{
        logoNavbar.style.transform= "rotate(0deg)"
        check = false
    }
})


function createInterval(n, element, time){
    let counter = 0;
    
    let interval = setInterval(()=>{
        if(counter < n){
            counter++
            element.innerHTML= counter
        }else{
            clearInterval(interval)
        }
    }, time)
    
    setTimeout(()=>{
        confirm = true;
    }, 8000)
}


let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && confirm){
            createInterval(100, primoNumero, 100);
            createInterval(200, secondoNumero, 50);
            createInterval(300, terzoNumero, 20);
            confirm = false;
        }
    })
})

observer.observe(primoNumero);


let reviews = [
    {user: `Matteo`, description : `il migliore sito al mondo`, rank: 5 },
    {user: `Luca`, description : `fa schifo, si blocca sempre`, rank: 1 },
    {user: `Michele`, description : `fa il suo`, rank: 3 },
    {user: `Gianni`, description : `molto bello, dettagli ottimi`, rank: 5 }
]

let swiperWrapper = document.querySelector(".swiper-wrapper")

reviews.forEach((recensione)=>{
    let div = document.createElement("div");
    div.classList.add("swiper-slide")
    div.innerHTML= `
    <div class="card-recensione">
        <p class="lead text-center">${recensione.description}</p>
        <h2 class="text-center">${recensione.user}</h2>
        <div class="d-flex justify-content-center star">
            
        </div>
    </div>

    `;

    swiperWrapper.appendChild(div)

})


let stars = document.querySelectorAll(".star")

stars.forEach((star, index)=>{
    for(let i = 1; i <= reviews[index].rank; i++){
        let icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-star")
        star.appendChild(icon)
    }


    let differenza = 5 - reviews[index].rank;

    for(let i = 1; i <= differenza; i++){
        let icon = document.createElement("i")
        icon.classList.add("fa-regular", "fa-star")
        star.appendChild(icon)
    }
})







const swiper = new Swiper('.swiper', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    
    pagination: {
        el: '.swiper-pagination',
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    
    
});





