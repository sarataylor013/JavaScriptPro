// JavaScript file task 5.js
// Created by Harrison Kong
// Copyright (C) Coursera 2020

var someNumbers = [ 125, 27, 111, 56, 89, 2, 3, 9, 66, 18, 7 ];
var someStrings = [ "kale", "broccoli", "carrot", "celery", "onion", "scallion", "leek", "watercrest" ];

// utility function - logArray() =====================================

function logArray(array) {

  if (!Array.isArray(array)) {
    log("logArray(): Wrong parameter, expected an array");
    return;
  };

  var text = "[ ";
  var isFirstItem = true;

  array.forEach( function(element) {
                    isFirstItem ? isFirstItem = false : text += ", ";
                    text += element;
                 }
               );

  text += " ]";

  log(text);
}

logArray(someNumbers);
logArray(someStrings);

// map =================================================================

// var squaredNumbers = someNumbers.map( function() { } );
// logArray(squaredNumbers);

// Your turn!
// Create a new array capitalStrings which turns all the strings in
// someStrings to upper case, then use logArray to print it on the screen
// The function to turn a string to upper case is: str.toUpperCase() )

var capitalStrings = ["replace with your code"];
logArray(capitalStrings);

// filter ===============================================================

// var oddNumbers = someNumbers.filter( function() { } );
// logArray(oddNumbers);

// Your turn!
// Create a new array longStrings which turns all the strings in
// someStrings that are more than 5 characters long, then use logArray to
// print it on the screen
// The length property of a string is str.length (no parenthesis!)

var longStrings = ["replace with your code"];
logArray(longStrings);

// reduce ===============================================================

// var sum = someNumbers.reduce( function() { } );
// log(sum);

// Your turn!
// Rewrite the forEach logic above, just add a ", " between each two elements

var newStr = "replace with your code"
newStr = "[ " + newStr + " ]";
log(newStr);
