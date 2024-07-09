/**
 * HMVC (Hierarchical Model-View-Controller) is an architectural pattern
 * that divides an application into nested MVC triads, where each triad
 * handles a specific part of the UI. This promotes modularization,
 * code reusability, and easier maintenance
 * by organizing components hierarchically.
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

class UserProfileView {
  render(user) {
    return `User Profile: ${user.name}`
  }
}

class UserLoginView {
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
    this.userProfileView = new UserProfileView()
    this.userLoginView = new UserLoginView()
  }

  profileAction(userId) {
    // assume fetching user details from database or API
    const user = User.findById(userId)
    return this.userProfileView.render(user)
  }

  loginAction() {
    return this.userLoginView.render()
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

// hierarchy of controllers
class MainController {
  constructor() {
    this.homeController = new HomeController()
    this.userController = new UserController()
    this.productController = new ProductController()
  }
}

function main() {
  const mainController = new MainController()

  // usage example
  console.log(
    mainController.homeController.indexAction()
  )
  console.log(
    mainController.userController.profileAction(123),
  )
  console.log(
    mainController.userController.loginAction()
  )
  console.log(
    mainController.productController.viewAction(456),
  )
  console.log(
    mainController.productController.listAction()
  )
}

main()
