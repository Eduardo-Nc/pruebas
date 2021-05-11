
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();



router.post('/new', 
    [ 
        check('name', 'El campo nombre es obligatorio').not().isEmpty(),
        check('surnames', 'El campo apellido es obligatorios').not().isEmpty(),
        check('email', 'El campo correo es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de minimo 6 caracteres').isLength({ min: 6 }),
        check('company_name', 'El nombre de la empresa es obligatorio').not().isEmpty(),
        check('rfc', 'El rfc es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearUsuario 
);

router.post('/login',
    [
        check('email', 'El correo es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario 
);


router.get('/renew', validarJWT ,revalidarToken );




module.exports = router;