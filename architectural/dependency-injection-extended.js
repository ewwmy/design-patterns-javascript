// logger
class Logger {
  log(message) {
    console.log(message)
  }
}

// user service which is dependent on logger
class UserService {
  constructor(logger) {
    this.logger = logger
  }

  createUser(user) {
    this.logger.log(`User created: "${user.name}"`)
    // additional user creation logic could be here
  }
}

// dependency container
class DependencyContainer {
  constructor() {
    this.dependencies = new Map()
  }

  // register dependency
  register(name, dependency) {
    this.dependencies.set(name, dependency)
  }

  // resolve dependency
  resolve(name) {
    if (this.dependencies.has(name)) {
      return this.dependencies.get(name)
    }
    throw new Error(
      `Dependency "${name}" is not registered`,
    )
  }
}

// initialize dependency container
const container = new DependencyContainer()

// register logger as a dependency
container.register('Logger', new Logger())

// resolve dependency for user service
const logger = container.resolve('Logger')
const userService = new UserService(logger)

userService.createUser({ name: 'John Doe' })
// User created: "John Doe"
