const { response } = require('express');



const crearUsuario = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Registro'
    })
}


const loginUsuario = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login'
    })

}


const revalidarToken = async (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Renew'
    })

}




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}