fetch(`./annunci.json`).then((response)=>response.json()).then((data)=>{
    console.log(data);

    data.sort((a, b)=> a.price - b.price)
    
    let radioWrapper = document.querySelector("#radioWrapper")
    let contenitore = document.querySelector("#contenitore")

    function radioCreate(){
        let categories = data.map((annuncio)=>annuncio.category);
        console.log(categories);

        let unique = Array.from(new Set(categories))

        unique.forEach((category)=>{
            let div = document.createElement("div")
            div.classList.add("form-check")
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="form-check-label" for="${category}">
                ${category}
            </label>
                 
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

            

            contenitore.appendChild(div)
        })
    }

    annunci(data);

    let tuttibottoni = document.querySelectorAll(".form-check-input")


    function filtro(array){

        let categoria = Array.from(tuttibottoni).find((button)=>button.checked).id
        console.log(categoria);
        

        if(categoria != "All"){
            let filtered = array.filter((annuncio)=> annuncio.category == categoria);
            console.log(filtered);
            
            return filtered;
        }else{
            return array
        }
        
    }

   
    

    tuttibottoni.forEach((bottone)=>{
        bottone.addEventListener("click", ()=>{
            prezzoInput(filtro(data))
            globalFilter();
        })
    })


    let inputPrezzi = document.querySelector("#inputPrezzi")
    let prezzoValue = document.querySelector("#prezzoValue")


    function prezzoInput(array){
        let prezzi = array.map((annuncio)=> +annuncio.price);
        prezzi.sort((a,b)=> a - b);
        let maxPrezzo = Math.ceil(prezzi.pop());
        inputPrezzi.max = maxPrezzo;
        inputPrezzi.value = maxPrezzo;
        prezzoValue.innerHTML = maxPrezzo;

        
    }

    prezzoInput(filtro(data));



    function filterByPrice(array){
        let filtered = array.filter((annuncio)=> +annuncio.price <= inputPrezzi.value)
        return(filtered);
        
    }

    inputPrezzi.addEventListener("input", ()=>{
        prezzoValue.innerHTML= inputPrezzi.value;
        globalFilter();
    })


    let inputText = document.querySelector("#inputText");

    function filterByText(array){
        let filtered = array.filter ((annuncio)=> annuncio.name.toLowerCase().includes(inputText.value.toLowerCase()) );
        return filtered;
        
    }

    inputText.addEventListener("input", ()=>{
        globalFilter();
    })


    function globalFilter(){
        let filteredByCategory = filtro(data)
        let filteredByPrice = filterByPrice(filteredByCategory)
        let filteredByWord = filterByText(filteredByPrice)

        annunci(filteredByWord)
    }

})




// FINITO ANNUNCI JS