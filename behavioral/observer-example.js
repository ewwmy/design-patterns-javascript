class Subject {
  observers = []

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      obs => obs !== observer,
    )
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state = 0) {
    this.state = state
    this.initialState = state
  }

  update({ type, payload }) {
    switch (type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += payload
        break
      default:
        this.state = this.initialState
    }
  }
}

const stream = new Subject()

const observer1 = new Observer()
const observer2 = new Observer(7)

stream.subscribe(observer1)
stream.subscribe(observer2)

stream.fire({ type: 'INCREMENT' }) // obs1.state = 1; obs2.state = 8
stream.fire({ type: 'INCREMENT' }) // obs1.state = 2; obs2.state = 9
stream.fire({ type: 'DECREMENT' }) // obs1.state = 1; obs2.state = 8
stream.fire({ type: 'ADD', payload: 3 }) // obs1.state = 4; obs2.state = 11

console.log(observer1.state) // 4
console.log(observer2.state) // 11
