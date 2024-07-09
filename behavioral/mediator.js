/**
 * Mediator
 * 
 * Mediator is a behavioral design pattern that lets you reduce
 * coupling between components by encapsulating how they communicate.
 * In this pattern, a mediator object takes control of the interactions
 * between components.
 */

class Participant {
  constructor(name) {
    this.name = name
    this.mediator = null
  }

  send(message, to) {
    console.log(`${this.name} sends: "${message}" to ${to}`)
    this.mediator.send(message, this.name, to)
  }

  receive(message, from) {
    console.log(
      `${this.name} received: "${message}" from ${from}`,
    )
  }
}

class Mediator {
  constructor() {
    this.participants = {}
  }

  register(participant) {
    this.participants[participant.name] = participant
    participant.mediator = this
  }

  send(message, from, to) {
    if (this.participants[to]) {
      this.participants[to].receive(message, from)
    }
  }
}

const mediator = new Mediator()

const alice = new Participant('Alice')
const bob = new Participant('Bob')
const charlie = new Participant('Charlie')

mediator.register(alice)
mediator.register(bob)
mediator.register(charlie)

alice.send('Hi Bob!', 'Bob')
// Alice sends: "Hi Bob!" to Bob
// Bob received: "Hi Bob!" from Alice

bob.send('Hello Alice!', 'Alice')
// Bob sends: "Hello Alice!" to Alice
// Alice received: "Hello Alice!" from Bob

charlie.send('Hey everyone!', 'Alice')
// Charlie sends: "Hey everyone!" to Alice
// Alice received: "Hey everyone!" from Charlie

charlie.send('Hey everyone!', 'Bob')
// Charlie sends: "Hey everyone!" to Bob
// Bob received: "Hey everyone!" from Charlie