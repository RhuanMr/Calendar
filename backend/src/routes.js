import { Router } from 'express';

import CalendarController from './app/controllers/CalendarController';

const routes = new Router();

routes.post('/calendar', CalendarController.store);
routes.get('/calendar', CalendarController.index);
routes.put('/calendar/:calendar_id', CalendarController.update);

export default routes;
