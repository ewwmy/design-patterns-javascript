/**
 * Inversion of Control (IoC) is a design principle where
 * the control of object creation and dependency management
 * is transferred from the objects themselves to a container
 * or framework. This promotes loose coupling, making code
 * more modular, testable, and maintainable. Dependency
 * Injection (DI) is a common way to implement IoC, where
 * dependencies are provided by an external source rather
 * than the object creating them.
 */

class Logger {
  log(message) {
    console.log(message)
  }
}

class UserServiceInterface {
  createUser(user) {
    throw new Error('This method should be overridden')
  }
}

class UserService extends UserServiceInterface {
  constructor(logger) {
    super()
    this.logger = logger
  }

  createUser(user) {
    this.logger.log(`User created: "${user.name}"`)
    // additional user creation logic could be here
  }
}

// IoC container
class ServiceProvider {
  constructor() {
    this.services = new Map()
  }

  // register a service by its interface or class
  register(name, serviceClass, dependencies = []) {
    this.services.set(name, {
      serviceClass,
      dependencies,
      instance: null,
    })
  }

  // resolve a dependency by its name
  resolve(name) {
    const service = this.services.get(name)
    if (!service) {
      throw new Error(`Service "${name}" is not registered`)
    }

    // return the instance if already created
    if (service.instance) {
      return service.instance
    }

    // create an instance of the service, resolving its dependencies
    const resolvedDependencies = service.dependencies.map(
      depName => this.resolve(depName),
    )
    const instance = new service.serviceClass(
      ...resolvedDependencies,
    )
    service.instance = instance

    return instance
  }
}

// create an instance of the IoC container
const serviceProvider = new ServiceProvider()

// register Logger as a dependency
serviceProvider.register('Logger', Logger)

// register UserService as a dependency, specifying its dependency on Logger
serviceProvider.register(
  'UserServiceInterface',
  UserService,
  ['Logger'],
)

// resolve the UserServiceInterface dependency
const userService = serviceProvider.resolve(
  'UserServiceInterface',
)

userService.createUser({ name: 'John Doe' })
// User created: "John Doe"
