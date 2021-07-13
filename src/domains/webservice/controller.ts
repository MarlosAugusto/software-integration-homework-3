import { NextFunction, Request, Response } from 'express';

import service from './service';


async function listContinents(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await service.listContinents();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function listContrys(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await service.listContrys();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}


export default {
  listContinents,
  listContrys,
};
