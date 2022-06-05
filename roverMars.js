export class rover {
    constructor(direction, gridPosition = [x,y], id){
        this.direction = direction
        this.gridPosition = gridPosition
        this.id = id
    }

    gridSize = [5,5]

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
    //    console.log(comand.join(""))
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
    
    
}


