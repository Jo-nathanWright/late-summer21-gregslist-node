import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class JobsService {
  async getAll(query = {}) {
    const jobs = await dbContext.Job.find(query)
    return jobs
  }

  async getById(id) {
    const job = await dbContext.Job.findById(id)
    if (!id) {
      throw new BadRequest('Invalid Id')
    }
    return job
  }

  async create(body) {
    const job = await dbContext.Job.create(body)
    return job
  }

  async destroy(id) {
    const job = await dbContext.Job.findByIdAndDelete(id)
    if (!job) {
      throw new BadRequest('Invalid Id')
    }
    return job
  }
}

export const jobsService = new JobsService()
