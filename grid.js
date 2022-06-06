export class grid {
    constructor(size = [x,y]){this.size = size}

    gridLimit(grid){
        let xIsLowerThan0 = grid[0] < 0
        let yIsLowerThan0 = grid[1] < 0
        let xIsHigherThan5 = grid[0] > this.size[0]
        let yIsHigherThan5 = grid[1] > this.size[1]
        if(xIsLowerThan0 || yIsLowerThan0 || xIsHigherThan5 || yIsHigherThan5){
            throw 'u broke the rover!!!!!!'
            
        }else{
            return
        }
    }
    isInRightPlace(grid, id, direction){
        let gridToString, resultado,resultDirection, rightPlace, rightDirection
        gridToString = grid.join("")       
        switch(id){
            case 1:resultado = '13', resultDirection = 'N'
            break
            case 2:resultado = '51', resultDirection = 'E'
        }
         gridToString.includes(resultado) ? rightPlace = true : rightPlace = false
         direction.includes(resultDirection) ? rightDirection = true : rightDirection = false
            
         return this.validadePlace(rightPlace, rightDirection)
    }

    validadePlace(rightPlace, rightDirection) {
        switch (rightPlace && rightDirection) {
            case true: return
            case false: throw 'not in right position'
        }
    }
}

