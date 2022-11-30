const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const runBtn = document.getElementById('run')
let runAlg

let canvasHeight = canvas.height
let canvasWidth = canvas.width

let rows = 50
let cols = 50

let done = false

//Skapar en ny grid när koden körs
const grid = new Grid(0,0, cols, rows, canvas.height, canvas.width)
grid.createGrid()

runBtn.addEventListener('click', function(){
    runAlg = true
})

function animate() {
    if(!done && runAlg){
        aStar(grid.start, grid.end)
    }
    
    if(!runAlg){
        grid.setEnd()
    }
    

    requestAnimationFrame(animate)
}

animate()

