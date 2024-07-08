class Participant {
  mediator = null

  constructor(name) {
    this.name = name
  }

  send(message, to = null) {
    console.log(
      `${this.name} sends: "${message}" to ${
        to || '[ALL]'
      }`,
    )
    this.mediator.send(message, this.name, to)
  }

  receive(message, from) {
    console.log(
      `${this.name} received: "${message}" from ${from}`,
    )
  }
}

class Mediator {
  participants = {}

  register(participant) {
    this.participants[participant.name] = participant
    participant.mediator = this
  }

  send(message, from, to = null) {
    if (to) {
      if (this.participants[to]) {
        this.participants[to].receive(message, from)
      }
    } else {
      Object.keys(this.participants).forEach(to => {
        if (to !== from) {
          this.participants[to].receive(message, from)
        }
      })
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

charlie.send('Hey everyone!')
// Charlie sends: "Hey everyone!" to [ALL]
// Alice received: "Hey everyone!" from Charlie
// Bob received: "Hey everyone!" from Charlie