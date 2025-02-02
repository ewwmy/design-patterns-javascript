/**
 * CQRS (Command Query Responsibility Segregation) is a pattern that separates
 * write operations (commands) from read operations (queries).
 *
 * - Commands: Modify system state (e.g., add or remove users)
 * - Queries: Retrieve data without modifying state.
 *
 * Benefits:
 * - better scalability and separation of concerns
 * - can be extended with event sourcing for additional reliability.
 */

// in-memory data store
class UserStore {
  constructor() {
    this.users = []
  }

  addUser(user) {
    this.users.push(user)
  }

  removeUser(id) {
    this.users = this.users.filter(user => user.id !== id)
  }

  getUsers() {
    return [...this.users]
  }
}

// command handler (handles write operations)
class UserCommandHandler {
  constructor(store) {
    this.store = store
  }

  handle(command) {
    switch (command.type) {
      case 'ADD_USER':
        this.store.addUser(command.payload)
        break
      case 'REMOVE_USER':
        this.store.removeUser(command.payload.id)
        break
      default:
        throw new Error(
          `Unknown command type: ${command.type}`,
        )
    }
  }
}

// query handler (handles read operations)
class UserQueryHandler {
  constructor(store) {
    this.store = store
  }

  execute(query) {
    switch (query.type) {
      case 'GET_USERS':
        return this.store.getUsers()
      default:
        throw new Error(`Unknown query type: ${query.type}`)
    }
  }
}

// example usage
const store = new UserStore()
const commandHandler = new UserCommandHandler(store)
const queryHandler = new UserQueryHandler(store)

// adding users
commandHandler.handle({
  type: 'ADD_USER',
  payload: { id: 1, name: 'Alice' },
})
commandHandler.handle({
  type: 'ADD_USER',
  payload: { id: 2, name: 'Bob' },
})

// querying users
console.log(queryHandler.execute({ type: 'GET_USERS' }))
// [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]

// removing a user
commandHandler.handle({
  type: 'REMOVE_USER',
  payload: { id: 1 },
})

// querying again
console.log(queryHandler.execute({ type: 'GET_USERS' }))
// [ { id: 2, name: 'Bob' } ]
