class Car {
  constructor(name, model) {
    this.name = name
    this.model = model
  }

  setYear(year) {
    this.year = year
  }

  clone() {
    const cloned = new Car(this.name, this.model)
    cloned.setYear(this.year)
    return cloned
  }

  toString() {
    console.log(`Car: ${this.name}, Model: ${this.model}, Production Year: ${this.year}`)
  }
}

const car1 = new Car('Tesla', 'Model S')
car1.setYear(2020)
car1.toString() // Car: Tesla, Model: Model S, Production Year: 2020

const car2 = car1.clone()
car2.name = 'BMW'

car2.toString() // Car: BMW, Model: Model S, Production Year: 2020
car1.toString() // Car: Tesla, Model: Model S, Production Year: 2020
