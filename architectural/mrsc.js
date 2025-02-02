/**
 * Model-Repository-Service-Controller (M-R-S-C) is a structured approach
 * to organizing application logic by separating concerns into distinct layers.
 *
 * - Model: Represents data entities (e.g., `User`).
 * - Repository: Manages data storage and retrieval (`UserRepository`).
 * - Service: Contains business logic (`UserService`).
 * - Controller: Handles input and delegates to the service (`UserController`).
 *
 * Benefits:
 * - promotes modularity and testability
 * - encapsulates data access and business logic, keeping controllers lightweight.
 */

// model (represents user entity)
class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}

// repository (handles data storage and retrieval)
class UserRepository {
  constructor() {
    this.users = new Map()
  }

  add(user) {
    this.users.set(user.id, user)
  }

  remove(id) {
    this.users.delete(id)
  }

  getAll() {
    return Array.from(this.users.values())
  }
}

// service (contains business logic)
class UserService {
  constructor(repository) {
    this.repository = repository
  }

  createUser(id, name) {
    const user = new User(id, name)
    this.repository.add(user)
    return user
  }

  deleteUser(id) {
    this.repository.remove(id)
  }

  listUsers() {
    return this.repository.getAll()
  }
}

// controller (handles input and output)
class UserController {
  constructor(service) {
    this.service = service
  }

  addUser(req) {
    return this.service.createUser(req.id, req.name)
  }

  removeUser(req) {
    this.service.deleteUser(req.id)
  }

  getUsers() {
    return this.service.listUsers()
  }
}

// example usage
const repository = new UserRepository()
const service = new UserService(repository)
const controller = new UserController(service)

// adding users
controller.addUser({ id: 1, name: 'Alice' })
controller.addUser({ id: 2, name: 'Bob' })

// getting users
console.log(controller.getUsers())
// [ User { id: 1, name: 'Alice' }, User { id: 2, name: 'Bob' } ]

// removing a user
controller.removeUser({ id: 1 })

// getting users again
console.log(controller.getUsers())
// [ User { id: 2, name: 'Bob' } ]
