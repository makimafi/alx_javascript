class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            // If width or height is not positive, create an empty object
            return;
        }
        this.width = w;
        this.height = h;
    }

    print() {
        if (!this.width || !this.height) {
            return;
        }
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }

    rotate() {
        if (!this.width || !this.height) {
            return;
        }
        [this.width, this.height] = [this.height, this.width];
    }

    double() {
        if (!this.width || !this.height) {
            return;
        }
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;

if (require.main === module) {
    const r1 = new Rectangle(2, 3);
    console.log('Normal:');
    r1.print();

    console.log('Double:');
    r1.double();
    r1.print();

    console.log('Rotate:');
    r1.rotate();
    r1.print();
}
