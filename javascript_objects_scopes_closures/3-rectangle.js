// 3-rectangle.js
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            return {}; // Returning an empty object
        }
        this.width = w;
        this.height = h;
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += 'X';
            }
            console.log(row);
        }
    }
}

module.exports = Rectangle;
