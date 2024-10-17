/**
 * Factory Method
 * 
 * Factory Method is a creational design pattern that provides an 
 * interface for creating objects in a superclass, but allows 
 * subclasses to alter the type of objects that will be created.
 */

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

class Factory {
  createProduct() {
    throw new Error('This method should be overridden')
  }
}

class ConcreteFactoryA extends Factory {
  createProduct() {
      return new ConcreteProductA()
  }
}

class ConcreteFactoryB extends Factory {
  createProduct() {
      return new ConcreteProductB()
  }
}

const factories = [ new ConcreteFactoryA(), new ConcreteFactoryB() ]
const products = []

for (let factory of factories) {
  products.push(factory.createProduct().getName())
}

console.log(products) // [ 'ProductA', 'ProductB' ]