// File: 2-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {}; // returning an empty object if w or h are not positive integers
      }
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  