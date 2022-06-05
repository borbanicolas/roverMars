import { rover } from "./roverMars.js"
import { grid } from "./roverMars.js"

let rover1 = new rover("N", [1, 2])
let rover2 = new rover ("E", [3, 3])


const comand1 = ['L','M','L','M','L','M','L','M','M']
const comand2 = ['M','M','R','M','M','R','M','R','R','M'] 


console.log(grid)
console.log('the rover1 position is in ',rover1.gridPosition, rover1.direction)
rover1.instruction(comand1)
rover1.gridLimit(rover1.gridPosition)
console.log('the rover2 position is in ',rover2.gridPosition, rover2.direction)
rover2.instruction(comand2)
rover2.gridLimit(rover2.gridPosition)
console.log('position of rover1 set to ', rover1.gridPosition, rover1.direction)
console.log('position of rover2 set to ', rover2.gridPosition, rover2.direction)