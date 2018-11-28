let formCadastro = document.querySelector('.contain:first-child form');
let formLogin = document.querySelector('.contain:last-child form');



function enviarDadosCadastro(){    
    if(document.dadosCadastro.email.value.trim == "" || document.dadosCadastro.email.value.indexOf('.') === -1 || document.dadosCadastro.email.value.indexOf('@') === -1){
        console.log( "Campo E-MAIL incorreto!" );
        document.dadosCadastro.email.focus();
        return false;
    }

    if(document.dadosCadastro.senha.value.trim == "" || document.dadosCadastro.senha.value.length < 8){
        console.log("Campo SENHA incorreto!");
        document.dadosCadastro.senha.focus();   
        return false;   
    }    

    if(document.dadosCadastro.senhaconfirme.value.trim == "" || document.dadosCadastro.senhaconfirme.value.length < 8){
        console.log("CAMPO CONFIRME A SENHA incorreto!");
        document.dadosCadastro.senhaconfirme.focus();
        return false;
    }

    if(document.dadosCadastro.senhaconfirme.value != document.dadosCadastro.senha.value){
        console.log("SENHAS não coincidem");
        document.dadosCadastro.senha.focus();
        return false;
    }

    else{   
        return true;

    }
}





