/**
 * Adapter
 * 
 * Adapter is a structural design pattern that allows objects with 
 * incompatible interfaces to work together by wrapping the object 
 * with an interface that the client expects.
 */

class OldPrinter {
  printOld() {
    return 'Old Printer'
  }
}

class NewPrinter {
  printNew() {
    return 'New Printer'
  }
}

class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter
  }

  printNew() {
    return this.oldPrinter.printOld()
  }
}

const ENV = 'New System'

const newPrinter = new NewPrinter()
console.log(
  `${ENV}:`,
  newPrinter.printNew()
)
// New System: New Printer

const oldPrinter = new OldPrinter()
const adapter = new PrinterAdapter(oldPrinter)
console.log(
  `${ENV}:`,
  adapter.printNew()
)
// New System: Old Printer