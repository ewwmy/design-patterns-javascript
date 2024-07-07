// abstract products

class AbstractProductA {
  doSomething() {
    throw new Error('This method should be overridden')
  }
}

class AbstractProductB {
  doSomethingElse() {
    throw new Error('This method should be overridden')
  }
}

// concrete products

class ConcreteProductA1 extends AbstractProductA {
  doSomething() {
    return 'ProductA1'
  }
}

class ConcreteProductA2 extends AbstractProductA {
  doSomething() {
    return 'ProductA2'
  }
}

class ConcreteProductB1 extends AbstractProductB {
  doSomethingElse() {
    return 'ProductB1'
  }
}

class ConcreteProductB2 extends AbstractProductB {
  doSomethingElse() {
    return 'ProductB2'
  }
}

// abstract factory

class AbstractFactory {
  createProductA() {
    throw new Error('This method should be overridden')
  }

  createProductB() {
    throw new Error('This method should be overridden')
  }
}

// concrete factories

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA1()
  }

  createProductB() {
    return new ConcreteProductB1()
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA2()
  }

  createProductB() {
    return new ConcreteProductB2()
  }
}

// client code

function clientCode(factory) {
  const productA = factory.createProductA()
  const productB = factory.createProductB()

  console.log(
    productA.doSomething(),
    productB.doSomethingElse()
  )
}

const factory1 = new ConcreteFactory1()
clientCode(factory1) // ProductA1 ProductB1

const factory2 = new ConcreteFactory2()
clientCode(factory2) // ProductA2 ProductB2