const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {

    if(req.user.assinante){
        res.send('Esse dado so deve ser visto pelo assinante')}

    else{
        res.status(401).send(' Voce nao e Assinante acesso negado')
    }
})

router.get('/free', auth, (req,res) =>{
    res.send('Esse dado so deve ser visto por quem esta logado')
})


module.exports = router;