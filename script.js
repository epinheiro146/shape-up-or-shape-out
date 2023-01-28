// $('#rButton').click(() => {
//     console.log(Shape);
// })

// $('#sButton').click(() => {
//     let square = new Square($('#sideLength').value);
//     console.log(square);
// })

// $('#cButton').click(() => {

// })

// $('#tButton').click(() => {

// })




class Shape {
    constructor(height, width) {
        this.shapeName = 'Shape';
        this.div = $(`<div>`);
        this.height = height;
        this.width = width;
        //this.randomSpot();
        $(this.div).click(() => {
            this.describe();
        });
    }

    // randomSpot() {
    //     randomCoord((min, max) => {
    //         return Math.floor(Math.random() * (max - min)) + min;
    //     })
    //     let xCoord = randomCoord(0, (600 - this.width))
    //     let yCoord = randomCoord(0, (600 - this.height))
    //     $(this.div).css('left', `${xCoord}px`);
    //     $(this.div).css('top', `${yCoord}px`);
    // }

    radius() {
        return '';
    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return (this.height * 2) + (this.width * 2)
    }

    describe() {
        $('#shapeP').text(`Shape Name: ${this.shapeName}`);
        $('#widthP').text(`Width: ${this.width}`);
        $('#heightP').text(`Height: ${this.height}`);
        $('#radiusP').text(`Radius: ${this.radius}`);
        $('#areaP').text(`Area: ${this.area}`);
        $('#perimeterP').text(`Perimeter: ${this.perimeter}`);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.shapeName = 'Rectangle';
        this.div = $(`<div></div>`);
        let rHeight = `${this.height}px`;
        let rWidth = `${this.width}px`;
        $(this.div).css({ 'height': `${rHeight}`, 'width': `${rWidth}`, 'background-color': 'red' });
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.shapeName = 'Square';
        this.div = $(`<div></div>`);

    }
}

$('#sButton').click((e) => {
    e.preventDefault();
    let square = new Square($('#sideLength').value);
    $('#container').append(square.div);
})

$('#rButton').click((e) => {
    e.preventDefault();
    let height = $('#height').value;
    let width = $('#width').value;
    let rectangle = new Rectangle(height, width);
    $('#container').append(rectangle.div);
})

// class Circle extends Shape {
//     constructor(radius) {
//         super(2 * radius, 2 * radius);
//     }
// }
// class Triangle extends Shape {
//     constructor(height) {
//         super(height, height);
//     }

//     area() {

//     }
// }