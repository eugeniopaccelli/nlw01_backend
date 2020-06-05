import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (request, response) => {

  return response.json({ msg: "Bem vindo(a) ao E-Coleta!" })

});

routes.get('/items',  itemsController.index);
routes.post('/points', pointsController.create);

export default routes;