import { Router } from 'express';

const router = Router();

router.get('/example', (_, response) => {
  return response.send('Hello');
});

export { router };
