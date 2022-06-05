// grid x 5 y 5
//rover x y direction gridPosition

//girar  direction
//andar gridPosition



export class rover {
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


export const grid = [5,5]


