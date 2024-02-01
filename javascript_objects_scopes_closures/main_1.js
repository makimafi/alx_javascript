// File: 2-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
        // Create an empty object only if both w and h are not positive integers or are 0
        if (w === undefined || h === undefined) {
          return {};
        }
      } else {
        // Initialize instance attributes width and height
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  