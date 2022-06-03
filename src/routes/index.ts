import express from 'express'
import { Router } from "express"
import { AuditoriaEntity } from '../database/entities/Auditoria'
import { CarrierEntity } from '../database/entities/Carrier'
import { CathedraEntity } from '../database/entities/Cathedra'
import { AuditoriaRepository } from '../database/repositories/Auditoria'
import { CarrierRepository } from '../database/repositories/Carrier'
import { CathedraRepository } from '../database/repositories/Catherda'
import { authService } from "../service"

export const init = () => {
  const router = Router()

  router.post('/registration', authService.registration)
  router.post('/login', authService.login)
  router.put('/refresh', authService.refresh)

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
      const order: Partial<CarrierEntity> = req.body
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
      const order: Partial<AuditoriaEntity> = req.body
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
      const order: Partial<CathedraEntity> = req.body
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