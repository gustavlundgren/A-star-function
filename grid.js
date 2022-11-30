class Grid {

    //Skapar alla olika variabler inuti klassen.
    constructor(x, y, cols, rows, canvasHeight, canvasWidth) {
        this.x = x;
        this.y = y;
        this.column = cols;
        this.row = rows;
        this.size = canvasHeight / this.column;
        this.grid = new Array(this.row);
        this.end
        this.start
    }
    //Skapar en lista i en array som  
    createGrid() {
        for (let i = 0; i < this.grid.length; i++){
            this.grid[i] = new Array(this.column);
        }

        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j] = new Cell(i, j, this.size)
            }

        }

        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].addNeighbors(this.grid)
                this.grid[i][j].wallCheck()
                this.grid[i][j].draw()
            }

        }

        //start cell och mål cell + visualisering
        //this.end = this.grid[this.column - 1][this.row - 1]
        this.start = this.grid[0][0]

        

        
    }

    setStart(){
        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){

                this.grid[i][j].startCheck()
                if(this.grid[i][j].start){
                    this.start = this.grid[i][j]
                }
            }
        }
        
        if(this.start){
            this.start.draw('red')
            this.start.wall = false 
        }
        

        if(this.end){
            this.end.draw('blue')
            this.end.wall = false
        }
    }

    setEnd(){
        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){

                this.grid[i][j].endCheck()
                if(this.grid[i][j].end){
                    this.end = this.grid[i][j]
                }
            }
        }
        
        if(this.start){
            this.start.draw('red')
            this.start.wall = false 
        }
        
        if(this.end){
            this.end.draw('blue')
            this.end.wall = false
        }
    }
}