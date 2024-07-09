/**
 * Dependency Injection (DI) is a pattern where an object's 
 * dependencies are provided by an external source, rather 
 * than the object creating them itself. This promotes loose 
 * coupling and makes the code easier to test and maintain.
 */

class Logger {
  log(message) {
    console.log(message)
  }
}

class UserService {
  constructor(logger) {
    this.logger = logger
  }

  createUser(user) {
    this.logger.log(`User created: "${user.name}"`)
    // additional user creation logic could be here
  }
}

const logger = new Logger()
const userService = new UserService(logger)

userService.createUser({ name: 'John Doe' })
// User created: "John Doe"
