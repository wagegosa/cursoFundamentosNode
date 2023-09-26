// Para trabajar con imagenes
const sharp = require('sharp');

sharp('./original.png')
.resize(100)
.grayscale()
.toFile('resizeBlackandWhile.png')