let primaIcona = document.querySelector(".primaIcona")
let circle1 = document.querySelector("#circle1")

let docenti = [

    {nome : `Sampdoria`, anno: 1946, url: `./media/logo-sampdoria.png`},

    {nome : `Catania`, anno: 1929, url: `./media/logo-catania.png`},

    {nome : `Inter`, anno: 1908, url: `./media/logo-inter.png`},

    {nome : `Vicenza`, anno: 1902, url: `./media/logo-vicenza.webp`}
];


docenti.forEach((docente)=>{
    let div = document.createElement("div");
    div.classList.add("moved");
    div.style.backgroundImage = `url(${docente.url})`;
    circle1.appendChild(div);
})

let carta = document.querySelector(".card-custom")


let move = document.querySelectorAll(".moved")

let check = true;

primaIcona.addEventListener("click", ()=>{
    if(check == true){
        move.forEach((palla, i)=>{
            let angolo = (360*i) / move.length;
            palla.style.transform= `rotate(${angolo}deg) translate(150px) rotate(-${angolo}deg) `
        })

        let icona1 = document.querySelector("#icona1")
        icona1.classList.remove("fa-solid", "fa-plus")
        icona1.classList.add("fa-solid", "fa-minus")
        check = false;
       
    }else{
        check = true;
        icona1.classList.remove("fa-solid", "fa-minus")
        icona1.classList.add("fa-solid", "fa-plus")

        move.forEach((palla, i)=>{
            palla.style.transform= `rotate(0deg)translate(0px)`
        })

        carta.classList.add("d-none")

    
    }
        
        
    
} )

let face = document.querySelector(".face")
let back = document.querySelector(".back")

move.forEach((palla, i)=>{
    palla.addEventListener("click", ()=>{
        let docente = docenti[i];
        face.style.backgroundImage = `url(${docente.url})`
        back.innerHTML = `
            <h3 class="text-yellow"> ${docente.nome}</h3>
            <p class="text-yellow"> ${docente.anno}</p>
        `;

        carta.classList.remove("d-none")

    })
})





// <!-- FINITO CHI SIAMO JS -->
