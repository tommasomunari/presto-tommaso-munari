let navbar = document.querySelector("#navbar");
let links = document.querySelectorAll(".link-navbar")
let logoNavbar = document.querySelector("#logoNavbar")
let article1 = document.querySelector("#article1")
let primoNumero = document.querySelector("#primoNumero")
let secondoNumero = document.querySelector("#secondoNumero")
let terzoNumero = document.querySelector("#terzoNumero")

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


article1.addEventListener("click", ()=>{
    article1.style.backgroundColor= "var(--red)"
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

let counter = 0;

let interval = setInterval(()=>{
    if(counter < 100){
        counter++
        primoNumero.innerHTML= counter
    }else{
        clearInterval(interval)
        console.log("ho finito");
        
    }
}, 10)


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
}


createInterval(100, primoNumero, 100);
createInterval(250, secondoNumero, 10);
createInterval(400, terzoNumero, 100);


// let slides = [
//     {image: `https://cdn.artphotolimited.com/images/6718bf5f258c849397f6133d/1000x1000/star-wars-luke-skywalker-and-yoda-on-dagobah.jpg`, name: `Luke Skywalker`, text: `Cresciuto come un semplice contadino sul pianeta desertico Tatooine, scopre di essere il figlio del potente cavaliere Jedi Anakin Skywalker (diventato poi Darth Vader) e della senatrice Padmé Amidala. Guidato dai maestri Obi-Wan Kenobi e Yoda, Luke impara a controllare la Forza e diventa l'ultimo grande Cavaliere Jedi della sua generazione, giocando un ruolo fondamentale nella sconfitta dell'Impero Galattico e nella redenzione di suo padre.`},
    
//     {image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJfAnMZEWk1gNjMvseuYRR53k3jXos8l5KhcS70EEvMoKF8PuEdIRHGE&s=10` , name: `Darth Vader`, text: `Darth Vader è uno dei cattivi più iconici della storia del cinema, celebre per il suo elmo nero e il respiro profondo. Originariamente conosciuto come Anakin Skywalker, era un talentuoso Cavaliere Jedi destinato a portare equilibrio nella Forza. Tuttavia, il timore di perdere i suoi cari e la sete di potere lo hanno spinto verso il Lato Oscuro. Diventato il braccio destro dell'Imperatore Palpatine, ha guidato lo spietato Impero Galattico nella caccia ai ribelli. Alla fine, l'amore per il figlio Luke Skywalker lo ha portato a redimersi prima della sua tragica scomparsa.`},
    
//     {image: `https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/1200?cb=20150206140125` , name: `Yoda`, text: `Yoda è uno dei più potenti e saggi Maestri Jedi della storia di Star Wars, noto per la sua pelle verde, la bassa statura e l'iconico modo di parlare invertito. Per oltre ottocento anni ha addestrato generazioni di cavalieri, tra cui Luke Skywalker, insegnando loro i segreti della Forza. Nonostante l'aspetto fragile, possiede un'incredibile agilità in combattimento e una profonda connessione con il lato chiaro. `},
    
//     {image: `https://static.wikia.nocookie.net/starwars/images/1/10/Imperatore_Palpatine.jpg/revision/latest?cb=20080122141926&path-prefix=it` , name: `Palpatine`, text: `Usando l'inganno e la manipolazione politica, ha orchestrato le Guerre dei Cloni per distruggere l'Ordine Jedi dall'interno. Ha corrotto il giovane Anakin Skywalker, trasformandolo in Darth Vader, e ha convertito la Repubblica nel primo Impero Galattico. Maestro assoluto del Lato Oscuro della Forza, governa attraverso la paura fino alla sua apparente caduta per mano del suo stesso apprendista.`},
    
// ]



// let swiperWrapper = document.querySelector(".swiper-wrapper")

// slides.forEach((slide)=>{
//     let div = document.createElement("div")
//     div.classList.add("swiper-slide")
//     div.innerHTML= `
//         <figure>
//             <img class="img-slide-1" src=`${image}` alt="luke skywalker">
//         </figure>
//         <h3>${name}</h3>
//         <p>${text}</p>
    
    
//     `
//     swiperWrapper.appendChild(div)
// })

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
    
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
    
    
// });





