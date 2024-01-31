class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            // Set width and height to undefined
            this.width = undefined;
            this.height = undefined;
        }
    }
}

module.exports = Rectangle;
