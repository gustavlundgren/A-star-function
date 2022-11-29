const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let canvasHeight = canvas.height
let canvasWidth = canvas.width

let rows = 100
let cols = 100

let done = false

//Skapar en ny grid när koden körs
const grid = new Grid(0,0, cols, rows, canvas.height, canvas.width)

grid.createGrid()

function animate() {
    if(!done){
        aStar(grid.start, grid.end)
    }
    
    requestAnimationFrame(animate)
}

animate()