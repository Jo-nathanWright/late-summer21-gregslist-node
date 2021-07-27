import CarsController from '../app/Controllers/CarsController.js'
import JobsController from '../app/Controllers/JobsController.js'
import HousesController from '../app/Controllers/HousesController.js'

class App {
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();
}

// @ts-ignore
window.app = new App()
