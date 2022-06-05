import { rover } from "./roverMars.js"
import { grid } from "./grid.js"

let rover1 = new rover("N", [1, 2], 1)
let rover2 = new rover ("E", [3, 3], 2)
let gridSize = new grid([5,5])

const comand1 = ['L','M','L','M','L','M','L','M','M']
const comand2 = ['M','M','R','M','M','R','M','R','R','M'] 

//entrada
// console.log(gridSize.size)
// console.log('the rover1 position is in ',rover1.gridPosition, rover1.direction)
// console.log('the rover2 position is in ',rover2.gridPosition, rover2.direction)
 rover1.instruction(comand1)
 rover2.instruction(comand2)
 
//teste
gridSize.gridLimit(rover1.gridPosition)
gridSize.isInRightPlace(rover1.gridPosition, rover1.id, rover1.direction)
gridSize.isInRightPlace(rover2.gridPosition, rover2.id, rover2.direction)
gridSize.gridLimit(rover2.gridPosition)

//saida
console.log('position of rover1 set to ', rover1.gridPosition, rover1.direction)
console.log('position of rover2 set to ', rover2.gridPosition, rover2.direction)