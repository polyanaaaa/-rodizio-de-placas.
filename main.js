function placas(){
    const texto = document.querySelector("h1");
    const num = document.querySelector('#valor').value;
    const dia = document.querySelector('#valor2').value;
    
   
    
    if((num ==1 || num==2) && (dia=="segunda" || dia=="Segunda" || dia=="segunda feira")){
        texto.innerHTML = "não pode";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        
    }else  if((num ==3 || num==4) && (dia=="terca"|| dia =="terça" || dia=="Terça")){
        texto.innerHTML = "não pode";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        

        
    }
    else  if((num ==7 || num==8) && (dia=="quinta" || dia == "Quinta" || dia == "quinta feira"|| dia == "Quinta feira")){
        texto.innerHTML = "não pode";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
      
    }
    else  if((num ==9 || num==0) && (dia=="sexta"||dia=="Sexta"||dia=="sexta feira")){
        texto.innerHTML = "não pode";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        
    }
    else  if((num ==4 || num==5) && (dia=="quarta"||dia=="Quarta"||dia=="quarta feira")){
        texto.innerHTML = "não pode";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
     } else{
        texto.innerHTML = "pode";
    }
}