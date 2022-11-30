const startBtn = document.getElementById('start')
const endBtn = document.getElementById('end')

//en klass för hur en cell i griden ska se ut och bete sig
class Cell {
    constructor(i, j, size) {
        this.i = i
        this.j = j
        this.size = size
        this.x = i * size
        this.y = j * size
        this.g = 0
        this.h = 0
        this.f = 0
        this.neighbors = []
        this.parent = undefined
        this.wall = false
        this.col = 'white'
        this.start = false
        this.end = false
    }

    wallCheck(){
        if(Math.random()*1 < .3){
            this.wall = true
            this.col = 'black'
        }
    }

    draw(col) {
        if(col){
            this.col = col
        }

        ctx.fillStyle = this.col

        ctx.fillRect(this.x, this.y, this.size, this.size)
        ctx.strokeRect(this.x, this.y, this.size, this.size)
    }

    addNeighbors(grid){
        this.grid = grid

        //raka
        if(this.i < cols - 1){
            this.neighbors.push(grid[this.i + 1][ this.j]) 
        }
        if(this.i > 0){
            this.neighbors.push(grid[this.i - 1][ this.j]) 
        }
        if(this.j < rows - 1){
            this.neighbors.push(grid[this.i][this.j + 1])
        }
        if(this.j > 0){
            this.neighbors.push(grid[this.i][this.j - 1])
        }

        // diagonala
        if(this.i > 0 && this.j > 0){
            this.neighbors.push(grid[this.i - 1][this.j - 1])
        }
        if(this.i < cols - 1 && this.j < rows - 1){
            this.neighbors.push(grid[this.i + 1][this.j + 1])
        }
        if(this.i > 0 && this.j < rows - 1){
            this.neighbors.push(grid[this.i - 1][this.j + 1])
        }
        if(this.i < cols - 1 && this.j > rows - 1){
            this.neighbors.push(grid[this.i + 1][this.j + 1])
        }
    }

    startCheck(){
        canvas.addEventListener('click', e =>{

            let x = getCursorPosition(canvas, e)[0]
            let y = getCursorPosition(canvas, e)[1]

            if(x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size){
                this.start = true
            }
        })
    }

    endCheck(){
        canvas.addEventListener('click', e =>{

            let x = getCursorPosition(canvas, e)[0]
            let y = getCursorPosition(canvas, e)[1]

            if(x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size){
                this.end = true
            }
        })
    }
}


function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    let cords = [x, y]

    return cords
}

startBtn.addEventListener('click', function(){
    console.log('click')
})
 


