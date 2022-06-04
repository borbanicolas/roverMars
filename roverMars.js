// grid x 5 y 5
//rover x y direction gridPosition

//girar  direction
//andar gridPosition

let grid = [5,5]

class rover {
    constructor(direction, gridPosition = [x,y]){
        this.direction = direction
        this.gridPosition = gridPosition
    }
    
    //class functions

    Move(instruction){
    
        switch(instruction){
            case "N":
                this.gridPosition[1]++
                return this.gridPosition
            case "S":
                this.gridPosition[1]--
                return this.gridPosition
            case "W":
                this.gridPosition[0]--
                return this.gridPosition
            case "E":
                this.gridPosition[0]++
                return this.gridPosition

        }    
    }

    turnL(instruction){

        switch(instruction){
            case "N":
                this.direction = "W"
                break
            case "W":
                this.direction = "S"
                break
            case "S":
                this.direction = "E"
                break
            case "E":
                this.direction = "N"
                break
        }
    }

    turnR(instruction){

        switch(instruction){
            case "N":
                this.direction = "E"
                break
            case "E":
                this.direction = "S"
                break
            case "S":
                this.direction = "W"
                break
            case "W":
                this.direction = "N"
                break
        }
    }

    instruction(comand){
       console.log(comand.join(""))
       comand.forEach(element => {
           switch (element){
                case "M":
                    this.Move(this.direction)
                    break
                case "L":
                    this.turnL(this.direction)
                    break
                case "R":
                    this.turnR(this.direction)
                    break
           }
          
       });

    }
    gridLimit(grid){
        let xIsLowerThan0 = grid[0] < 0
        let yIsLowerThan0 = grid[1] < 0
        let xIsHigherThan5 = grid[0] > 5
        let yIsHigherThan5 = grid[1] > 5
        if(xIsLowerThan0 || yIsLowerThan0 || xIsHigherThan5 || yIsHigherThan5){
            console.log('vc quebrou a sonda, parabens!')
            return this.gridPosition = ['broken rover'], this.direction = ''
        }else{
            return
        }
    }
}



let rover1 = new rover("N", [x = 1, y = 2])
let rover2 = new rover ("E", [x = 3, y = 3])


comand1 = ['L','M','L','M','L','M','L','M','M']
comand2 = ['M','M','R','M','M','R','M','R','R','M'] 


console.log(grid)
console.log('the rover1 position is in ',rover1.gridPosition, rover1.direction)
rover1.instruction(comand1)
rover1.gridLimit(rover1.gridPosition)
console.log('the rover2 position is in ',rover2.gridPosition, rover2.direction)
rover2.instruction(comand2)
rover2.gridLimit(rover2.gridPosition)
console.log('position of rover1 set to ', rover1.gridPosition, rover1.direction)
console.log('position of rover2 set to ', rover2.gridPosition, rover2.direction)
