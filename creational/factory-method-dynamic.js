class ProductA {
  name = 'ProductA'
}

class ProductB {
  name = 'ProductB'
}

class ProductC {
  name = 'ProductC'
}

class ProductFactory {
  static names = {
    A: ProductA,
    B: ProductB,
    C: ProductC,
  }
  create(name) {
    return new this.constructor.names[name]
  }
}

const productFactory = new ProductFactory()

console.log(productFactory.create('A').name) // ProductA
console.log(productFactory.create('B').name) // ProductB
console.log(productFactory.create('C').name) // ProductC