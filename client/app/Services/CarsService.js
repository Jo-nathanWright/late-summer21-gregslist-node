import { ProxyState } from '../AppState.js'
import Car from '../Models/Car.js'
import { api } from '../Services/AxiosService.js'

class CarsService {
  constructor() {
    this.getAllCars()
  }

  async createCar(rawCar) {
    const res = await api.post('cars', rawCar)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async getAllCars() {
    try {
      const res = await api.get('cars')
      ProxyState.cars = res.data.map(c => new Car(c))
    } catch (error) {
      window.alert('We ran into an error getting this car : ' + error)
    }
  }

  async bidCar(carId) {
    try {
      const foundCar = ProxyState.cars.find(c => c.id === carId)
      foundCar.price += 100
      const res = await api.put('cars/' + carId + '/bid', foundCar)
      ProxyState.cars = ProxyState.cars
    } catch (error) {
      window.alert('We ran into an error bidding this car : ' + error)
    }
  }

  async deleteCar(carId) {
    try {
      const res = await api.delete('cars/' + carId)
      ProxyState.cars = ProxyState.cars.filter(c => c.id !== carId)
    } catch (error) {
      window.alert('We ran into an error deleting this car : ' + error)
    }
  }
}

// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()
