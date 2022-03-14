/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/


const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');


const router = Router();

router.post( '/new', crearUsuario );

router.post( '/', loginUsuario )

router.get( '/Renew', revalidarToken)

module.exports = router;