//Circle Triangle Square 
class Shape {
    constructor() {
    this.shapecolor = 'red'
    }
    changeshapecolor(color) {
        this.shapecolor = color;
    }

}
// let square = new Shape()
class Square extends Shape {
    render() {
        this.shapecolor
        console.log(this.shapecolor)
    }
    sayhello() {
        console.log('hello')
    }
}
const firstSquare = new Square()
firstSquare.render()
firstSquare.changeshapecolor('blue')
firstSquare.render()
firstSquare.sayhello()

// let square = new Shape()
class Circle extends Shape {
    render() {
        this.shapecolor
        console.log(this.shapecolor)
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
}
const firstTriangle = new Triangle()
firstTriangle.render()
firstTriangle.changeshapecolor('yellow')
firstTriangle.render()