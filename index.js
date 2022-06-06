import { rover } from "./roverMars.js"
import { grid } from "./grid.js"

//instructions
const comand1 = ['L','M','L','M','L','M','L','M','M',]
const comand2 = ['M','M','R','M','M','R','M','R','R','M'] 

//   IN
let gridSize = new grid([5,5])
//console.log(gridSize.size)
let rover1 = new rover(1, [1, 2], 'N')
//console.log('the rover1 position is in ',rover1.gridPosition, rover1.direction)
rover1.instruction(comand1)
let rover2 = new rover (2, [3, 3], 'E')
//console.log('the rover2 position is in ',rover2.gridPosition, rover2.direction)
rover2.instruction(comand2)


//test Positions, Directions
gridSize.gridLimit(rover1.gridPosition)
gridSize.isInRightPlace(rover1.gridPosition, rover1.id, rover1.direction)
gridSize.isInRightPlace(rover2.gridPosition, rover2.id, rover2.direction)
gridSize.gridLimit(rover2.gridPosition)


//Out
console.log('position of rover1 set to ', rover1.gridPosition, rover1.direction)
console.log('position of rover2 set to ', rover2.gridPosition, rover2.direction)