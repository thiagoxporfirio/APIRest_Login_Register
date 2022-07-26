const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {loginValidate, registerValidate} = require('./validate')

const userController = {
    register: async function (req, res){

        const {error} = registerValidate(req.body)
        if(error){return res.status(400).send(error.message)}

        const selectedUser = await User.findOne( {email: req.body.email} )
        if(selectedUser) return res.status(400).send('Email ja existe no nosso cadastro')


        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            confirmPassword: bcrypt.hashSync(req.body.confirmpassword)
        })

        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    
    
    login: async function (req, res){

        const {error} = loginValidate(req.body)
        if(error){return res.status(400).send(error.message)}


        const selectedUser = await User.findOne( {email: req.body.email} )
        if(!selectedUser) return res.status(400).send('Email ou senha incorreto')

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
        if(!passwordAndUserMatch) return res.status(400).send('Email ou senha incorreto')

        const token = jwt.sign({_id: selectedUser._id, assinante: selectedUser.assinante}, process.env.TOKEN_SECRET )


        res.header('authoriztion-token', token)
        res.send("Usuario logado")
    }
}


module.exports = userController