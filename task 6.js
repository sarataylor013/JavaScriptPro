// JavaScript file task 6.js
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Object literal ====================================================

var myPlane = {
  manufacturer: "Airbus",
  model: "350",
  enginesRunning: false,
  getDescription: function() { return this.manufacturer + " " + this.model; },
  startEngines: function() { this.enginesRunning = true; }
};

// pre-ES6 style ====================================================

// var Aircraft = function(manufacturer, model) {
//     this.manufacturer = manufacturer;
//     // can you code the property model?
//
//     // can you set the property enginesRunning to false?
//
//     this.getDescription = function() {
//       return this.manufacturer + " " + this.model;
//     };
//
//     // can you code the method startEngines?
//
// }

// post-ES6 style ====================================================

// class Aircraft {
//   constructor(manufacturer, model) {
//     this.manufacturer = manufacturer;
//     // can you code the property model?
//
//     // can you set the property enginesRunning to false?
//
//   };
//   getDescription() {
//     return this.manufacturer + " " + this.model;
//   };
//
//   // can you code the method startEngines?
//
// }

// var myPlane = new Aircraft("Airbus", "350");

log(myPlane.getDescription());
logObject(myPlane);
log("Starting engines...");
myPlane.startEngines();
logObject(myPlane);
