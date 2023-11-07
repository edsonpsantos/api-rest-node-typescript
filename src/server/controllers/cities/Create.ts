import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICities {
  name: string;
  state: string;
}

const bodyValidation: yup.ObjectSchema<ICities> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICities>, res: Response) => {
  let validateData: ICities | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (!err.path) return;
      errors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      erros: errors,
    });
  }

  console.log(validateData);
  return res.send('Create!');
};
