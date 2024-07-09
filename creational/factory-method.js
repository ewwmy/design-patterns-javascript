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

class Creator {
  createProduct() {
    throw new Error('This method should be overridden')
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