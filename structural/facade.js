class Engine {
  start() {
    console.log('Двигатель запущен')
  }

  stop() {
    console.log('Двигатель остановлен')
  }
}

class Lights {
  turnOn() {
    console.log('Фары включены')
  }

  turnOff() {
    console.log('Фары выключены')
  }
}

class CarFacade {
  constructor() {
    this.engine = new Engine()
    this.lights = new Lights()
  }

  startCar() {
    this.engine.start()
    this.lights.turnOn()
    console.log('Машина готова к движению')
  }

  stopCar() {
    this.lights.turnOff()
    this.engine.stop()
    console.log('Машина остановлена')
  }
}

const car = new CarFacade()

car.startCar()
// Двигатель запущен
// Фары включены
// Машина готова к движению

car.stopCar()
// Фары выключены
// Двигатель остановлен
// Машина остановлена