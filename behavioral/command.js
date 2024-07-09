/**
 * Command
 * 
 * Command is a behavioral design pattern that encapsulates a request 
 * as an object, thereby allowing for parameterization of clients with 
 * queues, requests, and operations. It helps in logging changes, 
 * undoing commands, and structuring complex operations.
 */

// base command
class Command {
  execute() {
    throw new Error('This method should be overridden')
  }
}

// reciever
class Light {
  turnOn() {
    console.log('The light is on')
  }

  turnOff() {
    console.log('The light is off')
  }
}

// concrete command 1
class TurnOnLightCommand extends Command {
  constructor(light) {
    super()
    this.light = light
  }

  execute() {
    this.light.turnOn()
  }
}

// concrete command 2
class TurnOffLightCommand extends Command {
  constructor(light) {
    super()
    this.light = light
  }

  execute() {
    this.light.turnOff()
  }
}

// invoker
class RemoteControl {
  setCommand(command) {
    this.command = command
  }

  pressButton() {
    this.command.execute()
  }
}

// create reciever
const light = new Light()

// create concrete commands
const turnOn = new TurnOnLightCommand(light)
const turnOff = new TurnOffLightCommand(light)

// create invoker
const remote = new RemoteControl()

// perform one command
remote.setCommand(turnOn)
remote.pressButton() // The light is on

// perform another command
remote.setCommand(turnOff)
remote.pressButton() // The light is off