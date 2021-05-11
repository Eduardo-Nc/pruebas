const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        require: true
    },
    surnames: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    company_name: {
        type: String,
        require: true
    },
    rfc: {
        type: String,
        require: true,
        unique: true
    }
});


module.exports = model('Usuario', UsuarioSchema);

