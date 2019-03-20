function criar(){
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    h1.innerHTML="Formulario";
    h2.innerHTML="Registros";
    h1.style.background="#8258FA";
    h1.style.textAlign="Center";
    document.body.appendChild(h1);
    var nome = document.createElement("input");
    var endereco = document.createElement("input");
    var cpf = document.createElement("input");
    var celular = document.createElement("input");
   
    
    nome.style.width="40%";
    nome.style.marginRight="8%";
    endereco.style.width="40%";
    endereco.style.marginRight="2%";
    cpf.style.marginTop="2%";
    cpf.style.width="20%";
    cpf.style.marginRight="8%";
    celular.style.marginTop="2%";
    celular.style.width="20%";
    
    document.body.appendChild(nome);
    document.body.appendChild(endereco);
    document.body.appendChild(cpf);
    document.body.appendChild(celular);
    
    
    var titNome = document.createElement("label");
    var titEndereco = document.createElement("label");
    var titCpf = document.createElement("label");
    var titCelular = document.createElement("label");
    
    
    titNome.innerHTML="Nome: ";
    titEndereco.innerHTML="Endereco: ";
    titCpf.innerHTML="CPF: ";
    titCelular.innerHTML="Celular: ";
    
    document.body.insertBefore(titNome,nome);
    document.body.insertBefore(titEndereco,endereco);
    document.body.insertBefore(titCpf,cpf);
    document.body.insertBefore(titCelular,celular);
    document.body.appendChild(h2);
    
    document.querySelector("#criar").style.display="none";
   
}

function salvar(){
    var salvo = document.querySelectorAll("input");
    var aux="";
    var p=document.createElement("p");
    

    for(var i=0; i<salvo.length; i++){
        aux=aux + salvo[i].value + "\n";
    }
    for(var i=0; i<salvo.length; i++){
        salvo[i].value="";
    }
    var confirmar = confirm(aux+"\nAs informacoes estao corretas? ");
   
    if(confirmar){
         p.innerHTML=aux;
         document.body.appendChild(p);
       
    }else{
        alert("Digite as informacoes novamente");
    }
}




