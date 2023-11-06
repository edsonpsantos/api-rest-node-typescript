
import { Router } from 'express';
import { StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (_, response) => {
  return response.send('Hello');
});

router.post('/test', (request, response) => {
  console.log(request.body);
  
  
  return response.status(StatusCodes.OK).json(request.body);

});

export { router };
