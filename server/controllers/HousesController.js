import { housesService } from '../services/HousesService'
import BaseController from '../utils/BaseController'

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.bid)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all Houses
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const houses = await housesService.getAll(req.query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Gets Houses by Id
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const house = await housesService.getById(req.params.id)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates Houses
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const house = await housesService.create(req.body)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Modify's Houses Price
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async bid(req, res, next) {
    try {
      const bid = { price: req.body.price, id: req.params.id }
      const house = await housesService.bid(bid)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Deletes Houses
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await housesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted House' })
    } catch (error) {
      next(error)
    }
  }
}
