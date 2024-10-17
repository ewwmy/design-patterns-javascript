class Image {
  constructor(width, height, format) {
    this.width = width
    this.height = height
    this.format = format
  }

  toString() {
    return `Image: ${this.width}x${this.height}, Format: ${this.format}`
  }
}

class ImageBuilder {
  constructor() {
    this.resolutions = []
    this.formats = []
  }

  addResolution(width, height) {
    this.resolutions.push({ width, height })
    return this
  }

  addFormat(format) {
    this.formats.push(format)
    return this
  }

  build() {
    const images = []
    
    for (const resolution of this.resolutions) {
        for (const format of this.formats) {
            images.push(new Image(resolution.width, resolution.height, format))
        }
    }
    
    return images
  }
}

const imageBuilder = new ImageBuilder()
  .addResolution(1920, 1080)
  .addResolution(1280, 720)
  .addResolution(800, 600)
  .addFormat('jpg')
  .addFormat('png')
  .addFormat('webp')

const generatedImages = imageBuilder.build()
generatedImages.forEach(image => console.log(image.toString()))

// Image: 1920x1080, Format: jpg
// Image: 1920x1080, Format: png
// Image: 1920x1080, Format: webp
// Image: 1280x720, Format: jpg
// Image: 1280x720, Format: png
// Image: 1280x720, Format: webp
// Image: 800x600, Format: jpg
// Image: 800x600, Format: png
// Image: 800x600, Format: webp