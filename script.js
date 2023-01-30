class Shape {
    constructor(height, width) {
        this.shapeName = 'Shape';
        this.div = $(`<div>`);
        this.height = height;
        this.width = width;
        this.randomSpot();
        $('#container').append(this.div);
        $(this.div).click(() => {
            this.describe();
        });
        $(this.div).dblclick(() => {
            this.div.remove();
        });
    }

    randomSpot() {
        let randomCoord = ((min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        })
        let xCoord = randomCoord(0, (600 - this.width))
        let yCoord = randomCoord(0, (600 - this.height))
        $(this.div).css('left', `${xCoord}px`);
        $(this.div).css('top', `${yCoord}px`);
    }

    radius() {
        return 'N/A';
    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return (this.height * 2) + (this.width * 2);
    }

    describe() {
        $('#shapeP').text(`Shape Name: ${this.shapeName}`);
        $('#widthP').text(`Width: ${this.width}`);
        $('#heightP').text(`Height: ${this.height}`);
        $('#radiusP').text(`Radius: ${this.radius()}`);
        $('#areaP').text(`Area: ${this.area()}`);
        $('#perimeterP').text(`Perimeter: ${this.perimeter()}`);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.shapeName = 'Rectangle';
        // this.div = $(`<div></div>`);            commented lines here are carried over from the parent Class, you don't need to type them again if they are going to stay the same
        // this.randomSpot();
        // $('#container').append(this.div);
        $(this.div).css({ 'height': `${this.height}px`, 'width': `${this.width}px`, 'background-color': 'green', 'position': 'absolute' });
        // $(this.div).click(() => {
        //     this.describe();
        // });
        // $(this.div).dblclick(() => {
        //     this.div.remove();
        // });
    }
}

$('#rButton').click((e) => {
    e.preventDefault();
    new Rectangle($('#height').val(), $('#width').val());
})

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.shapeName = 'Square';
        $(this.div).css({ 'height': `${sideLength}px`, 'width': `${sideLength}px`, 'background-color': 'red', 'position': 'absolute' });
    }
}

$('#sButton').click((e) => {
    e.preventDefault();
    new Square($('#sideLength').val());
})

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.shapeName = 'Circle';
        this.diameter = radius * 2;
        $(this.div).css({ 'height': `${this.diameter}px`, 'width': `${this.diameter}px`, 'border-radius': '50%', 'background-color': 'purple', 'position': 'absolute' });
    }

    radius() {
        return this.diameter / 2;
    }

    area() {
        return Math.PI * Math.pow(this.radius(), 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius();
    }

    describe() {
        $('#shapeP').text(`Shape Name: ${this.shapeName}`);
        $('#widthP').text(`Width: ${this.width}`);
        $('#heightP').text(`Height: ${this.height}`);
        $('#radiusP').text(`Radius: ${this.radius()}`);
        $('#areaP').text(`Area: ${this.area()}`);
        $('#perimeterP').text(`Circumference: ${this.perimeter()}`);
    }
}

$('#cButton').click((e) => {
    e.preventDefault();
    new Circle($('#radius').val());
})

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.shapeName = 'Isosceles Right Triangle';
        $(this.div).css({ 'border-bottom': `${this.height}px solid yellow`, 'border-right': `${this.height}px solid transparent`, 'position': 'absolute' });
    }

    area() {
        return Math.pow(this.height, 2) / 2;
    }

    perimeter() {
        return (this.height * 2) + (this.height * Math.sqrt(2));
    }
}

$('#tButton').click((e) => {
    e.preventDefault();
    new Triangle($('#triangleHeight').val());
})