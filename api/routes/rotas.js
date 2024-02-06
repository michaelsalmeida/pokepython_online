import express from 'express';

import { treinadorController } from '../controllers/treinador.js';

const routes = express.Router();

routes.post('/treinador/login', treinadorController.login);

 


export default routes;