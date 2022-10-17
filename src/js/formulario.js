function mostrarItensfaq() {

    const itensPerguntasERespostas = document.querySelectorAll(".item")
    console.log (itensPerguntasERespostas)
    
    itensPerguntasERespostas.forEach ( function(item){
        item.addEventListener("click", function(){
           
            const itemAtivoAtual = document.querySelector(".ativo");
            if (itemAtivoAtual) {
                itemAtivoAtual.classList.remove("ativo");
            }
            item.classList.add("ativo");
        })
    })
    
}

mostrarItensfaq()