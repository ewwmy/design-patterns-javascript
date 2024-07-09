class DocumentProcessor {
  // template method
  processDocument() {
    this.openDocument()
    this.readDocument()
    this.analyzeDocument()
    this.closeDocument()
  }

  getMetadata() {
    throw new Error('This method should be overridden')
  }

  openDocument() {
    const metadata = this.getMetadata()
    console.log(`- opening ${metadata.type} document`)
  }

  readDocument() {
    const metadata = this.getMetadata()
    console.log(`- reading contents of ${metadata.type} document`)
  }

  analyzeDocument() {
    const metadata = this.getMetadata()
    console.log(`- analyzing ${metadata.type} document`)
  }

  closeDocument() {
    const metadata = this.getMetadata()
    console.log(`- closing ${metadata.type} document`)
  }
}

class PDFProcessor extends DocumentProcessor {
  getMetadata() {
    return {
      type: 'PDF',
    }
  }
}

class WordProcessor extends DocumentProcessor {
  getMetadata() {
    return {
      type: 'Word',
    }
  }
}

class TextProcessor extends DocumentProcessor {
  getMetadata() {
    return {
      type: 'text file',
    }
  }
}

const pdfProcessor = new PDFProcessor()
const wordProcessor = new WordProcessor()
const textProcessor = new TextProcessor()

console.log('Processing PDF file:')
pdfProcessor.processDocument()

console.log('\nProcessing Word file:')
wordProcessor.processDocument()

console.log('\nProcessing text file:')
textProcessor.processDocument()

// Processing PDF file:
// - opening PDF document
// - reading contents of PDF document
// - analyzing PDF document
// - closing PDF document

// Processing Word file:
// - opening Word document
// - reading contents of Word document
// - analyzing Word document
// - closing Word document

// Processing text file:
// - opening text file document
// - reading contents of text file document
// - analyzing text file document
// - closing text file document