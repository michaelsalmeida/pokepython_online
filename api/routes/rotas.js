import express from 'express';

import { treinadorController } from '../controllers/treinador.js';

const routes = express.Router();

routes.post('/treinador/login', treinadorController.login);

routes.post('/treinador/cadastroConta', treinadorController.cadastroTreinador);

routes.post('/treinador/recuperarItens', treinadorController.recuperarItens);

routes.post('/treinador/recuperarPokemon', treinadorController.recuperarPokemon);
 


export default routes;