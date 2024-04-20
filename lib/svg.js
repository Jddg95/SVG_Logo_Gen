class SVG {
    constructor() {
        this.text = '';
        this.textcolor = '';
        this.shape = {};
    }
    changeText(newText) {
        this.text = newText;
    }
    changeColor(newColor) {
        this.textcolor = newColor;
    }
    changeShape(newShape) {
        this.shape = newShape;
    }
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

