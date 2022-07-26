function post (url, body){
    

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText

}

function registerUser(){
    event.preventDefault()
    url = ""
    const nomecompleto = document.getElementById("nome").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const tell = document.getElementById("tell").value
    const senha = document.getElementById("senha").value
    const confirmSenha = document.getElementById("confirmarSenha").value
    const ROLE = "ROLE_USER"

    console.log(nomecompleto, email, tell, senha, confirmSenha)

    body = {

        "email": email,
        "name": nomecompleto,
        "password": senha,
        "role": ROLE,
        "username": username

    }
    post(url, body)
}