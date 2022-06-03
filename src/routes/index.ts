import express from 'express'
import { Router } from "express"
import { AuditoriaModel } from '../database/models/Auditoria'
import { CarrierModel } from '../database/models/Carrier'
import { CathedraModel } from '../database/models/Cathedra'
import { AuditoriaRepository } from '../database/repositories/Auditoria'
import { CarrierRepository } from '../database/repositories/Carrier'
import { CathedraRepository } from '../database/repositories/Catherda'
import { authController } from "../controllers"

export const init = () => {
  const router = Router()

  router.post('/registration', authController.registration)
  router.post('/login', authController.login)
  router.put('/refresh', authController.refresh)

  //carrier
  router.get('/carrier/:id', async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params
      const order = await CarrierRepository.findOneBy({ id })
      //@ts-ignore
      res.data = order
      next()
    } catch (err) {
      next(err)
    }
  })

  router.post('/carrier', async (req: express.Request, res: express.Response, next) => {
    try {
      const order: Partial<CarrierModel> = req.body
      const newOrder = await CarrierRepository.save({ ...order })
      //@ts-ignore
      res.data = newOrder
      next()
    } catch (err) {
      next(err)
    }
  })

  //audi
  router.get('/auditoria/:id', async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params
      const order = await AuditoriaRepository.findOneBy({ id })
      //@ts-ignore
      res.data = order
      next()
    } catch (err) {
      next(err)
    }
  })

  router.post('/auditoria', async (req: express.Request, res: express.Response, next) => {
    try {
      const order: Partial<AuditoriaModel> = req.body
      const newOrder = await AuditoriaRepository.save({ ...order })
      //@ts-ignore
      res.data = newOrder
      next()
    } catch (err) {
      next(err)
    }
  })

  //catherda
  router.get('/catherda/:id', async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params
      const order = await CathedraRepository.findOneBy({ id })
      //@ts-ignore
      res.data = order
      next()
    } catch (err) {
      next(err)
    }
  })

  router.post('/catherda', async (req: express.Request, res: express.Response, next) => {
    try {
      const order: Partial<CathedraModel> = req.body
      const newOrder = await CathedraRepository.save({ ...order })
      //@ts-ignore
      res.data = newOrder
      next()
    } catch (err) {
      next(err)
    }
  })


  return router
}