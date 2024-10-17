class House {
  constructor() {
    this.rooms = 0
    this.windows = 0
    this.garage = false
    this.swimmingPool = false
    this.garden = false
  }
}

class HouseBuilder {
  constructor() {
    this.house = new House()
  }

  setRooms(rooms) {
    this.house.rooms = rooms
    return this
  }

  setWindows(windows) {
    this.house.windows = windows
    return this
  }

  addGarage() {
    this.house.garage = true
    return this
  }

  addSwimmingPool() {
    this.house.swimmingPool = true
    return this
  }

  addGarden() {
    this.house.garden = true
    return this
  }

  build() {
    return this.house
  }
}

const smallHouse = new HouseBuilder()
  .setRooms(2)
  .setWindows(4)
  .build()

const luxuryHouse = new HouseBuilder()
  .setRooms(5)
  .setWindows(10)
  .addGarage()
  .addSwimmingPool()
  .addGarden()
  .build()

console.log(smallHouse) // House { rooms: 2, windows: 4, garage: false, swimmingPool: false, garden: false }
console.log(luxuryHouse) // House { rooms: 5, windows: 10, garage: true, swimmingPool: true, garden: true }