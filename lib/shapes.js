//Circle Triangle Square 
class Shape {
    constructor() {
    this.shapecolor = 'red'
    }
}
// let square = new Shape()
class Square extends Shape {
    render() {
        this.shapecolor
        console.log(this.shapecolor)
    }
    changeshapecolor(color) {
        this.shapecolor = color;
    }
}
const firstSquare = new Square()
firstSquare.render()
firstSquare.changeshapecolor('blue')
firstSquare.render()

// let square = new Shape()
class Circle extends Shape {
    render() {
        this.shapecolor
        console.log(this.shapecolor)
    }
    changeshapecolor(color) {
        this.shapecolor = color;
    }
}
const firstCircle = new Circle()
firstCircle.render()
firstCircle.changeshapecolor('green')
firstCircle.render()

// let square = new Shape()
class Triangle extends Shape {
    render() {
        this.shapecolor
        console.log(this.shapecolor)
    }
    changeshapecolor(color) {
        this.shapecolor = color;
    }
}
const firstTriangle = new Triangle()
firstTriangle.render()
firstTriangle.changeshapecolor('yellow')
firstTriangle.render()