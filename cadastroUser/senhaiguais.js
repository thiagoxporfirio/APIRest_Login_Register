function cadastro(){

    let senha = formcadastro.senha.value
    let repsenha = formcadastro.rep_senha.value

    if(senha == "" && senha <= 5){
        alert("Senha deve conter mais de 06 caracteres")
        formcadastro.senha.focus()
        return false
    }

    if(repsenha == "" && repsenha <= 5){
        alert("Senha com menos de 05 Caracteres")
        formcadastro.rep_senha.focus()
        return false
    }

    if(senha != repsenha){
        alert("Senhas diferentes")
        formcadastro.rep_senha.focu()
        return false

    }

}