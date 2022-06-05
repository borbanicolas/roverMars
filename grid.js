export class grid {
    constructor(size = [x,y]){this.size = size}

    gridLimit(grid){
        let xIsLowerThan0 = grid[0] < 0
        let yIsLowerThan0 = grid[1] < 0
        let xIsHigherThan5 = grid[0] > 5
        let yIsHigherThan5 = grid[1] > 5
        if(xIsLowerThan0 || yIsLowerThan0 || xIsHigherThan5 || yIsHigherThan5){
            console.log('u broke the rover!!!!!!')
            return this.gridPosition = ['the rover is broke'], this.direction = ''
        }else{
            return
        }
    }
    isInRightPlace(grid, id, direction){
        var gridToString, resultado, rightPlace, Rightdirection
        gridToString = grid.join("")       
        switch(id){
            case 1:resultado = '13', Rightdirection = 'N'
            break
            case 2:resultado = '51', Rightdirection = 'E'
        }
         gridToString.includes(resultado) ? rightPlace = true : console.error('wrong place!')
         direction.includes(Rightdirection) ? Rightdirection = true : console.error('wrong direction!')
    }

}

