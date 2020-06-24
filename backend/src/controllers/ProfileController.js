const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {name} = request.params;
        const product = await connection('produto').where('name','like', '%'+name+'%').select('*');

        return response.json(product);
    },

    async relatorio(request, response){
        const product = await connection('produto').whereRaw('produto.qtd <= produto.qtd_limite').select('*');

        return response.json(product);
    }
}