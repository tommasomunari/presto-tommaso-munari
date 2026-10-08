fetch(`./annunci.json`).then((response)=>response.json()).then((data)=>{
    console.log(data);

    data.sort((a, b)=> a.price - b.price)
    
    let radioWrapper = document.querySelector("#radioWrapper")

    function radioCreate(){
        let categories = data.map((annuncio)=>annuncio.category);
        console.log(categories);

        let unique = [];

        categories.forEach((category)=>{
            if(!unique.includes(category)){
                unique.push(category)
            }
        })

        console.log(unique);

        unique.forEach((category)=>{
            let div = document.createElement("div")
            div.innerHTML = `
                <div id="radioWrapper" class="accordion-body">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioDefault" id="${category}">
                        <label class="form-check-label" for="${category}">
                            ${category}
                        </label>
                    </div>
                </div>
            
            
            `;
            radioWrapper.appendChild(div)
        })
        
        
    }

    radioCreate();


    function annunci(array){
        contenitore.innerHTML= "";
        array.forEach((annuncio)=>{
            let div = document.createElement("div")
            div.classList.add("card-custom")
            div.innerHTML= `
            
                <p>${annuncio.name}</p>
                <p>${annuncio.category}</p>
                <p>${annuncio.price}$</p>
            
            `;

            let contenitore = document.querySelector("#contenitore")

            contenitore.appendChild(div)
        })
    }

    annunci(data);




    function filtro(categoria){
        if(categoria != "all"){
            let filtered = data.filter((annuncio)=> annuncio.category == categoria);
            annunci(filtered);
        }else{
            annunci(data)
        }
        
    }

    let tuttibottoni = document.querySelectorAll(".form-check-input")

    tuttibottoni.forEach((bottone)=>{
        bottone.addEventListener("click", ()=>{
            filtro(bottone.id)   
        })
    })


    let inputPrezzi = document.querySelector("#inputPrezzi")
    let prezzoValue = document.querySelector("#prezzoValue")


    function prezzoInput(){
        let prezzi = data.map((annuncio)=> +annuncio.price);
        prezzi.sort((a,b)=> a - b);
        let maxPrezzo = Math.ceil(prezzi.pop());
        inputPrezzi.max = maxPrezzo;
        inputPrezzi.value = maxPrezzo;
        prezzoValue.innerHTML = maxPrezzo;

        
    }

    prezzoInput();



    function filterByPrice(){
        let filtered = data.filter((annuncio)=> +annuncio.price <= inputPrezzi.value)
        annunci(filtered);
        
    }

    inputPrezzi.addEventListener("input", ()=>{
        prezzoValue.innerHTML= inputPrezzi.value;
        filterByPrice();
    })


    let inputText = document.querySelector("#inputText");

    function filterByText(parola){
        let filtered = data.filter ((annuncio)=> annuncio.name.toLowerCase().includes(parola.toLowerCase()) );
        annunci(filtered);
        
    }

    inputText.addEventListener("input", ()=>{
        filterByText(inputText.value);
    })
})