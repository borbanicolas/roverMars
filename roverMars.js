// grid x 5 y 5
//rover x y direction gridPosition

//girar  direction
//andar gridPosition


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
            case  "N":
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
            case  "N":
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
       var comando = comand
       console.log(comando)
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








let rover1 = new rover("N", [x = 1, y = 2])
let rover2 = new rover ("E", [x = 3, y = 3])


comand1 = ['L','M','L','M','L','M','L','M','M']
comand2 = ['M','M','R','M','M','R','M','R','R','M'] 

console.log(rover1)
rover1.instruction(comand1)
console.log(rover2)
rover2.instruction(comand2)
console.log(rover1)
console.log(rover2)
