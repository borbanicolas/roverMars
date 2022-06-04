// grid x 5 y 5
//rover x y direction gridPosition

//girar  direction
//andar gridPosition


class rover {
    constructor(direction, gridPosition = [x,y]){
        this.direction = direction
        this.gridPosition = gridPosition
    }
    
    newPosition

    Move(instruction){
    
        switch(instruction){
            case "N":
                this.newPosition = this.gridPosition
                this.newPosition[1]++
                return this.newPosition
            case "S":
                this.newPosition = this.gridPosition
                this.newPosition[1]--
                return this.newPosition
            case "W":
                this.newPosition = this.gridPosition
                this.newPosition[0]--
                return this.newPosition
            case "E":
                this.newPosition = this.gridPosition
                this.newPosition[0]++

        }

                
                
            
          
        
    }
    

}






function TurnL(instruction) {
    
}
function TurnR(instruction){

}


function instruction(instruction){

}

let rover1 = new rover("N", [x = 1, y = 2])
let rover2 = new rover ("E", [x = 3, y = 2])


rover1.Move(rover1.direction)
rover2.Move(rover2.direction)


console.log(rover1.newPosition, rover2.newPosition)
