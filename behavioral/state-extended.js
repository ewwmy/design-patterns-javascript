/**
 * State
 *
 * State is a behavioral design pattern that allows an object to
 * change its behavior when its internal state changes, making the
 * object appear to change its class.
 */

class State {
  context = null

  handle(context) {
    throw new Error('This method should be overridden')
  }
}

class ConcreteStateA extends State {
  name = 'State A'

  handle() {
    console.log(`Performing actions for: "${this.name}"`)
    this.context.setState(new ConcreteStateB())
  }
}

class ConcreteStateB extends State {
  name = 'State B'

  handle() {
    console.log(`Performing actions for: "${this.name}"`)
    this.context.setState(new ConcreteStateC())
  }
}

class ConcreteStateC extends State {
  name = 'State C'

  handle() {
    console.log(`Performing actions for: "${this.name}"`)
    this.context.setState(new ConcreteStateA())
  }
}

class Context {
  state = null

  constructor() {
    this.setState(new ConcreteStateA())
  }

  setState(state) {
    console.log(`Changing state to: "${state.name}"`)
    this.state = state
    this.state.context = this
  }

  request() {
    this.state.handle()
  }
}

const context = new Context()
// Changing state to: "State A"

context.request()
// Performing actions for: "State A"
// Changing state to: "State B"

context.request()
// Performing actions for: "State B"
// Changing state to: "State C"

context.request()
// Performing actions for: "State C"
// Changing state to: "State A"
