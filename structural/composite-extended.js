class CartComponent {
  getPrice() {
    throw new Error('Method `getPrice()` should be overridden')
  }
}

class Item extends CartComponent {
  constructor(name, price) {
    super()
    this.name = name
    this.price = price
  }

  getPrice() {
    return this.price
  }

  display() {
    console.log(`Item: ${this.name}, Price: ${this.price}`)
  }
}

class ItemPackage extends CartComponent {
  constructor(name) {
    super()
    this.name = name
    this.items = []
  }

  add(component) {
    this.items.push(component)
  }

  remove(component) {
    const index = this.items.indexOf(component)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }

  getPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0)
  }

  display() {
    console.log(`Package: ${this.name}`)
    this.items.forEach(item => item.display())
  }
}

class Cart {
  constructor() {
    this.components = []
  }

  add(component) {
    this.components.push(component)
  }

  remove(component) {
    const index = this.components.indexOf(component)
    if (index !== -1) {
      this.components.splice(index, 1)
    }
  }

  getTotalPrice() {
    return this.components.reduce((total, component) => total + component.getPrice(), 0)
  }

  display() {
    console.log('Cart:')
    this.components.forEach(component => component.display())
    console.log(`Total: ${this.getTotalPrice()}`)
  }
}

const item1 = new Item('Phone', 500)
const item2 = new Item('Laptop', 1000)
const item3 = new Item('Earphones', 150)

const package1 = new ItemPackage('Package 1')
package1.add(item1)
package1.add(item2)

const cart = new Cart()
cart.add(package1)
cart.add(item3)

cart.display()

// Cart:
// Package: Package 1
// Item: Phone, Price: 500
// Item: Laptop, Price: 1000
// Item: Earphones, Price: 150
// Total: 1650