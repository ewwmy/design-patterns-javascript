class Product {
  getName() {}
}

class ConcreteProductA extends Product {
  getName() {
      return 'ProductA'
  }
}

class ConcreteProductB extends Product {
  getName() {
      return 'ProductB'
  }
}

class Creator {
  createProduct() {
    throw new Error('Method must be overridden in child class')
  }
}

class ConcreteCreatorA extends Creator {
  createProduct() {
      return new ConcreteProductA()
  }
}

class ConcreteCreatorB extends Creator {
  createProduct() {
      return new ConcreteProductB()
  }
}

const creators = [ new ConcreteCreatorA(), new ConcreteCreatorB() ]
const products = []

for (let creator of creators) {
  products.push(creator.createProduct().getName())
}

console.log(products) // [ 'ProductA', 'ProductB' ]