const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const runBtn = document.getElementById('run')
const startBtn = document.getElementById('start')
const endBtn = document.getElementById('end')


let runAlg
let endSet
let startSet

let canvasHeight = canvas.height
let canvasWidth = canvas.width

let rows = 10
let cols = 10

let done = false

//Skapar en ny grid när koden körs
const grid = new Grid(0,0, cols, rows, canvas.height, canvas.width)
grid.createGrid()

runBtn.addEventListener('click', function(){
    if(runAlg){
        location.reload()
    }else{
        runAlg = true
        runBtn.textContent = 'Reset'  
    }
})

startBtn.addEventListener('click', function(){
    startSet = true
})

endBtn.addEventListener('click', function(){
    endSet = true
})

function animate() {
    if(!done && runAlg){
        aStar(grid.start, grid.end)
    }
    
    if(!runAlg && startSet){
        grid.setStart()

        if(grid.start){
            startSet = false
        }
    }

    if(!runAlg && endSet){
        grid.setEnd()
        if(grid.end){
            endSet = false
        }
    }
    

    requestAnimationFrame(animate)
}

animate()

