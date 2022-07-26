   
   function login(){
   
    const email = document.getElementById('email')
    const senha = document.getElementById('password')

fetch('https://reqres.in/api/users/2', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email.value, password: senha.value})
})
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data))

    .catch(error => {
        console.log(error)
    })
   }

