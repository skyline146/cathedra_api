import express from 'express'
import dotenv from 'dotenv'
import { TokenRepository, UserRepository } from '../database/repositories'
import bcrypt from 'bcrypt'
import { UserModel } from '../database/models';
import { tokenHelper } from '../helper/token';

dotenv.config();

export class AuthController {

  constructor() {

    this.generateTokens = this.generateTokens.bind(this)
  }

  registration = async (req: express.Request, res: express.Response, next) => {
    try {
      const { email, password } = req.body

      //check is user already exists
      const checkUserEmail = await UserRepository.findOneBy({ email })

      if (checkUserEmail) {
        throw new Error('user already exists')
      }
      console.log('1123131')
      const hashedPassword = bcrypt.hashSync(password, Number(process.env.PASS_SALT));

      const user: Partial<UserModel> = await UserRepository.save({
        email,
        password: hashedPassword,
      })
      console.log("this.token.helper", this.generateTokens)

      const { accessToken, refreshToken } = await this.generateTokens(user)
      res.cookie('refreshToken', refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      // @ts-ignore: error message
      res.data = {
        user,
        accessToken
      };
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async login(req: express.Request, res: express.Response, next) {
    try {
      const { email, password } = req.body

      //check is user already exists
      const user: UserModel = await UserRepository.findOneBy({ email })

      if (!user) {
        throw new Error('User doesnt exists')
      }

      const isEqualPasswords = await bcrypt.compare(password, user.password);

      if (!isEqualPasswords) {
        throw new Error('User doesnt exists')
      }
      const { accessToken, refreshToken } = await this.generateTokens(user)
      res.cookie('refreshToken', refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      // @ts-ignore: error message
      res.data = {
        user,
        accessToken
      };
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async refresh(req: express.Request, res: express.Response, next) {
    try {
      const { refreshToken } = req.cookies

      const userData: Partial<UserModel> = tokenHelper.validateRefreshToken(refreshToken)

      const dbToken = await TokenRepository.findOneBy({ refreshToken })

      if (!userData || !dbToken) {
        throw new Error('User not verified')
      }

      const user: Partial<UserModel> = await UserRepository.findOneBy({ id: userData.id })

      if (!user) {
        throw new Error('User not verified')
      }
      const { accessToken, refreshToken: rt } = await this.generateTokens(user)
      res.cookie('refreshToken', rt, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      // @ts-ignore: error message
      res.data = {
        user,
        accessToken
      };
    } catch (err) {
      next(err)
    }
  }

  async generateTokens(payload: Partial<UserModel>) {
    console.log("token helper ", tokenHelper)
    const { accessToken, refreshToken } = tokenHelper.generateTokens({
      email: payload.email,
      id: payload.id
    })


    await tokenHelper.saveToken(refreshToken, payload.id)

    return { accessToken, refreshToken }
  }
}