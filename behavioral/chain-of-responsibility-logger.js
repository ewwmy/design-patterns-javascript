class Logger {
  constructor(level) {
    this.level = level
    this.nextLogger = null
  }

  setNext(logger) {
    this.nextLogger = logger
    return logger
  }

  log(message, level) {
    if (this.level <= level) {
      this.write(message)
    }
    if (this.nextLogger) {
      this.nextLogger.log(message, level)
    }
  }

  write(message) {
    throw new Error('This method should be overridden')
  }
}

class BaseLogger extends Logger {
  constructor() {
    super(null)
  }

  write() {
    console.log('=== LOG MESSAGE ===')
  }
}

class DebugLogger extends Logger {
  constructor() {
    super(DEBUG)
  }

  write(message) {
    console.log(`[DEBUG]: ${message}`)
  }
}

class InfoLogger extends Logger {
  constructor() {
    super(INFO)
  }

  write(message) {
    console.log(`[INFO]: ${message}`)
  }
}

class WarnLogger extends Logger {
  constructor() {
    super(WARN)
  }

  write(message) {
    console.log(`[WARN]: ${message}`)
  }
}

class ErrorLogger extends Logger {
  constructor() {
    super(ERROR)
  }

  write(message) {
    console.log(`[ERROR]: ${message}`)
  }
}

const DEBUG = 1
const INFO = 2
const WARN = 3
const ERROR = 4

const logger = new BaseLogger()

logger
  .setNext(new DebugLogger())
  .setNext(new InfoLogger())
  .setNext(new WarnLogger())
  .setNext(new ErrorLogger())

logger.log('This is a debug message', DEBUG)
logger.log('This is an info message', INFO)
logger.log('This is a warning message', WARN)
logger.log('This is an error message', ERROR)

// === LOG MESSAGE ===
// [DEBUG]: This is a debug message
// === LOG MESSAGE ===
// [DEBUG]: This is an info message
// [INFO]: This is an info message
// === LOG MESSAGE ===
// [DEBUG]: This is a warning message
// [INFO]: This is a warning message
// [WARN]: This is a warning message
// === LOG MESSAGE ===
// [DEBUG]: This is an error message
// [INFO]: This is an error message
// [WARN]: This is an error message
// [ERROR]: This is an error message