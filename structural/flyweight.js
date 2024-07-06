const INTERNAL_CHANGE_ERR = 'Changing internal state after the object creation is not allowed'

class Product {
  constructor(type, color) {
    // internal state
    this._type = type
    this._color = color

    // external state
    this.serial = null
  }

  get type() {
    return this._type
  }

  get color() {
    return this._color
  }

  set type(value) {
    throw new Error(INTERNAL_CHANGE_ERR)
  }

  set color(value) {
    throw new Error(INTERNAL_CHANGE_ERR)
  }

  display() {
    console.log(`[PRODUCT]: Type: ${this.type}; Color: ${this.color} | Serial: ${this.serial}`)
  }
}

class ProductFactory {
  products = {}

  getProduct(type, color) {
    const key = `${type}:${color}`

    if (!this.products[key]) {
      this.products[key] = new Product(type, color)
    }

    return this.products[key]
  }
}

const factory = new ProductFactory()

const product1 = factory.getProduct('Phone', 'Green')
const product2 = factory.getProduct('Phone', 'Green')
const product3 = factory.getProduct('Laptop', 'Blue')

console.log(product1 === product2) // true
console.log(product1 === product3) // false

product1.serial = 'ABC-123'
product2.serial = 'DEF-456'
product3.serial = 'GHI-789'

product1.display() // [PRODUCT]: Type: Phone; Color: Green | Serial: DEF-456
product2.display() // [PRODUCT]: Type: Phone; Color: Green | Serial: DEF-456
product3.display() // [PRODUCT]: Type: Laptop; Color: Blue | Serial: GHI-789