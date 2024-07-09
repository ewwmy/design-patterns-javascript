/**
 * MVC (Model-View-Controller) is an architectural pattern
 * that separates an application into three interconnected components.
 * The Model manages the data and business logic,
 * the View handles the presentation layer,
 * and the Controller acts as an intermediary, managing user input
 * and updating both the Model and View.
 * This separation promotes code organization, reusability,
 * and maintainability by isolating concerns
 * and enabling independent development of each component.
 */

// models

class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  static findById(id) {
    // simulated database query
    return new User(id, 'John Doe')
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
  }

  static findById(id) {
    // simulated database query
    return new Product(id, 'Example Product', 99.99)
  }
}

// views

class HomeView {
  render() {
    return 'This is the home page'
  }
}

class ProfileView {
  render(user) {
    return `User Profile: ${user.name}`
  }
}

class LoginView {
  render() {
    return 'User Login Form'
  }
}

class ProductDetailView {
  render(product) {
    return `Product Details: ${product.name}, Price: $${product.price}`
  }
}

class ProductListView {
  render() {
    return 'List of products'
  }
}

// controllers

class HomeController {
  constructor() {
    this.name = 'Home'
    this.homeView = new HomeView()
  }

  indexAction() {
    return this.homeView.render()
  }
}

class UserController {
  constructor() {
    this.name = 'User'
    this.profileView = new ProfileView()
    this.loginView = new LoginView()
  }

  profileAction(userId) {
    // assume fetching user details from database or API
    const user = User.findById(userId)
    return this.profileView.render(user)
  }

  loginAction() {
    return this.loginView.render()
  }
}

class ProductController {
  constructor() {
    this.name = 'Product'
    this.productDetailView = new ProductDetailView()
    this.productListView = new ProductListView()
  }

  viewAction(productId) {
    // assume fetching product details from database or API
    const product = Product.findById(productId)
    return this.productDetailView.render(product)
  }

  listAction() {
    return this.productListView.render()
  }
}

function main() {
  const homeController = new HomeController()
  const userController = new UserController()
  const productController = new ProductController()

  // usage example
  console.log(homeController.indexAction())
  console.log(userController.profileAction(123))
  console.log(userController.loginAction())
  console.log(productController.viewAction(456))
  console.log(productController.listAction())
}

main()
