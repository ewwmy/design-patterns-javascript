// reciever
class ExtendedMath {
  constructor(value = 0) {
    this.value = value
  }

  square() {
    return this.value ** 2
  }

  cube() {
    return this.value ** 3
  }
}

// base command
class Command {
  execute() {
    throw new Error('This method should be overridden')
  }
}

// square command
class SquareCommand extends Command {
  constructor(subject) {
    super()
    this.subject = subject
  }

  execute() {
    return this.subject.square()
  }
}

// cube command
class CubeCommand extends Command {
  constructor(subject) {
    super()
    this.subject = subject
  }

  execute() {
    return this.subject.cube()
  }
}

// invoker
class Calculator {
  history = []

  execute(command) {
    this.history.push(command.constructor.name)
    return command.execute()
  }
}

const math = new ExtendedMath(3)

const squareCommand = new SquareCommand(math)
const cubeCommand = new CubeCommand(math)

const calculator = new Calculator()

console.log(calculator.execute(squareCommand)) // 9
console.log(calculator.execute(cubeCommand)) // 27

console.log(calculator.history) // [ 'SquareCommand', 'CubeCommand' ]