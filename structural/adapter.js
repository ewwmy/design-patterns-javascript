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