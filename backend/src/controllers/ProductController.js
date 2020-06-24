const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const product = await connection('produto').select('*');

        return response.json(product);
    },

    async create(request, response){
        const {name, qtd, qtd_limite, tipo} = request.body;

        await connection('produto').insert({
            name, 
            qtd, 
            qtd_limite, 
            tipo
        });

        return response.json();
    },

    async delete(request, response){
        const {id} = request.params;

        await connection('produto').where('id', id).delete();

        return response.status(204).send();
    },

    async edit(request, response){
        const {id, qtd, op} = request.params;

        const product = await connection('produto').where('id', id).select('qtd').first();

        if(op == 1){
            if(product.qtd < qtd){
                return response.status(401).json({ error:'Operation not permited'});
            }
    
            await connection('produto').where('id', id).update('qtd', product.qtd - qtd);
            return response.status(204).send();
            
        } else if(op == 0){
            await connection('produto').where('id', id).update('qtd', parseInt(product.qtd) + parseInt(qtd));
            return response.status(204).send();
        }        

        return response.status(204).send();
    }
}