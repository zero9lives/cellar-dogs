const canvas = document.querySelector('canvas') /*querySelector = grab any element within html*/
const c = canvas.getContext('2d') /*select canvas context = allows to call different canvas draw functions*/
console.log(c) /*makes the canvas appear*/

canvas.width = innerWidth
canvas.height = innerHeight

class Boundary {
  constructor({position}) {
    this.position = position
    this.width = 40
    this.height = 40
    }

    draw() {
      c. fillStyle = 'blue'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const map = [
  ['-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-']
]
const boundaries = []

map.forEach(row => {
  row.forEach(symbol => {
    switch (symbol) {
      case '-':
    }
    console.log(symbol)
  })
})

boundaries.forEach((boundary) => {
  boundary.draw()
})