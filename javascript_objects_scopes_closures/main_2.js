class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            // Set width to w and height to h
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;
