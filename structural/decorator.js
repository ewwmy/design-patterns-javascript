class ICoffee {
  cost() {
    throw new Error('The method must be implemented in child classes')
  }
}

class Coffee extends ICoffee {
  cost() {
    return 5
  }
}

class MilkDecorator extends ICoffee {
  constructor(coffee) {
    super()
    this.coffee = coffee
  }

  cost() {
    return this.coffee.cost() + 2
  }
}

class SugarDecorator extends ICoffee {
  constructor(coffee) {
    super()
    this.coffee = coffee
  }

  cost() {
    return this.coffee.cost() + 1
  }
}

const coffee = new Coffee()
console.log(`Кофе: $${coffee.cost()}`)
// Кофе: $5

const coffeeWithMilk = new MilkDecorator(coffee)
console.log(`Кофе с молоком: $${coffeeWithMilk.cost()}`)
// Кофе с молоком: $7

const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk)
console.log(`Кофе с молоком и сахаром: $${coffeeWithMilkAndSugar.cost()}`)
// Кофе с молоком и сахаром: $8