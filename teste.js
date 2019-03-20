function criar(){
    var p = document.createElement("p");
    p.innerHTML="Formulario";
    p.style.background="#8258FA";
    p.style.textAlign="Center";
    document.body.appendChild(p);
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
    
    document.querySelector("#criar").style.display="none";
}

function salvar(){
    var salvo = document.querySelectorAll("input");
    var aux="";
    for(var i=0; i<salvo.length; i++){
        aux=aux + salvo[i].value + "\n";
    }
    var confirmar = confirm(aux+"\nAs informacoes estao corretas? ");
    if(confirmar){
        window.location.reload()
    }else{
        alert("Digite as informacoes novamente");
    }
}


