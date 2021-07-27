import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HousesService {
  async getAll(query = {}) {
    const houses = await dbContext.House.find(query)
    return houses
  }

  async getById(id) {
    const house = await dbContext.House.findById(id)
    if (!house) {
      throw new BadRequest('Invalid ID')
    }
    return house
  }

  async create(body) {
    const house = await dbContext.House.create(body)
    return house
  }
}

export const housesService = new HousesService()
