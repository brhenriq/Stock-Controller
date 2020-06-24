const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id, password} = request.body;

        const user = await connection('usuario').where('id', id).andWhere('senha', password).select('name').first();

        if(!user){
            return response.status(400).json({error:'Incorrect ID or Password'});
        }

        return response.json(user);
    }
}