import express from 'express'
import { tokenHelper } from '../../helper/token';


export const jwtVerificationMiddleware = (req: express.Request, res: express.Response, next) => {
  try {
    const authHeader = req.header("authorization");

    if (!authHeader) {
      return next(new Error('Access denied'));
    }
    const accessToken = authHeader.split(" ")[1]; // Bearer token

    if (!accessToken) {
      return next(new Error('Access denied'));
    }
    const userData = tokenHelper.validateAccessToken(accessToken);

    if (!userData) {
      return next(new Error('Access denied'));
    }

    //@ts-ignore
    req.user = userData;
    return next();
  } catch (err) {

    return next(new Error('Access denied'));
  }

}




