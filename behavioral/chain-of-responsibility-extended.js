class Handler {
  _nextHandler = null

  get nextHandler() {
    return this._nextHandler
  }

  set nextHandler(value) {
    throw new Error('"nextHandler" property is not allowed to write to')
  }

  setNext(handler) {
    if (!(handler instanceof Handler))
      throw new Error(`The handler must be an instance of "Handler" class`)

    this._nextHandler = handler
    return handler
  }

  unsetNext() {
    this._nextHandler = null
  }

  handle(request) {
    if (this._nextHandler) {
      return this._nextHandler.handle(request)
    }
    return null
  }
}

class ConcreteHandler1 extends Handler {
  handle(request) {
    if (request === 'request1') {
      return `Handled by ConcreteHandler1`
    } else {
      return super.handle(request)
    }
  }
}

class ConcreteHandler2 extends Handler {
  handle(request) {
    if (request === 'request2') {
      return `Handled by ConcreteHandler2`
    } else {
      return super.handle(request)
    }
  }
}

class ConcreteHandler3 extends Handler {
  handle(request) {
    if (request === 'request3') {
      return `Handled by ConcreteHandler3`
    } else {
      return super.handle(request)
    }
  }
}

const handler1 = new ConcreteHandler1()
const handler2 = new ConcreteHandler2()
const handler3 = new ConcreteHandler3()

handler1.setNext(handler2).setNext(handler3)

const requests = [
  'request1',
  'request2',
  'request3',
  'request4',
]

requests.forEach((request) => {
  const result = handler1.handle(request)
  if (result) {
    console.log(`${request}: ${result}`)
  } else {
    console.log(
      `${request}: No handler could handle this request`,
    )
  }
})

// request1: Handled by ConcreteHandler1
// request2: Handled by ConcreteHandler2
// request3: Handled by ConcreteHandler3
// request4: No handler could handle this request