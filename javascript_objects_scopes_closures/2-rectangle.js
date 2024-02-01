#!/usr/bin/node

// File: 2-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
        // Create an empty object if w or h is not a positive integer or is 0
        return {};
      } else {
        // Initialize instance attributes width and height
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  