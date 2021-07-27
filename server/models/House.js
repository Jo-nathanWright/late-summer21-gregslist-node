import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema({
  year: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: 'No Description Provided' },
  imgURL: { type: String, default: 'https://placehold.it/200x200' }
})

export default House
