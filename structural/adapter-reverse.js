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
  constructor(newPrinter) {
    this.newPrinter = newPrinter
  }

  printOld() {
    return this.newPrinter.printNew()
  }
}

const ENV = 'Old System'

const oldPrinter = new OldPrinter()
console.log(
  `${ENV}:`,
  oldPrinter.printOld()
)
// Old System: Old Printer

const newPrinter = new NewPrinter()
const adapter = new PrinterAdapter(newPrinter)
console.log(
  `${ENV}:`,
  adapter.printOld()
)
// Old System: New Printer