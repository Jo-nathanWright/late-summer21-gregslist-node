import mongoose from 'mongoose'
import CarSchema from '../models/Car'
import ValueSchema from '../models/Value'
import HouseSchema from '../models/House'
import JobSchema from '../models/Job'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Cars = mongoose.model('Car', CarSchema)
  House = mongoose.model('House', HouseSchema)
  Job = mongoose.model('Job', JobSchema)
}

export const dbContext = new DbContext()
