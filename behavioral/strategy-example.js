class PaymentStrategy {
  pay(amount) {
    throw new Error('This method should be overridden')
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Credit card payment: $${amount}`)
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`PayPal payment: $${amount}`)
  }
}

class ShoppingCart {
  items = []

  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  addItem(item) {
    this.items.push(item)
  }

  calculateTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0)
  }

  checkout() {
    const total = this.calculateTotal()
    this.strategy.pay(total)
  }
}

const cart = new ShoppingCart(new CreditCardPayment())
cart.addItem({ name: 'Item 1', price: 15 })
cart.addItem({ name: 'Item 2', price: 30 })
cart.checkout() // Credit card payment: $45

cart.setStrategy(new PayPalPayment())
cart.checkout() // PayPal payment: $45