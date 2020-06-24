const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user = await connection('usuario').select('*');
    
        return response.json(user);
    },

    async create(request, response){
        const {name, senha} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('usuario').insert({
            id,
            name,
            senha,
        });

        return response.json({id});
    }
}