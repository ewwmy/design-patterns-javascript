/**
 * Strategy
 * 
 * Strategy is a behavioral design pattern that defines a family of 
 * algorithms, encapsulates each one, and makes them interchangeable. 
 * It allows the algorithm to vary independently from the clients 
 * that use it.
 */

// strategy interface
class Strategy {
  execute(a, b) {
    throw new Error(
      'This method should be overridden'
    )
  }
}

// concrete strategies
class AddStrategy extends Strategy {
  execute(a, b) {
    return a + b
  }
}

class SubtractStrategy extends Strategy {
  execute(a, b) {
    return a - b
  }
}

class MultiplyStrategy extends Strategy {
  execute(a, b) {
    return a * b
  }
}

class DivideStrategy extends Strategy {
  execute(a, b) {
    if (b === 0) {
      throw new Error('Деление на ноль')
    }
    return a / b
  }
}

// context
class Calculator {
  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  calculate(a, b) {
    return this.strategy.execute(a, b)
  }
}

// client code
const calculator = new Calculator(new AddStrategy())
console.log(calculator.calculate(10, 5)) // 15

calculator.setStrategy(new SubtractStrategy())
console.log(calculator.calculate(10, 5)) // 5

calculator.setStrategy(new MultiplyStrategy())
console.log(calculator.calculate(10, 5)) // 50

calculator.setStrategy(new DivideStrategy())
console.log(calculator.calculate(10, 5)) // 2
