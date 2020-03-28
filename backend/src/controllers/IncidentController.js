const connection = require('../database/connection');
module.exports ={
    async index (request,response){
        const{page = 1} = request.query;
        
        //dessa forma com colchete retorna apenas o primeiro resultado de um array
        const [count] = await connection('incidents')
        .count();

        console.log(count);
        
        //com esquema de paginação 
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=','incidents.ong_id')
        .limit(5)
        .offset((page -1 )*5) //pulando esse numero de registros
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async create(request, response){
        const{ title, descriptio, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            descriptio,
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async delete(request,response){
        const {id}  = request.params;
        const ong_id = request.headers.authorization; // id da ong que esta logada

        const incident = await connection('incidents')
            .where ('id', id)
            .select('ong_id')
            .first();

            if(incident.ong_id !== ong_id){
                return response.status(401).json({ error: 'Operation not permitted.'});
                //nao autorizado
            }
            await connection('incidents').where('id', id).delete();
            return response.status(204).send();

    }
};