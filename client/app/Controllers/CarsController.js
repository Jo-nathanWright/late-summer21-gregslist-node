import { ProxyState } from '../AppState.js'
import { carsService } from '../Services/CarsService.js'

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    // When 'cars' changes in the State run the _draw method
    ProxyState.on('cars', _draw)

    // This only runs when the app first loads because data is already in the state
    _draw()
  }

  async createCar() {
    try {
      event.preventDefault()
      const form = event.target
      const rawCar = {
        // @ts-ignore
        make: form.make.value,
        // @ts-ignore
        model: form.model.value,
        // @ts-ignore
        year: form.year.value,
        // @ts-ignore
        price: form.price.value,
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value
      }
      await carsService.createCar(rawCar)
      // @ts-ignore
      form.reset()
    } catch (error) {
      window.alert('We ran into an error creating this car : ' + error)
    }
  }

  deleteCar(carId) {
    carsService.deleteCar(carId)
  }

  bidCar(carId) {
    carsService.bidCar(carId)
  }
}
