// 4-rectangle.js
class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
    
    print() {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
    
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  