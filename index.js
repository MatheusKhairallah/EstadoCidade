const Cidade= ()=> {
    
    

    let mensagem;

    if(cidade==1 && cidade==2 && cidade==3)
    {
        mensagem= `${cidade}/PR`
    }
    
    const campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = mensagem;
};