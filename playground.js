

const jwt = require('jasonwebtoken')

const user = {
    id: "20",
    username: "Joao",
    password: "123457"
}

const secret = "uashd98ashd8ashd89as7hd"

function createToken(){

    const token = jwt.sign({ id: user.id, username: user.username }, secret)
    console.log(token)
}


function testeToken(token){
    try{
        const validData = jwt.verify(token, secret)
        console.log(validData)

    } catch (error){
        console.log(error)
    }
}













// Testando o bcrypt


// const bcrypt = require('bcryptsjs')

// const password = "Meu password"


// const salt = bcrypt.genSaltSync(14)
// const cryptPassword = bcrypt.hashSync(password, salt)

// console.log(cryptPassword)

// // Saber se o password esta igual no banco de dados.
// const dbSavedPassword = ""
// console.log(bcrypt.compareSync(password, dbSavedPassword))