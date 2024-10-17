class NotificationSender {
  send(message) {
    throw new Error('Method `send()` should be overridden')
  }
}

class TelegramSender extends NotificationSender {
  send(message) {
    console.log(`Sending notification in Telegram: "${message}"`)
  }
}

class WhatsAppSender extends NotificationSender {
  send(message) {
    console.log(`Sending notification in WhatsApp: "${message}"`)
  }
}

class Notification {
  constructor(sender) {
    this.sender = sender
  }

  sendNotification(message) {
    throw new Error('Method `sendNotification()` should be overridden')
  }
}

class InstantNotification extends Notification {
  sendNotification(message) {
    console.log('Instant notification has been sent')
    this.sender.send(message)
  }
}

class DelayedNotification extends Notification {
  sendNotification(message) {
    console.log('Delayed notification will be sent in 5 seconds...')
    setTimeout(() => {
      this.sender.send(message)
    }, 5000)
  }
}

const telegramSender = new TelegramSender()
const whatsAppSender = new WhatsAppSender()

const instantTelegramNotification = new InstantNotification(telegramSender)
instantTelegramNotification.sendNotification('Hello from Telegram!')

const instantWhatsAppNotification = new InstantNotification(whatsAppSender)
instantWhatsAppNotification.sendNotification('Hello from WhatsApp!')

const delayedTelegramNotification = new DelayedNotification(telegramSender)
delayedTelegramNotification.sendNotification('Delayed notification from Telegram')

const delayedWhatsAppNotification = new DelayedNotification(whatsAppSender)
delayedWhatsAppNotification.sendNotification('Delayed notification from WhatsApp')

// Instant notification has been sent
// Sending notification in Telegram: "Hello from Telegram!"
// Instant notification has been sent
// Sending notification in WhatsApp: "Hello from WhatsApp!"
// Delayed notification will be sent in 5 seconds...
// Delayed notification will be sent in 5 seconds...
// Sending notification in Telegram: "Delayed notification from Telegram"
// Sending notification in WhatsApp: "Delayed notification from WhatsApp"