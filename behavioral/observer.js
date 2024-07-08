// observable
class Subject {
  observers = []

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(
      obs => obs !== observer,
    )
  }

  notify(data) {
    this.observers.forEach(observer =>
      observer.update(data),
    )
  }
}

// observer
class Observer {
  constructor(name) {
    this.name = name
  }

  update(data) {
    console.log(
      `"${this.name}" recieved a notification: "${data}"`,
    )
  }
}

const subject = new Subject()

const observer1 = new Observer('Observer 1')
const observer2 = new Observer('Observer 2')

subject.addObserver(observer1)
subject.addObserver(observer2)

subject.notify('Change 1')
// "Observer 1" recieved a notification: "Change 1"
// "Observer 2" recieved a notification: "Change 1"

subject.removeObserver(observer1)

subject.notify('Change 2')
// "Observer 2" recieved a notification: "Change 2"
