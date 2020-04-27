import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); // toda requisicao ao /appointmes vai chamar todas  as rotas do appointRouter

export default routes;
