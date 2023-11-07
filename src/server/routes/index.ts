import { Router } from 'express';

import { CitiesController } from '../controllers';

const router = Router();

router.get('/', (_, response) => {
  return response.send('Running...');
});

router.post('/cities', CitiesController.create);

export { router };
