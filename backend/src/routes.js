/**
 * Rotas / recursos
 */
/**
 * Métodos HTTP:
 * GET: Buscar infromação no backend
 * POST: Criar informação no backend
 * PUT: Alterar informação 
 * DELETE: Deletar informação
 */ 
/**
 * Tipos de parâmetros:
 * Query (parametros nomeados e enviados na rota após o simbolo de interrogação, filtro...
 * Route Params: Parametros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos..
 */
/**
 * Banco de dados
 * Driver: Select * from users
 * Query Builder: table('users') >> ferramenta knex http://knexjs.org/
 */
// app.get('/users/:id',(request, response) =>{ desse jeito se quiser mandar route params

const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create); 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);




module.exports  = routes; //exportando as rotas